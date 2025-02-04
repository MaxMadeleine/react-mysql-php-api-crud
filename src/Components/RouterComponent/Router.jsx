import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../PageComponents/HomePageComponent/HomePage.jsx";
import { CreateUser } from "../../Components/CreateUserComponent/CreateUser.jsx";
import { EditUser } from "../../Components/EditUserComponent/EditUser.jsx";



export const Router = () => {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="create/user" element={<CreateUser />} />
      <Route path="user/:id/edit" element={<EditUser />} />


    </Routes>
  )
}
