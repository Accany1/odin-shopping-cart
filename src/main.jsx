import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import FrontPage from './components/FrontPage.jsx'
import Store from './components/Store.jsx'

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
      }
    ],
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
