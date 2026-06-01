import {useNavigate} from 'react-router-dom';

interface BackButtonProps {
    label?: string;
}

export default function BackButton({label = "Volver al menú"}: BackButtonProps) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="mb-6 font-medium text-gray-500 hover:text-orange-600 transition-colors flex items-center gap-2 focus:outline-none"
        >
            <span>&larr;</span> {label}
        </button>
    );
}