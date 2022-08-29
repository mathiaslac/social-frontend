import React from "react";
import { Outlet } from "react-router-dom";

import { Modal } from "../../modules/modal";

import { Navbar } from "./components";

import ContextMenu from "../../common/components/ContextMenu";

const CoreLayout = () => (
  <div
    style={{
      display: "grid",
      gridTemplateAreas: `
    "header"
    "main"`,
      gridGapColumnGap: 16,
      gridTemplateRows: "106px 1fr",
      gridTemplateColumns: "1fr",
      position: "fixed",
      inset: 0,
    }}
  >
    <Navbar />
    <main
      style={{
        gridArea: "main",
        overflowY: "scroll",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 30,
        paddingTop: 30,
      }}
    >
      <Outlet />
    </main>
    <Modal />
    <ContextMenu />
  </div>
);

export default CoreLayout;
