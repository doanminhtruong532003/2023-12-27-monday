import React, { memo } from "react";

import { history } from "./utils/setting";
import { unstable_HistoryRouter as HistoryBrowser } from "react-router-dom";

import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <HistoryBrowser history={history}>
      <AppRoutes />
    </HistoryBrowser>
  );
};

export default memo(App);
