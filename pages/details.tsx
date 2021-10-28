/*
 * @Author: shuyang
 * @Date: 2021-10-28 22:46:12
 * @LastEditTime: 2021-10-28 22:46:12
 * @FilePath: \my_blog\pages\details.tsx
 */
import type { NextPage } from "next";
import Head from "next/head";
import style from "../styles/pages/comm.module.scss";
import { Row, Col } from "antd";
import Header from "../components/Header/Header";
const Details: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Details</title>
      </Head>
      <Header></Header>
      <Row className={style.comm_main} justify="center">
        <Col
          className={style.comm_left}
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
        >
          左侧
        </Col>
        <Col className={style.comm_right} xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  );
};

export default Details;
