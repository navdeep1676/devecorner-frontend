import { Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const { Header, Content, Footer } = Layout;
export const MainLayout = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuItems = [
    {
      key: "/",
      label: "Home",
    },
    {
      key: "/videos",
      label: "Videos",
    },
    {
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
    },
    {
      key: "/contact",
      label: "Contact Us",
    },
  ];
  return (
    <Layout className="layout">
      <Header className="d-flex justify-content-between fixed-top w-100">
        <div className="logo py-1">
          <Link className="text-decoration-none fw-bold d-flex gap-3 align-items-center">
            <img src="/logo.png" width={45} alt="" />{" "}
            <span
              className="fs-4 d-none d-xxl-block"
              style={{ color: "rgb(245, 141, 28)" }}
            >
              Developer's Corner
            </span>
          </Link>
        </div>
        <Menu
          theme="dark"
          className="py-0 flex-grow-1 fs-6 justify-content-end"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={menuItems}
          onClick={({ key }) => {
            navigate(key);
          }}
        />
      </Header>
      <Content
        style={{
          padding: "150px 70px",
        }}
      >
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <p className="fs-5 mb-0"> ©2023 Created by Developer's Corner</p>
          <div className="social-media-icons d-flex gap-4 align-items-center">
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
      </Footer>
    </Layout>
  );
};
