import {RouterProvider} from 'react-router-dom';
import {router} from './router';

export default function App() {
    return (
        <div className="min-h-screen bg-slate-50 text-gray-900 w-full font-sans antialiased">
            <RouterProvider router={router}/>
        </div>
    );
}