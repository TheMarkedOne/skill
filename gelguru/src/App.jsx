import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import LandPage from "./pages/LandPage.jsx";
import Inside from "./pages/Inside.jsx";
// import Income from "./pages/Income.jsx";
import Goals from "./pages/Goals.jsx";
import Profile from "./pages/Profile.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import NewPassword from "./pages/NewPassword.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"
import MainPage from "./pages/MainPage.jsx"
import Expenses from "./pages/Expenses.jsx";
import Safety from "./pages/Safety.jsx";
import Contact from "./pages/Contact.jsx";
import ResetPass from "./pages/Reset.jsx";

import ProtectedRoute from './protectedRoutes/ProtectedRoute.jsx'


const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* <Route element={<ProtectedRoute> */}
          <Route path="/home/main" element={<MainPage />} />
          <Route path="/home/expenses" element={<Expenses />} />
          <Route path="/home/profile" element={<Profile />} />
          <Route path="/home/contact" element={<Contact />} />
          <Route path="/home/safety" element={<Safety />} />
          <Route path="/in/home" element={<Inside />} />
          <Route path="/in/goals" element={<Goals />} />
          <Route path="/in/profile" element={<Profile />} />
          <Route path="/reset" element={<ResetPass />} />
          <Route path="/newpass" element={<NewPassword />}
          />
          {/* </ProtectedRoute>} /> */}


          <Route path="/" element={<LandPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
