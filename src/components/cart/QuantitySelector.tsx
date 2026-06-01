interface QuantitySelectorProps {
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
}

export default function QuantitySelector({quantity, onDecrease, onIncrease}: QuantitySelectorProps) {
    return (
        <div className="border border-gray-200 rounded-lg px-3 py-1 flex items-center gap-4 bg-gray-50">
            <button
                onClick={onDecrease}
                className="text-gray-600 hover:text-orange-600 text-xl font-medium focus:outline-none"
                aria-label="Disminuir cantidad"
            >
                -
            </button>
            <span className="font-bold text-gray-800 w-4 text-center">{quantity}</span>
            <button
                onClick={onIncrease}
                className="text-gray-600 hover:text-orange-600 text-xl font-medium focus:outline-none"
                aria-label="Aumentar cantidad"
            >
                +
            </button>
        </div>
    );
}