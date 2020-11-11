import React, { Component } from "react";
import {Link}  from 'react-router-dom'
import logo from "../../assets/images/Logo.png";
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
          <Menu mode="inline" defaultSelectedKeys={["4"]} className="menulayout-main" >
            <Menu.Item key="sub1" icon={<UserOutlined />}>
              <Link to="/crm/profileone">
                 Cá nhân
              </Link>
            </Menu.Item>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Nhân viên">
              <Menu.Item key="6">Tạo nhân viên mới</Menu.Item>
              <Menu.Item key="8">Chỉnh sửa theo yêu cầu</Menu.Item>
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
       </div>
    );
  }
}
