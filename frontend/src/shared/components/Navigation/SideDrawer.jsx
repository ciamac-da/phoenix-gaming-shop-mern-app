import React from "react";

const SideDrawer = (props) => {

  return (
    <aside
      style={{
        position: "fixed",
        left: "0",
        top: "0",
        zIndex: "100",
        height: "100vh",
        width: "70%",
        background: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
      }}
    >
      {props.children}
    </aside>
  );
};

export default SideDrawer;
