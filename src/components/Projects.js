import React from "react";
import { videos } from "../utils/Data";
import { CustomCard } from "./comman/CustomCard";
export const Projects = () => {
  return (
    <section className="project-wrapper-1 py-5 pt-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h1 className="heading mb-4 text-center">
              <span style={{ color: "#000" }}>All </span>{" "}
              <span style={{ color: "rgb(245, 141, 28)" }}>Projects</span>
            </h1>
          </div>
        </div>
        <div className="row  pt-4">
          <CustomCard data={videos} />;
        </div>
      </div>
    </section>
  );
};
