import React, { Component } from "react";
import "../../App/App.css";
import "./Crm.css"
import logo from "../../assets/images/Logo.png";
import { Button, Layout, Menu,Dropdown } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  LogoutOutlined,
  RollbackOutlined
} from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
export default class Profile extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item icon={<SettingOutlined />}>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            Cập nhật profile
          </a>
        </Menu.Item>
        <Menu.Item icon={<RollbackOutlined />}>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Đổi mật khẩu
          </a>
        </Menu.Item>
        <Menu.Item icon={<LogoutOutlined />}>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Đăng xuất
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Layout>
          <Sider collapsed={this.state.collapsed}>
            <div className="logo">
              <img
                className="logo-img"
                style={{ objectFit: "cover" }}
                src={logo}
              ></img>
            </div>
            <Menu mode="inline" defaultSelectedKeys={["4"]}>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 233</Menu.Item>
              </SubMenu>
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Option 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="site-layout-background">
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Xin chào:Admin 
                  {/* <DownOutlined /> */}
                </a>
              </Dropdown>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 560 }}
              >
                <br />
                Really
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                long
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
