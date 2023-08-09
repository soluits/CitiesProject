import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Cities from './pages/Cities/Cities';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import About from './pages/About/About';


//lo que importe aca funciona en todo el sitio
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cities', element: <Cities /> },
  { path: '/404', element: <PageNotFound /> },
  { path: '/about', element: <About /> },

])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
