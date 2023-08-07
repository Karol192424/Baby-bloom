import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from "./layout/layout.jsx"
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Calculadora from './page/calculadora.jsx'
import AcercaDe from './page/acerca-de.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><App /></Layout> ,
  },
  {
    path: "/calculadora",
    element: <Layout><Calculadora /></Layout>,
  },
  {
    path: "/acerca",
    element: <Layout><AcercaDe /></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
