import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Table from './components/Table.jsx'
import AddUser from './components/AddUser.jsx'
import ViewProduct from './components/ViewProduct.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
   <>
   <Route path='/' element={<App/>}>
   <Route path='' element={<Table/>}/>
   <Route path='/addproduct' element={<AddUser/>}/>
   <Route path='/viewproduct/:productId' element={<ViewProduct/>}/>
   <Route path='/updateproduct/:productId' element={<UpdateProduct/>}/>
   </Route>
   </>

   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
