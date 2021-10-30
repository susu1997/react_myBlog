/*
 * @Author: shuyang
 * @Date: 2021-10-30 12:53:24
 * @LastEditTime: 2021-10-30 13:57:08
 * @FilePath: \my_blog\components\Header.tsx
 */
/*
 * @Author: shuyang
 * @Date: 2021-10-25 21:17:57
 * @LastEditTime: 2021-10-30 12:52:32
 * @FilePath: \my_blog\components\Header\Header.tsx
 */
import {
    HomeOutlined,
    YoutubeOutlined,
    SmileOutlined,
  } from "@ant-design/icons";
  import { Col, Menu, Row } from "antd";
  import React, { useState } from "react";
  // import style from "../Header/Header.module.scss";
  const handleClick = () => {};
  
  function Header() {
    const [current, setcurrent] = useState<any>("homePage");
  
    return (
      <div className="header">
        <Row style={{ display: "flex" }} justify="center">
          <Col xs={24} sm={24} md={12} lg={15} xl={12}>
            <span className="header_logo">陈多多舒小小</span>
            <span className="header_txt">
              陈多多：专注后端开发，舒小小：专注前端开发
            </span>
          </Col>
          <Col xs={0} sm={0} md={10} lg={8} xl={6}>
            <Menu
              onClick={handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              <Menu.Item key="homePage" icon={<HomeOutlined />}>
                首页
              </Menu.Item>
              <Menu.Item key="youtube" icon={<YoutubeOutlined />}>
                视频
              </Menu.Item>
              <Menu.Item key="life" icon={<SmileOutlined />}>
                生活
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
  export default Header;
  