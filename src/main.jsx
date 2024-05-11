import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './All Components/Components/Root/Root.jsx';
import Home from './All Components/Components/Home/Home.jsx';
import Takecourse from './All Components/Components/Navbar/Takecourse/Takecourse.jsx';
import ShowDetailsData from './All Components/Components/Navbar/Takecourse/ShowDetailsData.jsx';
import SignUp from './All Components/Components/Navbar/SignUp/SignUp.jsx';
import Login from './All Components/Components/Navbar/Login/Login.jsx';
import Form from './All Components/Components/Home/Banner/Form/Form.jsx';
import Contactus from './All Components/Components/Home/Footer/Contactus/Contactus.jsx';
import AboutUs from './All Components/Components/Home/Footer/AboutUs/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/takecourse',
        element:<Takecourse></Takecourse>,
        loader: () => fetch('/Data.json'),
      },
      
      {
        path:'/form',
        element:<Form></Form>
      },
      {
        path:'/contact',
        element:<Contactus></Contactus>
      },
      {
        path:'/aboutus',
        element:<AboutUs></AboutUs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
