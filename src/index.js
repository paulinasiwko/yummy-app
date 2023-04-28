import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {createHashRouter, RouterProvider } from "react-router-dom";
import SingleRecipePage from "./single-recipe-page/single-recipe-page";
import ErrorPage from "./components/error-page";
import AllRecipesList from "./all-recipes-list/all-recipes-list";


const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/single-recipe-page',
        element: <SingleRecipePage />,
    },
    {
        path: '/all-recipes-list',
        element: <AllRecipesList />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


