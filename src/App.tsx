
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import React from 'react';
import { LoginSignupForm } from './Components/LoginSignupForm';

export const App = () => {

   return <RouterProvider router={router} />;
}