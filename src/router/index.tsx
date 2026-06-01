import {createBrowserRouter} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <ProductList/>},
            {path: 'producto/:id', element: <ProductDetail/>},
            {path: 'carrito', element: <Cart/>},
        ],
    },
]);