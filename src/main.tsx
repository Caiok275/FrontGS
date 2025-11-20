import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './Routes/Home/Home.tsx'
import Integrantes from './Routes/Integrantes/Integrantes.tsx'
import Contato from './Routes/Contato/Contato.tsx'
import FAQ from './Routes/FAQ/FAQ.tsx'
import Error from './Components/Error/Error.tsx'
import Sobre from './Routes/Sobre/Sobre.tsx'
import { ProviderTema } from './context/TemaContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Navigate to="/Home" /> }, // <--- redirecionamento
      { path: "/Home", element: <Home /> },
      { path: "/Contato", element: <Contato /> },
      { path: "/FAQ", element: <FAQ /> },
      { path: "/Integrantes", element: <Integrantes /> },
      { path: "/Sobre", element: <Sobre /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderTema>
      <RouterProvider router={router}/>
    </ProviderTema>
  </StrictMode>,
)
