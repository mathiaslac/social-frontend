import { lazy } from "react";
import {
  ARTICLE_ROUTE,
  CHATS_ROUTE,
  DONATE_ROUTE,
  EVENTS_ROUTE,
  HOME_ROUTE,
  INDEX_ROUTE,
  LEADBOARDS_ROUTE,
  SERVERS_ROUTE,
  PROFILE_ROUTE,
} from "./util/consts";

import {
  DASHBOARD_ROUTE,
  SB_ROUTE,
  SB_BANS_ROUTE,
  SB_COMMS_ROUTE,
  SB_ADMINS_ROUTE,
  VIP_ROUTE,
  DB_ROUTE,
} from "./util/dashboard-consts";

import {
  LEADBOARDS_AWP_ROUTE,
  LEADBOARDS_RETAKE_ROUTE,
  LEADBOARDS_BHOP_ROUTE,
  LEADBOARDS_HNS_ROUTE,
  LEADBOARDS_DM_ROUTE,
  LEADBOARDS_COMP_ROUTE,
} from "./util/tops-consts";

////////// ALL COMPONENTS //////////

const Landing = lazy(() => import("./Pages/Landing/Landing"));
const Donate = lazy(() => import("./Pages/Donate/Donate"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Servers = lazy(() => import("./Pages/Servers/Servers"));
const Events = lazy(() => import("./Pages/Events/Events"));
const Leadboards = lazy(() => import("./Pages/Ladder/Leadboards"));
const Chats = lazy(() => import("./Pages/Chats/Chats"));
const Profile = lazy(() => import("./Pages/Profiles/profile"));
const Article = lazy(() => import("./components/posts/RegularPost/Article"));

////////// DASHBOARD COMPONENTS //////////

const Dashboard = lazy(() => import("./Pages/Dashboard/Core"));
const Sourcebans = lazy(() =>
  import("./Pages/Dashboard/Views/Sourcebans/Sourcebans")
);
const Bans = lazy(() => import("./Pages/Dashboard/Views/Sourcebans/Bans"));
const Comms = lazy(() => import("./Pages/Dashboard/Views/Sourcebans/Comms"));
const Admins = lazy(() => import("./Pages/Dashboard/Views/Sourcebans/Admins"));
const Premiums = lazy(() => import("./Pages/Dashboard/Views/Vip/Premiums"));
const Databases = lazy(() =>
  import("./Pages/Dashboard/Views/Databases/Databases")
);

////////// LEADBOARDS COMPONENTS //////////

const TopAwp = lazy(() => import("./Pages/Ladder/components/Tops/TopAwp"));
const TopRetake = lazy(() =>
  import("./Pages/Ladder/components/Tops/TopRetake")
);
// const TopBhop = lazy(() => import("./Pages/Ladder/components/Tops/TopBhop"));
const TopHns = lazy(() => import("./Pages/Ladder/components/Tops/TopHns"));
const TopDm = lazy(() => import("./Pages/Ladder/components/Tops/TopDm"));
const TopComp = lazy(() => import("./Pages/Ladder/components/Tops/TopComp"));

export const tops_Routes = [
  {
    path: LEADBOARDS_AWP_ROUTE,
    Component: TopAwp,
  },
  {
    path: LEADBOARDS_RETAKE_ROUTE,
    Component: TopRetake,
  },
  //{
  //  path: LEADBOARDS_BHOP_ROUTE,
  //  Component: TopBhop,
  //},
  {
    path: LEADBOARDS_HNS_ROUTE,
    Component: TopHns,
  },
  {
    path: LEADBOARDS_DM_ROUTE,
    Component: TopDm,
  },
  {
    path: LEADBOARDS_COMP_ROUTE,
    Component: TopComp,
  },
];

export const g_4Routes = [
  {
    path: DASHBOARD_ROUTE,
    Component: Dashboard,
  },
  {
    path: SB_ROUTE,
    Component: Sourcebans,
  },
  {
    path: SB_BANS_ROUTE,
    Component: Bans,
  },
  {
    path: SB_COMMS_ROUTE,
    Component: Comms,
  },
  {
    path: SB_ADMINS_ROUTE,
    Component: Admins,
  },
  {
    path: VIP_ROUTE,
    Component: Premiums,
  },
  {
    path: DB_ROUTE,
    Component: Databases,
  },
];

export const g_3Routes = [
  {
    path: DASHBOARD_ROUTE,
    Component: Dashboard,
  },
  {
    path: SB_ROUTE,
    Component: Sourcebans,
  },
  {
    path: SB_BANS_ROUTE,
    Component: Bans,
  },
  {
    path: SB_COMMS_ROUTE,
    Component: Comms,
  },
  {
    path: SB_ADMINS_ROUTE,
    Component: Admins,
  },
  {
    path: VIP_ROUTE,
    Component: Premiums,
  },
  {
    path: DB_ROUTE,
    Component: Databases,
  },
];

export const g_2Routes = [
  {
    path: DASHBOARD_ROUTE,
    Component: Dashboard,
  },
  {
    path: SB_ROUTE,
    Component: Sourcebans,
  },
  {
    path: SB_BANS_ROUTE,
    Component: Bans,
  },
  {
    path: SB_COMMS_ROUTE,
    Component: Comms,
  },
];

export const g_1Routes = [
  {
    path: DASHBOARD_ROUTE,
    Component: Dashboard,
  },
  {
    path: SB_ROUTE,
    Component: Sourcebans,
  },
  {
    path: SB_BANS_ROUTE,
    Component: Bans,
  },
  {
    path: SB_COMMS_ROUTE,
    Component: Comms,
  },
];

export const authRoutes = [];

export const loginRoute = [];

export const allRoutes = [
  {
    path: INDEX_ROUTE,
    Component: Landing,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: DONATE_ROUTE,
    Component: Donate,
  },
  {
    path: CHATS_ROUTE,
    Component: Chats,
  },
  {
    path: SERVERS_ROUTE,
    Component: Servers,
  },
  {
    path: LEADBOARDS_ROUTE,
    Component: Leadboards,
  },
  {
    path: EVENTS_ROUTE,
    Component: Events,
  },
  {
    path: ARTICLE_ROUTE,
    Component: Article,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
];
