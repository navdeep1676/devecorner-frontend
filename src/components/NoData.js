import React from "react";

export const NoData = () => {
  return (
    <div
      style={{ minHeight: "80vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <h1 className="heading mb-4 text-center">
        <span style={{ color: "#000" }}>No </span>{" "}
        <span style={{ color: "rgb(245, 141, 28)" }}>Data</span>
      </h1>
    </div>
  );
};
