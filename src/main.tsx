import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Example from './Pages/Example/Example.tsx';
import Home from './Pages/Home/Home.tsx';
import HomeDesto from './Pages/DestoTsel/Home.tsx';
import HomeAgil from './Pages/Agil/Home.tsx'
import HomeZikri from './Pages/Zikri/Home.tsx';
import { Stepper } from './Components/Stepper/Stepper.tsx';
import Button from './Components/Zikri/Button/Button.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/example",
    element: <Example />,
  },
  {
    path: "/about",
    element: <p>ini halaman about mantul </p>,
  },
  {
    path: "/kerenmantul",
    element: <Stepper />,
  },
  {
    path: "/zikri",
    element: <HomeZikri/>,
  },
  {
    path: "/desto",
    element: <HomeDesto />,
  },
  {
    path: "/Agil",
    element: <HomeAgil />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
