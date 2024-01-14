import React, { memo } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import LoadingNew from "~/components/LoadingNew";
import BoardSetup from "~/pages/BoardSetup/BoardSetup";
import BoardNamingPage from "~/pages/BoardSetup/components/BoardNamingPage";
import HomePage from "~/pages/HomePage";
import LoginPage from "~/pages/LoginPage";
import SignUpPage from "~/pages/RegisterPage";
import CreateFocusFirst from "~/pages/RegisterPage/components/CreateFocusFirst";
import CreateIndustry_Role from "~/pages/RegisterPage/components/CreateIndustry_Role";
import CreateYourAccount from "~/pages/RegisterPage/components/CreateYourAccount";
import InviteEmailTeam from "~/pages/RegisterPage/components/InviteEmailTeam";
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

          {/*Sign-up   */}
          <Route path="sign-up" element={<SignUpPage />}>
            <Route path="create-your-account" element={<CreateYourAccount />} />
            <Route
              path="create-industry-role"
              element={<CreateIndustry_Role />}
            />
            <Route path="create-focus-first" element={<CreateFocusFirst />} />
            <Route path="invite-email-team" element={<InviteEmailTeam />} />
          </Route>

          {/*Board Setup */}
          <Route path="board-setup" element={<BoardSetup />}>
            <Route path="name" element={<BoardNamingPage />} />
            {/* Các đường dẫn cho các bước tiếp theo trong quy trình thiết lập */}
          </Route>

          <Route path="login" element={<LoginPage />} />
          <Route path="404" element={<ErrorTemplate />} />
          <Route path="*" element={<Navigate to={"/404"} replace />} />
        </Routes>
      </div>
    </React.Suspense>
  );
};

export default memo(AppRoutes);
