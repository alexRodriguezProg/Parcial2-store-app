import QuantitySelector from './QuantitySelector';
import type {CartItem as CartItemType} from '../../store/useCartStore';

interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export default function CartItem({item, onUpdateQuantity, onRemove}: CartItemProps) {
    return (
        <div className="flex flex-row items-center p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg"/>

            <div className="ml-6 flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm line-clamp-1 mt-1">{item.description}</p>
                <span className="text-orange-600 font-bold mt-2 block">${item.price.toFixed(2)}</span>
            </div>

            <div className="flex items-center gap-6 ml-4">
                <QuantitySelector
                    quantity={item.quantity}
                    onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
                />

                {/* Botón Eliminar */}
                <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors focus:outline-none"
                    title="Eliminar producto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}