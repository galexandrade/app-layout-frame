import React from 'react';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />
        }
    ]);
    return <RouterProvider router={routes} />;
};

export default Router;
