/*
 * @Author: shuyang
 * @Date: 2021-10-25 21:17:57
 * @LastEditTime: 2021-10-25 23:08:49
 * @FilePath: \my_blog\components\Header.tsx
 */
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
React.useLayoutEffect = React.useEffect;
import "../styles/components/header.scss";
// const [current, setcurrent] = useState("homePage");
const handleClick = () => {};
function Header() {
  const [current, setcurrent] = useState("homePage");
  return (
    <div className="header">
      <Row justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="header-logo">陈多多舒小小</span>
          <span className="header-txt">
            陈多多：专注后端开发第三年，舒小小：专注前端开发第三年
          </span>
        </Col>
        <Col xs={24} sm={24} md={14} lg={8} xl={6}>
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
// https://stackoverflow.com/questions/60941853/next-js-global-css-cannot-be-imported-from-files-other-than-your-custom-app
