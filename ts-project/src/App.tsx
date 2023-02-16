import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchComponent from "./components/FetchComponent";
//import IdComponent from "./components/IdComponent";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FetchComponent/>}/>
       {/* <Route path='/details/:id' element={<IdComponent/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
