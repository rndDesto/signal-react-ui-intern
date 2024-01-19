import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Example from './Pages/Example/Example.tsx';
import Home from './Pages/Home/Home.tsx';
import HomeDesto from './Pages/DestoTsel/Home.tsx';
import HomeAgil from './Pages/Agil/Home.tsx'
import HomeZikri from './Pages/Zikri/Home.tsx';
import { Stepper } from './Components/Stepper/Stepper.tsx';
import HomeNadhifa from './Pages/Nadhifafa/Home.tsx';
import NadhifaMiniApp from './Pages/Nadhifafa/MiniApp.tsx'
import ZikriMiniApp from './Pages/Zikri/MiniApp.tsx'
import AgilMiniApp from './Pages/Agil/MiniApp.tsx'

import './index.css'



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
  {
    path: "/nadhifa",
    element: <HomeNadhifa />,
  },
  {
    path: "nadhifa/miniapp",
    element: <NadhifaMiniApp />,
  },
  {
    path: "agil/miniapp",
    element: <AgilMiniApp />,
  },
  {
    path: "zikri/miniapp",
    element: <ZikriMiniApp />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
