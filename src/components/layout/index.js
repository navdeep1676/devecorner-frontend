import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { contextType } from "react-quill";
import { AppContext } from "../../helpers/app-context";
export const MainLayout = () => {
  const ctx = useContext(AppContext);
  const menuItems = [
    {
      key: "/",
      label: "Home",
    },
    {
      key: "/videos",
      label: "Videos",
    },
    /*    {
      key: "/projects",
      label: "Projects",
    },
    {
      key: "/problems",
      label: "Problems",
    },
    {
      key: "/howto",
      label: "How To",
    },
    {
      key: "/tutorials",
      label: "Tutorials",
    },
    {
      key: "/notes",
      label: "Notes",
    }, */
    {
      key: "/contact",
      label: "Contact Us",
    },
  ];
  const [expanded, setExpanded] = useState(false);
  const [can, setCan] = useState("");
  const location = useLocation();
  useEffect(() => {
    setCan(location.pathname);
  }, []);
  console.log(ctx.pageTitle);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ctx.pageTitle}</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
        className="py-0"
      >
        <Container fluid={"xxl"}>
          <Navbar.Brand href="#home" className="mx-0">
            <div className="logo py-1">
              <Link
                to="/"
                className="text-decoration-none fw-bold d-flex mx-0 gap-3 align-items-center"
              >
                <img src="/logo.png" width={45} alt="" />{" "}
                <span
                  className="fs-4 d-none d-xxl-block"
                  style={{ color: "rgb(245, 141, 28)" }}
                >
                  Developer's Corner
                </span>
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              {menuItems?.map((item, index) => {
                return (
                  <Nav.Link
                    className="px-0 text-white"
                    as={Link}
                    to={item.key}
                    key={index}
                    eventKey={index}
                    onClick={() => ctx.setPageTitle(item?.label)}
                  >
                    {item.label}
                  </Nav.Link>
                );
              })}
            </Nav>
            {/* <Nav>
              <NavLink
                style={{ paddingTop: "3px", paddingBottom: "3px" }}
                className="button  px-4"
                href="#deets"
              >
                Login
              </NavLink>
              <NavLink
                style={{ paddingTop: "3px", paddingBottom: "3px" }}
                className="button  px-4"
                href="#memes"
              >
                SignUp
              </NavLink>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: "50px" }}>
        <Outlet />
      </div>
      <footer
        className="container-xxl py-3"
        style={{
          textAlign: "center",
        }}
      >
        <div className="d-flex flex-wrap justify-content-center gap-3 justify-content-md-between align-items-center">
          <p className="fs-5 mb-0"> ©2023 Created by Developer's Corner</p>
          <div className="social-media-icons d-flex gap-4 mb-3 mb-sm-0 align-items-center">
            <a
              href="https://www.instagram.com/heartblack1676/"
              target={"_blank"}
            >
              <img src="/images/instagram.png" alt="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/navdeep-dahiya-719016186/"
              target={"_blank"}
            >
              <AiFillLinkedin className="fs-1" style={{ color: "#0077b5" }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCMpTo3mICR8qJJhby-aqFvA"
              target={"_blank"}
            >
              <AiFillYoutube className="fs-1 text-danger" />
            </a>

            <a href="https://www.buymeacoffee.com/monud0232" target={"_blank"}>
              <img src="/images/buymeacoffe.svg" alt="buymeacoffe" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
