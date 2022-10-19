import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      {/*<Routes>*/}
      {/*  {*/}
      {/*    isLoggedIn ?*/}
      {/*      <Route path="/home"><Home/></Route> :*/}
      {/*      <Route path="/"><Auth/></Route>*/}
      {/*  }*/}
      {/*</Routes>*/}
    </BrowserRouter>
  )
}

export default AppRouter;
