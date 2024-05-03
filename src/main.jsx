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
        path:'/takecourse/:id',
        element:<ShowDetailsData></ShowDetailsData>,
        loader: () => fetch('/Data.json'),
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
