import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home.tsx';
import HomeDesto from './Pages/DestoTsel/Home.tsx';
import HomeAgil from './Pages/Agil/Home.tsx'
import HomeZikri from './Pages/Zikri/Home.tsx';
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
    path: "/zikri",
    element: <HomeZikri/>,
  },
  {
    path: "/desto",
    element: <HomeDesto />,
  },
  {
    path: "/agil",
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
