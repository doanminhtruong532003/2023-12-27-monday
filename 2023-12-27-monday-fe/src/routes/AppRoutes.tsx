import React, { memo } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import LoadingNew from "~/components/LoadingNew";
import HomePage from "~/pages/HomePage";
import LoginPage from "~/pages/LoginPage";
import RegisterPage from "~/pages/RegisterPage";
import CreateYourAccount from "~/pages/RegisterPage/components/CreateYourAccount";
import ErrorTemplate from "~/templates/ErrorTemplate/ErrorTemplate";
import HomeTemplate from "~/templates/HomeTemplate";

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LoadingNew />}>
      <div className="w-screen">
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="create-your-account" element={<CreateYourAccount />} />
          <Route path="404" element={<ErrorTemplate />} />
          <Route path="*" element={<Navigate to={"/404"} replace />} />
        </Routes>
      </div>
    </React.Suspense>
  );
};

export default memo(AppRoutes);
