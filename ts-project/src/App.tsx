import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchComponent from "./components/FetchComponent";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import IdComponent from "./components/IdComponent";


function App() {
  return (
    <>
 
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<FetchComponent/>}/>
        <Route path='/details/:id' element={<IdComponent/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
