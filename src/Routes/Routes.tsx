import { Outlet, createBrowserRouter } from 'react-router-dom'
import { LoginSignupForm } from '../Components/LoginSignupForm';
import React from 'react';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <>
            <LoginSignupForm />
        </>
        
       
    },

]);
