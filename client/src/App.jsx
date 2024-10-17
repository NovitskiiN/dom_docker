import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Faq from "./components/Faq/Faq";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import { Verificacion } from "./components/Varification/Varification";
// import CameraComponent from "./components/Camera/Camera";
import { Privacy } from "./components/Privacy/Privacy";
import { Conditions } from "./components/Conditions/Conditions";
import { BASE_URL } from "./constants";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.userStore);
  // const user = true;

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`${BASE_URL}/auth`, {
      credentials: "include",
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "USER_SIGNIN", payload: res.user });
      })
      .catch(console.error);

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
      {!user ? (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/conditions" element={<Conditions />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/varification" element={<Verificacion />} />
          </Routes>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
