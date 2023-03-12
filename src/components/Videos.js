import React, { useContext, useEffect, useState } from "react";
import { CustomCard } from "./comman/CustomCard";
import { AppContext } from "../helpers/app-context";
export const Videos = () => {
  const ctx = useContext(AppContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const result = await ctx.HttpGet("video");
    if (result.status === true) {
      setVideos(result.data);
    }
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
          <CustomCard data={videos} type="video" />;
        </div>
      </div>
    </section>
  );
};
