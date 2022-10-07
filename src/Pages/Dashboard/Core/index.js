import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Justice,
  Divider,
  CreateUpdate,
  AdminCard,
  PremiumButton,
} from "./components/index";

import "../module.dashboard.css";
import "../../../layouts/Content/Feed/PremiumFeed/module.top-feed.css";
import "../../../layouts/Content/Feed/PremiumFeed/module.modal-post.css";

const DashboardLayout = () => {
  return (
    <>
      <Helmet>
        <title>Ideas - Dashboard</title>
      </Helmet>
      <div className="row" style={{ columnGap: 30, justifyContent: "center" }}>
        <div style={{ minWidth: 215 }}>
          <h3>Dashboard</h3>
          <AdminCard />
          <CreateUpdate />
          <Divider />
          <Justice />
          <Divider />
          <PremiumButton />
        </div>
        <div
          className="posts"
          style={{ flex: 1, padding: 0, minWidth: 1220, maxWidth: 1220 }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
