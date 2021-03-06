import React, { Component } from "react";
import {Link}  from 'react-router-dom'
import logo from "../../assets/images/logo.png";
import { Menu,Layout } from "antd"
import { UserOutlined,PieChartOutlined,TeamOutlined,DesktopOutlined,FileOutlined } from '@ant-design/icons';

import "./Menu.css"
const { SubMenu } = Menu;
const { Sider } = Layout;
export default class MenuLayout extends Component {
  render() {
    return (
      <div>
        <Sider collapsed={this.props.collapsed} className="menulayout-main">
          <div className="logo">
            <img
              className="logo-img"
              style={{ objectFit: "cover" }}
              src={logo}
            ></img>
          </div>
          <Menu mode="inline" defaultSelectedKeys={["2"]} className="menulayout-main" >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/crm/profileone">
                 Cá nhân
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
              <Link to="/crm">
                 Nhân viên
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="5" icon={<FileOutlined />}>
              Option 3
            </Menu.Item>
          </Menu>
        </Sider>
       </div>
    );
  }
}
