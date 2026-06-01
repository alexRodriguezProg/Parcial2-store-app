import {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {api} from '../api/axiosInstance';
import {useCartStore} from '../store/useCartStore';

// Componentes importados
import SearchBar from '../components/ui/SearchBar';
import CategoryFilters from '../components/product/CategoryFilters';
import ProductCard from '../components/product/ProductCard';
import Toast from '../components/ui/Toast';

export default function ProductList() {
    const addItem = useCartStore((state) => state.addItem);

    // Estados para los filtros
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    // Estado booleano para manejar la notificación global
    const [showNotification, setShowNotification] = useState(false);

    // Obtener categorías del backend
    const {data: categorias = []} = useQuery({
        queryKey: ['categorias'],
        queryFn: async () => {
            const response = await api.get('/categorias/flat');
            return response.data;
        },
    });

    // Obtener productos aplicando filtros
    const {data: productos = [], isLoading} = useQuery({
        queryKey: ['productos', selectedCategory, searchTerm],
        queryFn: async () => {
            const params: Record<string, any> = {disponible: true};
            if (selectedCategory) params.categoria_id = selectedCategory;
            if (searchTerm) params.search = searchTerm;

            const response = await api.get('/productos/', {params});
            return response.data.items;
        },
    });

    // Función manejadora para agregar y mostrar notificación
    const handleAddToCart = (prod: any) => {
        addItem({
            id: String(prod.id),
            name: prod.nombre,
            description: prod.descripcion,
            price: prod.precio,
            image: prod.imagen_url,
            quantity: 1
        });

        // Activa el mensaje flotante
        setShowNotification(true);

        // Ocultar mensaje después de 1.5 segundos
        setTimeout(() => {
            setShowNotification(false);
        }, 1500);
    };

    return (
        <div className="p-8 relative min-h-full">
            {/* Top Bar / Buscador */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-gray-700">Menú de Productos</h2>
                <SearchBar
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="¿Qué te gustaría comer hoy?"
                />
            </div>

            {/* Filtros de Categoría */}
            <CategoryFilters
                categories={categorias}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* Grid de Productos */}
            {isLoading ? (
                <div className="flex justify-center py-20 text-gray-500">Cargando productos...</div>
            ) : productos.length === 0 ? (
                <div className="text-center py-20 text-gray-500">No se encontraron productos.</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {productos.map((prod: any) => (
                        <ProductCard
                            key={prod.id}
                            product={prod}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            )}

            {/* Mensaje de confirmación */}
            <Toast show={showNotification} message="¡Agregado al carrito!"/>
        </div>
    );
}