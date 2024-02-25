import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Contatti from "./components/contatti/Contatti.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element: <App></App>
  },
  {
    path:"/contatti",
    element: <Contatti></Contatti>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
