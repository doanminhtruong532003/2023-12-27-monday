import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "~/components/Footer";

const HomeTemplate: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default React.memo(HomeTemplate);
