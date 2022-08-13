import React from "react";
import { Outlet } from "react-router-dom";

import { Modal } from "../../modules/modal";

import { Navbar, Sidebar } from "./components";

import ContextMenu from "../../common/components/ContextMenu";

const CoreLayout = () => (
  <div
    style={{
      display: "grid",
      gridTemplateAreas: `
    "logo header header"
    "navbar main main"
    "footer footer footer"`,
      gridGapColumnGap: 16,
      gridTemplateRows: "56px 1fr",
      gridTemplateColumns: "250px 1fr 90px",
      position: "fixed",
      inset: 0,
    }}
  >
    <Navbar />
    <Sidebar />
    <main
      style={{
        gridArea: "main",
        overflowY: "scroll",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 30,
      }}
    >
      <Outlet />
    </main>
    <Modal />
    <ContextMenu />
  </div>
);

export default CoreLayout;
