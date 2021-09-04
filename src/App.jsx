import React, { useEffect, useState } from "react";
import "./App.css";
import Detail from "./Detail";
import Navigation from "./Navigation";
import Record from "./Record";

const navList = ["record", "detail"];

const getVerifyNav = (nav) => {
  const isVerify = navList.find((item) => item === nav);
  const verifiedNav = isVerify || navList[0];
  return { verifiedNav, isVerify: !!isVerify };
};

const App = () => {
  const [navigation, setNavigation] = useState();

  useEffect(() => {
    const localNav = localStorage.getItem("nav");
    const { verifiedNav } = getVerifyNav(localNav);
    setNavigation(verifiedNav);
  }, []);

  const onNavClickHandler = (selectedNav) => {
    const { verifiedNav, isVerify } = getVerifyNav(selectedNav);

    if (!isVerify) console.warn("Your nav input is wrong...!");
    localStorage.setItem("nav", verifiedNav);
    setNavigation(verifiedNav);
  };

  return (
    <div className="container">
      <Navigation onNavClick={onNavClickHandler} />
      {navigation === navList[0] ? <Record /> : <Detail />}
    </div>
  );
};

export default App;
