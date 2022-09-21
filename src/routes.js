import { lazy } from "react";
import { CHATS_ROUTE, DONATE_ROUTE, EVENTS_ROUTE, HOME_ROUTE, INDEX_ROUTE, LEADBOARDS_ROUTE, SERVERS_ROUTE } from "./util/consts"

const Landing = lazy(() => import("./Pages/Landing/Landing"));
const Donate = lazy(() => import("./Pages/Donate/Donate"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Servers = lazy(() => import("./Pages/Servers/Servers"));
const Events = lazy(() => import("./Pages/Events/Events"));
const Leadboards = lazy(() => import("./Pages/Ladder/Leadboards"));
const Chats = lazy(() => import("./Pages/Chats/Chats"));

export const g_1Routes = [
]

export const g_2Routes = [
]

export const g_3Routes = [
]

export const g_4Routes = [
]

export const authRoutes = [
]

export const loginRoute = [
];

export const allRoutes = [
    {
        path: INDEX_ROUTE,
        Component: Landing
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: DONATE_ROUTE,
        Component: Donate
    },
    {
        path: CHATS_ROUTE,
        Component: Chats
    },
    {
        path: SERVERS_ROUTE,
        Component: Servers
    },
    {
        path: LEADBOARDS_ROUTE,
        Component: Leadboards
    },
    {
        path: EVENTS_ROUTE,
        Component: Events
    },
];