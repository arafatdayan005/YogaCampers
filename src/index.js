import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import ErrorPage from './Components/ErrorPage';
import AuthProvider from './Providers/AuthProviders';
import Dashboard from './Pages/DashBoard/Dashboard';
import AddClass from './Pages/DashBoard/AddClass';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/instructor/myclasses',
        element: <Home></Home>
      },
      {
        path: '/dashboard/instructor/newclass',
        element: <AddClass></AddClass>
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);

reportWebVitals();
