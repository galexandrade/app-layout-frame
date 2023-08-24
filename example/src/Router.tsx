import React from 'react';
import App from './App';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

const Router = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/dashboard',
                    element: <DashboardPage />
                },
                {
                    path: '/',
                    element: <Navigate replace to="/dashboard" />
                }
            ]
        }
    ]);
    return <RouterProvider router={routes} />;
};

export default Router;
