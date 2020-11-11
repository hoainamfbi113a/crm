import React, { Component } from 'react'
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import {  Form, Input, Select, DatePicker } from 'antd';
import { Button,Tabs} from "antd";

import "./Modify.css"
const { TabPane } = Tabs;
export default class Modify extends Component {
    onClose = () =>{
        this.props.onCloseModify()
    }
    render() {
        return (
            <Drawer
            title="Create a new account"
            width={720}
            onClose={this.onClose}
            visible={this.props.visibleModify}
            bodyStyle={{ paddingBottom: 80 }}
            placement="right"
            footer={
              <div
                style={{
                  textAlign: 'right',
                }}
              >
                <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={this.onClose} type="primary">
                  Submit
                </Button>
              </div>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Họ và tên"
                    rules={[{ required: true, message: 'Please enter user name' }]}
                  >
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="url"
                    label="Bút danh"
                    rules={[{ required: true, message: 'Please enter url' }]}
                  >
                    <Input
                      style={{ width: '100%' }}
                      placeholder="Please enter url"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="owner"
                    label="Năm sinh"
                    rules={[{ required: true, message: 'Please select an owner' }]}
                  >
                    <Input
                      style={{ width: '100%' }}
                      placeholder="Please enter url"
                    />
                    {/* <Select placeholder="Please select an owner">
                      <Option value="xiao">Xiaoxiao Fu</Option>
                      <Option value="mao">Maomao Zhou</Option>
                    </Select> */}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="type"
                    label="Giới tính"
                    rules={[{ required: true, message: 'Please choose the type' }]}
                  >
                    <Select placeholder="Please choose the type">
                      <Option value="private">Nam</Option>
                      <Option value="public">Nữ</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="approver"
                    label="Quê quán"
                    rules={[{ required: true, message: 'Please choose the approver' }]}
                  >
                    <Select placeholder="Please choose the approver">
                      <Option value="jack">Jack Ma</Option>
                      <Option value="tom">Tom Liu</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="dateTime"
                    label="Ngày bổ nhiệm"
                    rules={[{ required: true, message: 'Please choose the dateTime' }]}
                  >
                    <DatePicker
                      style={{ width: '100%' }}
                    
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label="Mô tả chi tiết"
                    rules={[
                      {
                        required: true,
                        message: 'please enter url description',
                      },
                    ]}
                  >
                    <Input.TextArea rows={4} placeholder="please enter url description" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <Tabs>
                  <TabPane tab="Thông tin chung" key="1">
                    Content of Tab 1
                  </TabPane>
                  <TabPane tab="Quá trình công tác" key="2">
                    Content of Tab 2
                  </TabPane>
                  <TabPane tab="Trình độ" key="3">
                    Content of Tab 3
                  </TabPane>
                  <TabPane tab="Thông tin thêm" key="4">
                    Content of Tab 3
                  </TabPane>
            </Tabs>
          </Drawer>
        )
    }
}
