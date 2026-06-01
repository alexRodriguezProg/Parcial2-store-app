import {useParams, useNavigate} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {api} from '../api/axiosInstance';
import {useCartStore} from '../store/useCartStore';

// Importación de componentes
import BackButton from '../components/ui/BackButton';
import IngredientBadge from '../components/product/IngredientBadge';

export default function ProductDetail() {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const addItem = useCartStore((state) => state.addItem);

    // Consultar el producto por su ID
    const {data: product, isLoading, isError} = useQuery({
        queryKey: ['producto', id],
        queryFn: async () => {
            const response = await api.get(`/productos/${id}`);
            return response.data;
        },
        enabled: !!id, // Solo se ejecuta si existe un ID
    });

    if (isLoading) return <div className="p-8 text-center text-gray-500">Cargando detalles...</div>;
    if (isError || !product) return <div className="p-8 text-center text-red-500">Error al cargar el producto.</div>;

    return (
        <div className="p-8 max-w-5xl mx-auto">
            {/* Componente BackButton */}
            <BackButton/>

            <div
                className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-100">
                <img
                    src={product.imagen_url || 'https://via.placeholder.com/800?text=Sin+Imagen'}
                    alt={product.nombre}
                    className="w-full md:w-1/2 h-80 md:h-auto object-cover"
                />

                <div className="p-8 flex flex-col justify-between w-full">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-3xl font-bold text-gray-800">{product.nombre}</h2>
                            <span className="text-3xl font-bold text-orange-600">${product.precio.toFixed(2)}</span>
                        </div>

                        <p className="text-gray-500 mb-6 leading-relaxed text-lg">{product.descripcion}</p>

                        {/* Mostrar ingredientes utilizando el componente IngredientBadge */}
                        {product.ingredientes && product.ingredientes.length > 0 && (
                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-800 mb-3 uppercase tracking-wide text-sm">Ingredientes</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.ingredientes.map((ing: any) => (
                                        <IngredientBadge key={ing.id} ingredient={ing}/>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        disabled={!product.disponible}
                        onClick={() => {
                            addItem({
                                id: String(product.id),
                                name: product.nombre,
                                description: product.descripcion,
                                price: product.precio,
                                image: product.imagen_url,
                                quantity: 1
                            });
                            navigate('/carrito');
                        }}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-colors shadow-sm focus:outline-none ${
                            product.disponible
                                ? 'bg-orange-600 text-white hover:bg-orange-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        {product.disponible ? 'Agregar al Carrito' : 'Agotado'}
                    </button>
                </div>
            </div>
        </div>
    );
}