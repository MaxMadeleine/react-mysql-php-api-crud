import './HomePage.scss'
import React from 'react';
import { Login } from '../../Components/LoginComponent/Login.jsx';
// import { SignIn } from '../../Components/SignInComponent/SignIn.jsx';





export const HomePage = () => {


  return (
    <>
    <h3>You are not Logged in please Login or signup</h3>
      <Login/>
      {/* <SignIn/> */}
    </>
  );
};
