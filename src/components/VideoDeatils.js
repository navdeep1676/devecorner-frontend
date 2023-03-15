import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../helpers/app-context";
import { Seo } from "./comman/Seo";

export const VideoDeatils = () => {
  const ctx = useContext(AppContext);
  const location = useLocation();
  const [videoData, setVideoData] = useState([]);
  const getVideoSlug = location.pathname.split("/")[2];
  useEffect(() => {
    getVideoDetails();
  }, []);
  const getVideoDetails = async () => {
    const result = await ctx.HttpGet("video/" + getVideoSlug);
    if (result.status === true) {
      setVideoData(result.data);
    }
  };
  return (
    <>
      <Seo
        title={videoData?.title}
        kw="developers corner ,developers corner, coding , programming, tutprials,videos,mern stack, mern ecommerce project,react js ,node js"
        desc={videoData?.desc}
      />
      <section className="contact-wrapper-1 py-5 pt-0">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h1 className="heading mb-4 text-center">
                <span style={{ color: "#000" }}>{videoData?.title} </span>
              </h1>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-12">
              <img
                src={videoData?.image?.url}
                alt={videoData?.slug}
                className="img-fluid"
              />
              <div
                className="mt-5"
                dangerouslySetInnerHTML={{ __html: videoData?.summary }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
