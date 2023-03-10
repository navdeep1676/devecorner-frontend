import React, { useContext, useEffect } from "react";
import { videos } from "../utils/Data";
import { CustomCard } from "./comman/CustomCard";
import { AppContext } from "../helpers/app-context";
export const Videos = () => {
  const ctx = useContext(AppContext);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const result = await ctx.HttpGet("video");
  };
  return (
    <section className="video-wrapper-1 py-5 pt-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h1 className="heading mb-4 text-center">
              <span style={{ color: "#000" }}>All </span>{" "}
              <span style={{ color: "rgb(245, 141, 28)" }}>Videos</span>
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
