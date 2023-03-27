import React, { useContext, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Carousel from "react-bootstrap/Carousel";
import { skills, reviews } from "../utils/Data";
import { CustomCard } from "./comman/CustomCard";
import { CustomSkillCard } from "./comman/CustomSkillCard";
import { AppContext } from "../helpers/app-context";
import { Seo } from "./comman/Seo";

export const Home = () => {
  const [videos, setVideos] = useState([]);
  const ctx = useContext(AppContext);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const result = await ctx.HttpGet("video");
    if (result.status === true) {
      let vids = [];
      for (let index = 0; index < 3; index++) {
        vids.push(result?.data[index]);
      }
      setVideos(vids);
    }
  };
  return (
    <>
      <Seo
        title={"Developer's Corner"}
        kw="developers corner ,developers corner, coding , programming, tutprials,videos,mern stack, mern ecommerce project,react js ,node js"
        desc={
          "Developer's corner is an educational website where you will lot of premium content related to web development. It's for beginners, intermediates and for experts also. The All in one solution for developers. Let's learn together."
        }
      />
      <section className="home-wrapper-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12 col-xl-6">
              <h1 className="heading mb-3">
                <span style={{ color: "#000" }}>Welcome To </span>{" "}
                <br className="d-none d-xl-block" />
                <span style={{ color: "rgb(245, 141, 28)" }}>
                  My Developer's Corner
                </span>
              </h1>
              <h1 className="d-flex heading gap-3">
                {" "}
                Learn{" "}
                <TypeAnimation
                  sequence={[
                    "UI Development",
                    1000,
                    "React Js",
                    2000,
                    "Node Js",
                    3000,
                    "Express Js",
                    4000,
                    "Mongo DB",
                    () => {
                      console.log("Done typing!"); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ color: "rgb(245, 141, 28)" }}
                />
              </h1>
              <p className="mt-3">
                Hi there, I’m Navdeep Dahiya. I have taken all that I have
                learned working as a Front End Developer and now dedicate 100%
                of my time to educating other's valuable software development
                skills and helping them break into the tech industry, continue
                to level up their skills, and advance their careers.
              </p>
              <a
                className="button mt-4"
                href="https://www.youtube.com/channel/UCMpTo3mICR8qJJhby-aqFvA"
                target={"_blank"}
              >
                Explore My YouTube Channel
              </a>
            </div>
            <div className="col-12 mt-5  mt-xl-0  col-xl-6">
              <div className="dev-back">
                <iframe
                  style={{ width: "100%" }}
                  height="415"
                  src="https://www.youtube.com/embed/hja_5chBohQ?controls=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 mt-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h1 className="heading mb-4 text-center">
                <span style={{ color: "#000" }}>Recommended </span>{" "}
                <span style={{ color: "rgb(245, 141, 28)" }}>Videos</span>
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            <CustomCard data={videos} type="video" />;
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5 mt-0 mt-md-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h1 className="heading mb-4 text-center">
                <span style={{ color: "#000" }}>My </span>{" "}
                <span style={{ color: "rgb(245, 141, 28)" }}>Skills</span>
              </h1>
            </div>
          </div>
          <div className="row mt-100">
            <CustomSkillCard data={skills} />
          </div>
        </div>
      </section>
      <section className="home-wrapper-4 py-5 mt-0 mt-md-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h1 className="heading mb-4 text-center">
                <span style={{ color: "#000" }}>Some Reviews </span>{" "}
                <span style={{ color: "rgb(245, 141, 28)" }}>About Me</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 py-5 px-0">
              <Carousel>
                {reviews?.map((item, index) => {
                  return (
                    <Carousel.Item interval={1000} key={index}>
                      <Carousel.Caption className="text-black position-static">
                        <h3 className="heading fs-3 fw-bold">{item?.name}</h3>
                        <p className="fs-5 px-1 px-sm-2 px-md-5">
                          {item?.review}
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
