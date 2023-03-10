import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
export const AdminLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo d-flex gap-3 align-items-center p-3">
          <img width={45} height={45} src="/logo.png" alt="" />
          {!collapsed && (
            <span
              className="fs-4 fw-bold d-none d-xxl-block"
              style={{ color: "rgb(245, 141, 28)" }}
            >
              DC
            </span>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "Users", icon: <UserOutlined />, label: "Users" },
            {
              key: "video",
              icon: <VideoCameraOutlined />,
              label: "Videos",
              children: [
                {
                  key: "video/video-list",
                  icon: <VideoCameraOutlined />,
                  label: "List",
                },
                {
                  key: "video/add-video",
                  icon: <VideoCameraOutlined />,
                  label: "Add Video",
                },
              ],
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
          onClick={({ key }) => {
            navigate(key);
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="d-flex justify-content-between px-4 align-items-center">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger text-white",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="myprofile text-white">A</div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
