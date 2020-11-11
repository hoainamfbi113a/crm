import React, { Component } from "react";
import "../../App/App.css";
import "../Crm/Crm.css"
import "./Table.css"
import HeaderLayout from "../Header/Header"
import Profile from "../Profile/Profile"
import Modify from "../Modify/Modify";
import Adduser from "../Adduser/Adduser";
import MenuLayout from "../Menu/MenuLayout"
import { Button, Layout, Menu, Upload } from "antd";
import { Tabs } from 'antd';
import { Table, Space, Tag, Avatar } from 'antd';
import { Input, Select } from 'antd';
import { Popconfirm, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Search } = Input;

const { Option } = Select;
const { TabPane } = Tabs;
import {
  PlusOutlined
} from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
export default class TableUser extends React.Component {
  state = {
    collapsed: false,
    visible: false,
    visibleModify: false,
    visibleAdduser: false
  };
  onSearch = value => console.log(value);
  collapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  showDrawerModify = () => {
    this.setState({
      visibleModify: true,
    });
  };

  onCloseModify = () => {
    this.setState({
      visibleModify: false,
    });
  };
  showDrawerAdduser = () => {
    this.setState({
      visibleAdduser: true,
    });
  };

  onCloseAdduser = () => {
    this.setState({
      visibleAdduser: false,
    });
  };
  confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  }

  cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  }
  render() {
    const data = [
      {
        key: '1',
        name: 'Nguyễn Văn A',
        age: "32",
        address: 'New York Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '3',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '4',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '5',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '6',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '7',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '8',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '9',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '10',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '11',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '12',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '13',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '14',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '15',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '16',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '17',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '18',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '19',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '20',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '21',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '22',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '23',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
    ];
    const columns = [
      {
        title: 'Họ và tên',
        width: 200,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        sorter: (a, b) => a.name.length - b.name.length,
        render: (text) => (

          <div>
            <Avatar style={{ marginRight: "3px" }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <a onClick={this.showDrawer}>{text}</a>
          </div>
        )
      },
      {
        title: 'Bút danh',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
        sorter: (a, b) => a.age - b.age,
      },
      { title: 'Năm sinh', dataIndex: 'address', key: '1' },
      { title: 'Giới tính', dataIndex: 'address', key: '2' },
      { title: 'Nơi sinh', dataIndex: 'address', key: '4' },
      { title: 'Quê quán', dataIndex: 'address', key: '5' },
      { title: 'Dân tộc', dataIndex: 'address', key: '6' },
      { title: 'Tôn giáo', dataIndex: 'address', key: '7' },
      { title: 'Bộ phận công tác', dataIndex: 'address', key: '8' },
      { title: 'Chức vụ', dataIndex: 'address', key: '9' },
      { title: 'Ngày bổ nhiệm', dataIndex: 'address', key: '10' },
      {
        title: 'Hành động',
        key: 'operation',
        fixed: 'right',
        width: 180,
        render: () => (
          <Space size="middle" >
            {/* <Avatar>U</Avatar> */}
            <Popconfirm title="Are you sure delete this task?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
              <Tag color="volcano" className="table-action">Xoá</Tag>
            </Popconfirm>
            <Tag onClick={this.showDrawerModify} color="geekblue" className="table-action">Sửa thông tin</Tag>
          </Space>
        ),
      },
    ];
    return (
      <div>
        <Content >
          <div style={{ height: "calc(100vh - 139px)" }} className="layout-content">
            <div className="table-btn-control">
              <div>
                <Button type="dashed" className="table-btn-add" icon={<PlusOutlined />} onClick={this.showDrawerAdduser} >
                  Thêm nhân viên
                </Button>
                <Upload >
                  <Button icon={<UploadOutlined />}>Upload bằng file excel</Button>
                </Upload>
              </div>
              <Search
                placeholder="input search text"
                allowClear
                onSearch={this.onSearch}
                style={{ width: 200 }}
                className="table-btn-search"
              />
            </div>
            <div
              style={{ padding: 24, minHeight: 200 }}
            >
              <Table columns={columns} dataSource={data} scroll={{ x: 2300 }} className="table-content" />
            </div>
          </div>
        </Content>
        <Profile visible={this.state.visible} onCloseProfile={this.onClose} />
        <Modify visibleModify={this.state.visibleModify} onCloseModify={this.onCloseModify} />
        <Adduser visibleAdduser={this.state.visibleAdduser} onCloseAdduser={this.onCloseAdduser} />
      </div>
    );
  }
}
