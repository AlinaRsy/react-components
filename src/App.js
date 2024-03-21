import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import MainPage from "./Pages/MainPage/MainPage";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  const [search, setSearch] = useState('');
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout search={search} setSearch={setSearch}/>}>
          <Route index element={<MainPage search={search}/>}/>
          <Route path=':id' element={<ProductPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
