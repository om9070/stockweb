import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
