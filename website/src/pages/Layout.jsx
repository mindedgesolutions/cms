import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, TopNav, TopNavHome } from "../components";

import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

const Layout = () => {
  const { pathname } = useLocation();
  const arr = pathname.split(`/`);

  useEffect(() => {
    arr[1]
      ? document.body.classList.add("sub_page")
      : document.body.classList.remove("sub_page");
  }, [pathname]);

  return (
    <>
      {arr[1] ? <TopNav /> : <TopNavHome />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
