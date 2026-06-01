import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside className={`${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white border-r border-gray-100 flex flex-col shrink-0 relative`}>
            {/* Botón Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute -right-3 top-8 bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md z-10 hover:bg-orange-700 focus:outline-none"
                title={isOpen ? "Contraer menú" : "Expandir menú"}
            >
                {isOpen ? '‹' : '›'}
            </button>

            <div className="p-6 flex items-center overflow-hidden whitespace-nowrap h-20">
                <h1 className={`text-2xl font-bold text-orange-600 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    Food Store
                </h1>
                {!isOpen && (
                    <span className="text-2xl font-bold text-orange-600 ml-1">FS</span>
                )}
            </div>

            <nav className="flex-1 px-3 space-y-2 mt-4 overflow-hidden">
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        `flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                            isActive ? 'bg-orange-600 text-white' : 'text-gray-500 hover:bg-orange-50'
                        }`
                    }
                >
                    {/* Icono de Menú/Productos */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                    </svg>
                    {isOpen && <span>Productos</span>}
                </NavLink>

                <NavLink
                    to="/carrito"
                    className={({isActive}) =>
                        `flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                            isActive ? 'bg-orange-600 text-white' : 'text-gray-500 hover:bg-orange-50'
                        }`
                    }
                >
                    {/* Icono de Carrito */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    {isOpen && <span>Carrito</span>}
                </NavLink>
            </nav>
        </aside>
    );
}