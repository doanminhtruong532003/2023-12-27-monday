import React from "react";
import MainContent from "./components/MainContent";
import Header from "~/components/Footer";
import Sidebar from "~/components/Sidebar";

const HomePage: React.FC = () => {
  return  (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default React.memo(HomePage);
