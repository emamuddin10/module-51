import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProviders from './Provider/AuthProviders.jsx';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.jsx';
import Order from './Pages/Order/Order.jsx';
import Profile from './Pages/Profile.jsx';
import Dashboard from './Pages/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
         path:'/',
         element:<Home></Home>,
      },
      {
         path:'/login',
         element:<Login></Login>,
      },
      {
         path:'/register',
         element:<Register></Register>,
      },
      {
         path:'/order',
         element:<PrivateRoute><Order></Order></PrivateRoute>,
      },
      {
         path:'/profile',
         element:<PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
         path:'/dashboard',
         element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} /> 
   </AuthProviders>
  </React.StrictMode>,
)
