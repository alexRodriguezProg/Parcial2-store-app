import {useCartStore} from '../store/useCartStore';
import {Link} from 'react-router-dom';

// Importación de componentes
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';

export default function Cart() {
    const {items, removeItem, updateQuantity, getTotal} = useCartStore();
    const subtotal = getTotal();

    return (
        <div className="p-8">
            <div className="flex items-center gap-6 mb-8 border-b pb-4">
                <h2 className="text-3xl font-bold text-gray-800">Carrito de compras</h2>
            </div>

            {items.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 mb-4 text-lg">Tu carrito está vacío.</p>
                    <Link to="/"
                          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors">
                        Explorar Productos
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Lista de Ítems (Izquierda) */}
                    <div className="lg:col-span-8 space-y-4">
                        {items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onUpdateQuantity={updateQuantity}
                                onRemove={removeItem}
                            />
                        ))}
                    </div>

                    {/* Resumen de Compra (Derecha) */}
                    <div className="lg:col-span-4">
                        <OrderSummary subtotal={subtotal}/>
                    </div>

                </div>
            )}
        </div>
    );
}