import React, { Component } from 'react'
import { withRouter  } from 'react-router'
import {Layout,Dropdown,Menu,Avatar,Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import "../Crm/Crm.css"
import "./Header.css"
const { Header} = Layout;

import {
    SettingOutlined,
    LogoutOutlined,
    RollbackOutlined,
    MenuFoldOutlined
  } from "@ant-design/icons";
class HeaderLayout extends Component {
    constructor() {
        super();
        this.state = {
          userLogin: "",
          userPass: "",
          ishow:false,
        };
      }
      toggle = () => {
        this.props.collapsed();
      };
    logOut = (e) => {
        e.preventDefault()
        this.setState({ ishow: !this.state.ishow});
        setTimeout(()=>{
            this.props.history.push('/')
            localStorage.removeItem('usertoken')
            this.setState({ ishow: !this.state.ishow});
        },700);
      }
      
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
                <a  onClick={this.logOut}>
                  Đăng xuất
                </a>
              </Menu.Item>
            </Menu>
          );
        return (
            <div>
            <Header className="site-layout-background">
               
            {React.createElement(
              MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
             <div className="header-right">
                <Badge className="header-notification"
                    count={5}
                    style={{
                      boxShadow: 'none',
                    }}
                  >
                    <BellOutlined className="header-bell"/>
                </Badge>
                <Dropdown overlay={menu} className="header-user" >
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  ><Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                  <span >&nbsp;
                  Xin chào:Admin
                  </span>
                  </a>
                </Dropdown>
            </div>
          </Header>
          <div className="example">
                     {this.state.ishow == true ? <Spin /> : ""}
                </div>
          </div>
        )
    }
}
export default withRouter(HeaderLayout);
