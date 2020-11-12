import React, { Component } from 'react'
import { Divider, Col, Row, Tabs, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
// import { Row, Col } from 'antd';
const { TabPane } = Tabs;
import "./ProfileOne.css"
export default class ProfileOne extends Component {
  render() {
    return (

      <div style={{ height: "calc(100vh - 139px)" }}  >
        <Row className="profile-content-main" justify="space-around" >
          <Col span={6} className="profile-content gutter-row">

            <p className="site-description-item-profile-p profile-infor-user" style={{ marginBottom: 24 }}>
              Thông tin nhân viên
          </p>
            <div className="profile-infor-main">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                // icon={<AntDesignOutlined />}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <h3>Nguyễn Hoài Nam</h3>
              <span>Nhân viên phòng CNTT</span>
            </div>
            <Row>
              <Col span={24}  >
                <span className="profile-infor-user-title-left" >
                  Họ và tên:
              </span>
                <span className="profile-infor-user-content" >
                  Nguyễn Văn A
              </span>
              </Col>
              <Col span={24}>
                <span className="profile-infor-user-title-left" >
                  Bút danh:
              </span>
                <span className="profile-infor-user-content" >
                  Nguyễn Văn A
              </span>
              </Col>
            </Row>
            <Row>
              <Col span={24}>

                <span className="profile-infor-user-title-left" >
                  Năm sinh:
              </span>
                <span className="profile-infor-user-content" >
                  1997
              </span>
              </Col>
              <Col span={24}>
                <span className="profile-infor-user-title-left" >
                  Giới tính:
              </span>
                <span className="profile-infor-user-content" >
                  Nam
              </span>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <span className="profile-infor-user-title-left" >
                  Nơi sinh:
              </span>
                <span className="profile-infor-user-content" >
                  Bệnh viện Cần giuộc, tỉnh Long An
              </span>
              </Col>
              <Col span={24}>
                <span className="profile-infor-user-title-left" >
                  Quê quán:
              </span>
                <span className="profile-infor-user-content" >
                  Cần giuộc, tỉnh Long An
              </span>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <span className="profile-infor-user-title-left" >
                  Chi tiết:
              </span>
                <span className="profile-infor-user-content" >
                  Không có gì để nói
              </span>
              </Col>
            </Row>
            <Divider />
          </Col>
          <Col span={17} className="profile-content" >
            <Tabs>
              <TabPane tab="Thông tin chung" key="1">
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      HỌ VÀ TÊN:
                    </span>
                    <span className="profile-infor-user-content" >
                      Nguyễn Văn A
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      BÚT DANH:
                    </span>
                    <span className="profile-infor-user-content" >
                      Nguyễn Văn A
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      NĂM SINH:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      GIỚI TÍNH:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      NƠI SINH:
                    </span>
                    <span className="profile-infor-user-content" >
                      Bệnh viện Cần Giuộc, huyện Cần Giuộc, tỉnh Long An
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      QUÊ QUÁN
                    </span>
                    <span className="profile-infor-user-content" >
                      Ấp hoà thuậ II, thị trấn Cần Giuộc, huyện Cần Giuộc, tỉnh Long An
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      DÂN TỘC
                    </span>
                    <span className="profile-infor-user-content" >
                      Kinh
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      TÔN GIÁO:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      BỘ PHẬN CÔNG TÁC:
                    </span>
                    <span className="profile-infor-user-content" >
                      Phòng công nghệ thông tin
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      CHỨC VỤ:
                    </span>
                    <span className="profile-infor-user-content" >
                      Nhân viên phòng công nghệ thông tin
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      NGÀY BỔ NHIỆM:
                    </span>
                    <span className="profile-infor-user-content" >
                      24/01/1999
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      HỘ KHẨU THƯỜNG TRÚ:
                    </span>
                    <span className="profile-infor-user-content" >
                      60A Hoàng Văn Thụ, quận Phú Nhuận, HCM
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      NƠI Ở HIỆN NAY:
                    </span>
                    <span className="profile-infor-user-content" >
                      60A Hoàng Văn Thụ, quận Phú Nhuận, HCM
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      SỐ CMND/THẺ CĂN CƯỚC CÔNG DÂN:
                    </span>
                    <span className="profile-infor-user-content" >
                      301616354
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      SỐ THẺ NHÀ BÁO:
                    </span>
                    <span className="profile-infor-user-content" >
                      12/01/1999
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      ĐỐI TƯỢNG LAO ĐỘNG:
                    </span>
                    <span className="profile-infor-user-content" >
                      CHÍNH THỨC
                    </span>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Quá trình công tác" key="2">
                Content of Tab 2
            <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Trình độ" key="3">
                Content of Tab 3
            <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Thông tin thêm" key="4">
                Content of Tab 3
            <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span className="profile-infor-user-title" >
                      Chi tiết:
                    </span>
                    <span className="profile-infor-user-content" >
                      Không có gì để nói
                    </span>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}
