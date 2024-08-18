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
import Classes from './Pages/Classes/Classes';
import MyClasses from './Pages/DashBoard/MyClasses';
import ManageClasses from './Pages/DashBoard/ManageClasses';
import ManageUsers from './Pages/DashBoard/ManageUsers';
import SelectedClasses from './Pages/DashBoard/SelectedClasses';
import EnrolledClasses from './Pages/DashBoard/EnrolledClasses';
import Trainers from './Pages/Trainers/Trainers';

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
        path: '/trainers',
        element: <Trainers />
      },
      {
        path: '/classes',
        element: <Classes></Classes>
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
        element: <MyClasses></MyClasses>
      },
      {
        path: '/dashboard/instructor/newclass',
        element: <AddClass></AddClass>
      },
      {
        path: '/dashboard/admin/classes',
        element: <ManageClasses></ManageClasses>
      },
      {
        path: '/dashboard/admin/users',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: '/dashboard/student/myclasses',
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: '/dashboard/student/enrolled',
        element: <EnrolledClasses></EnrolledClasses>
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
