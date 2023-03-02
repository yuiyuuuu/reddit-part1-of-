import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalData } from "./store/auth";
import { handleSet } from "./store/global/screenProperties";

import "./index.scss";

import Home from "./components/home/Home";
import Submit from "./components/submit/Submit";
import Nav from "./components/nav/Nav";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import SingleCommunity from "./components/communities/SingleCommunity";
import Communities404 from "./components/communities/Communities404";
import CreateCommunityOverlay from "./components/communities/CreateCommunityOverlay";
import MainTools from "./components/communities/ModeratorTools/MainTools";
import DiscardChanges from "./discardChanges/DiscardChanges";
import AuthOverlaySignup from "./globalcomponents/authoverlaysignup/AuthOverlaySignup";
import AuthOverlayLogin from "./globalcomponents/authoverlaylogin/AuthOverlayLogin";

function App() {
  const dispatch = useDispatch();
  const createOverlayState = useSelector((state) => state.navToggleCreate);
  const discardState = useSelector((state) => state.discardChanges);
  const authOverlaySignupState = useSelector(
    (state) => state.authOverlaySignupState
  );
  const authOverlayLoginState = useSelector(
    (state) => state.authOverlayLoginStates
  );

  const resize = useCallback(() => {
    dispatch(handleSet(window.innerWidth));
  });

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    dispatch(getLocalData());
  }, []);

  return (
    <BrowserRouter>
      <Nav />

      {createOverlayState && (
        <CreateCommunityOverlay createOverlayState={createOverlayState} />
      )}
      {discardState && <DiscardChanges display={discardState} />}

      {authOverlaySignupState.display && (
        <AuthOverlaySignup state={authOverlaySignupState} />
      )}

      {authOverlayLoginState.display && (
        <AuthOverlayLogin state={authOverlayLoginState} />
      )}
      <Routes>
        <Route exact path='/posts' element={<Posts />} />
        <Route exact path='/posts/:id' element={<SinglePost />} />
        <Route exact path='/submit' element={<Submit />} />
        <Route exact path='/submit/:type' element={<Submit />} />
        <Route exact path='/submit/r/:id' element={<Submit />} />
        <Route exact path='/submit/r/:id/:type' element={<Submit />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />

        <Route exact path='/r/:id' element={<SingleCommunity />} />

        <Route
          exact
          path='/r/:id/comment/:postid'
          element={<SingleCommunity />}
        />
        <Route exact path='/404' element={<Communities404 />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/r/:id/about/:section' element={<MainTools />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
