import {Link} from 'react-router-dom';

interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen_url: string;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <div
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden border border-gray-100 pb-2">
            <Link to={`/producto/${product.id}`}>
                <img
                    src={product.imagen_url || 'https://via.placeholder.com/500?text=Sin+Imagen'}
                    alt={product.nombre}
                    className="w-full h-40 object-cover"
                />
            </Link>
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{product.nombre}</h3>
                <p className="line-clamp-2 text-sm text-gray-500 mt-2 flex-1">{product.descripcion}</p>

                <div className="flex justify-between items-center mt-5">
                    <span className="text-orange-600 font-bold text-lg">${product.precio.toFixed(2)}</span>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-sm"
                        title="Agregar al carrito"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}