import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "../../App/App.css";
import "../Crm/Crm.css"
import "./Table.css"
import Profile from "../Profile/Profile"
import Modify from "../Modify/Modify";
import Adduser from "../Adduser/Adduser";
import * as userActions from '../../actions/userAction';
import { Button, Layout, Upload } from "antd";
import { Table, Space, Tag, Avatar } from 'antd';
import { Input } from 'antd';
import { Popconfirm, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Search } = Input;

import {
  PlusOutlined
} from "@ant-design/icons";
const { Content } = Layout;
class TableTest extends Component {
  componentDidMount() {
    const { userActionCreators } = this.props;
    const { fetchListUser } = userActionCreators;
    fetchListUser();
  }

  state = {
    collapsed: false,
    visible: false,
    visibleModify: false,
    visibleAdduser: false,
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
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
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  
  render() {
    console.log(this.props.user)
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Nguyễn Ngọc Hà ${i}`,
        position:`Trưởng phòng tài chínhs ${i}`,
        age: 32,
        degree: `Cử nhân ${i}`,
        email:`nguyeenxvanwa@gmail.com`,
        phone:`0123456789 ${i}`,
        sex:`Nữ ${i}`,
        dateOfBirth: `12/12/1998 ${i}`,
        school:`DH Khoa Học Xã Hội và Nhân Văn HCM ${i}`
      });
    }
    const columns = [
      {
        title: 'Họ và tên',
        width: 430,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        sorter: (a, b) => a.name.length - b.name.length,
        render: (text,row) => (
          <div style={{display:"flex"}}>
            <Avatar size={64} style={{ marginRight: "3px" }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <div>
              <a onClick={this.showDrawer}>{text}</a>
              <h4 style={{marginBottom:"0px"}}>{row.position}</h4>
              <span style={{marginRight:"15px",fontSize:"12px"}}>{row.email}</span>
              <span style={{fontSize:"12px"}}>{row.phone}</span>
            </div>
          </div>
        )
      },
      {
        title: 'Ngày sinh',
        width: 330,
        dataIndex: 'sex',
        key: 'sex',
        fixed: 'left',
        sorter: (a, b) => a.age - b.age,
        render: (text,row) => (
          <div>
            <b>{text}</b>
            <p>{row.dateOfBirth}</p>
          </div>
        )
      },
      {
         width:330,
         title: 'Trình độ', dataIndex: 'degree', key: '2',
         render: (text,row) => (
          <div>
            <b>{text}</b>
            <p>{row.school}</p>
          </div>
        )
      },
      {
        title: 'Hành động',
        key: 'operation',
        fixed: 'right',
        width: 300,
        render: () => (
          <Space size="middle" >
            <Popconfirm title="Are you sure delete this task?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
              <Tag color="volcano" className="table-action">Xoá</Tag>
            </Popconfirm>
            <Tag onClick={this.showDrawerModify} color="geekblue" className="table-action">Sửa thông tin</Tag>
          </Space>
        ),
      },
    ];
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <Content >
          <div style={{ height: "calc(100vh - 139px)" }} className="layout-content">
            <div className="table-btn-control">
              <div>
                <Button style={{marginLeft:"20px"}} >600 Nhân viên</Button>
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
              <Table rowSelection={rowSelection} columns={columns} dataSource={data}  className="table-content" />
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


const mapStateToProps = state => ({
  user: state.userReducer
})
const mapDispatchToProps = dispatch => ({
  userActionCreators: bindActionCreators(userActions,dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(TableTest)