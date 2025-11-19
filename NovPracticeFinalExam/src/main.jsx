import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.jsx';
import Layout from './Layout.jsx';
import Easy from './Easy.jsx';
import Medium from './Medium.jsx';
import Hard from './Hard.jsx';
import { MediumProvider } from './MediumContext.jsx';
import { EasyProvider } from './EasyContext.jsx';

let router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <App /> },
            { path: 'easy', element: <Easy /> },
            { path: 'medium', element: <Medium /> },
            { path: 'hard', element: <Hard /> },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <EasyProvider>
            <MediumProvider>
                <RouterProvider router={router} />
            </MediumProvider>
        </EasyProvider>
    </StrictMode>
);
