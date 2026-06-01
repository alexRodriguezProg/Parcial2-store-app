import {Link} from 'react-router-dom';

interface OrderSummaryProps {
    subtotal: number;
}

export default function OrderSummary({subtotal}: OrderSummaryProps) {
    return (
        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm sticky top-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Resumen de compra</h3>

            <div className="space-y-4 mb-6 text-gray-600">
                <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Envío</span>
                    <span
                        className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm font-semibold">Gratis</span>
                </div>
            </div>

            <div
                className="flex justify-between items-center font-bold text-2xl mb-8 border-t border-gray-100 pt-6 text-gray-900">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-sm mb-4 focus:outline-none">
                Confirmar Pedido
            </button>

            <Link to="/"
                  className="block text-center w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors focus:outline-none">
                Continuar comprando
            </Link>
        </div>
    );
}