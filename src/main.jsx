import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';
import SignUp from './components/SignUp';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import Orders from './components/Orders';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'places/:id',
        element:<Details></Details>,
        loader:()=> fetch('/public/placeData.json')
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      
      {
        path:'orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
      


    ]
   
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
