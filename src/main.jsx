import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import FrontPage from './components/FrontPage.jsx'
import Store from './components/Store.jsx'
import Product from './components/Product.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <FrontPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/store',
        element: <Store />
      },
      {
        path: '/product',
        element: <Product />
      }
    ],
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
