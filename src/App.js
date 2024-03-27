import React from "react";
import { Route, Routes } from "react-router-dom";
import CartItems from "./components/Cart/Cart";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/cartItem" element={<CartItems />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
