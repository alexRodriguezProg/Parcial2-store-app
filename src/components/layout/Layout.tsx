import {Outlet} from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="flex h-screen bg-slate-50 text-gray-900 overflow-hidden">
            {/* Sidebar Plegable */}
            <Sidebar/>

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Área de Contenido Principal */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet/>
                </main>

                {/* Footer Fijo */}
                <Footer/>
            </div>
        </div>
    );
}