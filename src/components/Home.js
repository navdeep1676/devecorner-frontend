import React from "react";
import { TypeAnimation } from "react-type-animation";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  return (
    <>
      <section className="home-wrapper-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xl-6">
              <h1 className="heading mb-3">
                <span style={{ color: "#000" }}>Welcome To </span>{" "}
                <br className="d-none d-xl-block" />
                <span style={{ color: "rgb(245, 141, 28)" }}>
                  Developer's Corner
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
                Hi there, I’m Navdeep. I have taken all that I have learned
                working as a Front End Developer and now dedicate 100% of my
                time to educating others' valuable software development skills
                and helping them break into the tech industry, continue to level
                up their skills, and advance their careers.
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
                <img
                  src="/images/myimg.png"
                  style={{ width: "600px", transform: "rotate(170deg)" }}
                  alt="myimg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="heading mb-4 text-center">
                <span style={{ color: "#000" }}>Recommended </span>{" "}
                <span style={{ color: "rgb(245, 141, 28)" }}>Videos</span>
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src="/images/p1.png" />
                <Card.Body>
                  <Card.Title>
                    Easily Create a Modern ECommerce Website Using React Js
                    (HTML, CSS, Bootstrap5 and React) in 2023!
                  </Card.Title>
                  <Card.Text>
                    Are you looking for a simple way to build an ecommerce store
                    using React and Redux? Look no further than Project MERN! In
                    this video, we'll cover how to set up and configure React
                    and Redux to create a simple ecommerce store.
                  </Card.Text>
                  <a
                    className="button mt-4"
                    href="https://youtu.be/eu0rExO_C3A"
                    target={"_blank"}
                  >
                    Explore Now
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src="/images/p2.jpg" />
                <Card.Body>
                  <Card.Title>
                    Node.js E-Commerce App with REST API: Let's Build a
                    Real-Life Example!
                  </Card.Title>
                  <Card.Text>
                    In this video, we'll be building an e-commerce app in
                    Node.js with a REST API and MongoDB. We'll be using advanced
                    authentication with a JSON web token and the mern stack.
                    This will be a comprehensive guide that will teach you how
                    to build an e-commerce app from scratch.
                  </Card.Text>
                  <a
                    className="button mt-4"
                    href="https://youtu.be/S6Yd5cPtXr4"
                    target={"_blank"}
                  >
                    Explore Now
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src="/images/p3.jpg" />
                <Card.Body>
                  <Card.Title>
                    Easily Create React ECommerce Admin Dashbaord Ui | Learn
                    React Js | React Js Project
                  </Card.Title>
                  <Card.Text>
                    In this video, I'm going to show you how to easily create a
                    React-based eCommerce admin dashboard UI. We're going to use
                    React and React-Javascript to create a user interface that
                    can be used to manage your eCommerce store.
                  </Card.Text>
                  <a
                    className="button mt-4"
                    href="https://youtu.be/roDMHxABmHU"
                    target={"_blank"}
                  >
                    Explore Now
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src="/images/p4.jpg" />
                <Card.Body>
                  <Card.Title>
                    Full Stack Mern Ecommerce Project: API Integration with
                    Admin Panel using Redux Toolkit : Part 01
                  </Card.Title>
                  <Card.Text>
                    In this video, I'm going to show you how to integrate the
                    Login API with the Admin Panel on a Full Stack Mern
                    Ecommerce Project. If you're looking to create a mern
                    ecommerce project, then this is the video for you! In this
                    video...
                  </Card.Text>
                  <a
                    className="button mt-4"
                    href="https://youtu.be/g-zevPPPkYE"
                    target={"_blank"}
                  >
                    Explore Now
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5 mt-0 mt-md-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="heading mb-4 text-center">
                <span style={{ color: "#000" }}>My </span>{" "}
                <span style={{ color: "rgb(245, 141, 28)" }}>Skills</span>
              </h1>
            </div>
          </div>
          <div className="row mt-100">
            <div className="col-3">
              <div
                className="skill-card"
                style={{ borderBottom: "2px solid #2c98f0" }}
              >
                <div
                  className="icon-clip"
                  style={{ backgroundColor: "#2c98f0" }}
                >
                  <img src="/images/ui.png" className="img-fluid" alt="ui" />
                </div>
                <h1 className="mb-3 fs-3">UI Development</h1>
                <p className="fs-4">Expert</p>
              </div>
            </div>
            <div className="col-3">
              <div
                className="skill-card"
                style={{ borderBottom: "2px solid #ec5453" }}
              >
                <div
                  className="icon-clip"
                  style={{ backgroundColor: "#ec5453" }}
                >
                  <img
                    src="/images/react.png"
                    className="img-fluid"
                    alt="react"
                  />
                </div>
                <h1 className="mb-3 fs-3">React Js</h1>
                <p className="fs-4">Expert</p>
              </div>
            </div>
            <div className="col-3">
              <div
                className="skill-card"
                style={{ borderBottom: "2px solid #f9bf3f" }}
              >
                <div
                  className="icon-clip"
                  style={{ backgroundColor: "#f9bf3f" }}
                >
                  <img
                    src="/images/node-js.png"
                    className="img-fluid"
                    alt="nodejs"
                  />
                </div>
                <h1 className="mb-3 fs-3">Node-Express Js</h1>
                <p className="fs-4">Expert</p>
              </div>
            </div>

            <div className="col-3">
              <div
                className="skill-card"
                style={{ borderBottom: "2px solid #2fa499" }}
              >
                <div
                  className="icon-clip"
                  style={{ backgroundColor: "#2fa499" }}
                >
                  <img
                    src="/images/db.png"
                    className="img-fluid"
                    alt="nodejs"
                  />
                </div>
                <h1 className="mb-3 fs-3">Mongo Db</h1>
                <p className="fs-4">Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-4 py-5 mt-0 mt-md-5">
        <div className="container-fluid">
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
                <Carousel.Item interval={1000}>
                  <Carousel.Caption className="text-black position-static">
                    <h3 className="heading fs-3 fw-bold">
                      Курсантбек Мамадалы уулу
                    </h3>
                    <p className="fs-4 px-5">
                      I want to say Thank you for these projects and your
                      teaching. Thank you very much for making all of this
                      available to us. This course is exactly what someone like
                      me needs.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <Carousel.Caption className="text-black position-static">
                    <h3 className="heading fs-3 fw-bold">Anonymus</h3>
                    <p className="fs-4 px-5">
                      Thanks for uploaded.. A fantastic Mern stack project....
                      Thank you...boss....🔥❤️🔥...i hope you'll give us more
                      project like this...project..... 😍
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption className="text-black position-static">
                    <h3 className="heading fs-3 fw-bold">Quran and Sunnah</h3>
                    <p className="fs-4 px-5">
                      This video is underated omg one of the meanifull,coolest
                      and easily comprehensible tutorial i ever go through i
                      really appreciates the efforts you invested into this
                      Thank you so much
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption className="text-black position-static">
                    <h3 className="heading fs-3 fw-bold">Bianca Hoffmann</h3>
                    <p className="fs-4 px-5">
                      Wow, the tutorial is amazing, I like it a lot, I hope
                      someday I can do something like this, it's time to learn
                      and to try hard.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption className="text-black position-static">
                    <h3 className="heading fs-3 fw-bold">Thi Bảo</h3>
                    <p className="fs-4 px-5">
                      Wow, The tutorial is amazing, I like it a lot, I hope
                      someday I can do something like this, it's time to learn
                      and to try hard. 🥰🥰🥰🥰🥰🥰🥰🥰🥰
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
