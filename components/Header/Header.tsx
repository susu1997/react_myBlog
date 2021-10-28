/*
 * @Author: shuyang
 * @Date: 2021-10-25 21:17:57
 * @LastEditTime: 2021-10-28 21:46:17
 * @FilePath: \my_blog\components\Header\Header.tsx
 */
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import React, { useState } from "react";
import style from "../Header/Header.module.scss";
const handleClick = () => {};

function Header() {
  const [current, setcurrent] = useState<any>("homePage");

  return (
    <div className={style.header}>
      <Row style={{ display: "flex" }} justify="center">
        <Col xs={24} sm={24} md={12} lg={15} xl={12}>
          <span className={style.header_logo}>陈多多舒小小</span>
          <span className={style.header_txt}>
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
      <style>
        {`
          .ant-menu {
            line-height: 2.8rem;
          }
          .ant-menu-item {
            font-size: 1rem !important;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        `}
      </style>
    </div>
  );
}
export default Header;
// https://stackoverflow.com/questions/60941853/next-js-global-css-cannot-be-imported-from-files-other-than-your-custom-app
//https://github.com/ant-design/ant-design/issues/30396
