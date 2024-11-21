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
;
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';

import ErrorPage from './components/ErrorPage';
import UpdateProfile from './components/Profile';
import Forgot from './components/Forgot';
import Information from './components/Information';
import MyProfile from './components/MyProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        
      },
      {
        path:'places/:id',
        element:<Details></Details>,
        loader:()=> fetch('../public/placeData.json')
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
        path:'profile',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      
      {
        path:'forgotten',
        element:<Forgot></Forgot>
      },
      {
        path:'info',
        element:<Information></Information>

      },{
        path:'myprofile',
        element:<MyProfile></MyProfile>
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