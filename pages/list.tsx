/*
 * @Author: shuyang
 * @Date: 2021-10-28 22:44:28
 * @LastEditTime: 2021-11-04 23:02:08
 * @FilePath: \nextJs_Blog\react_myBlog\pages\list.tsx
 */
import type { NextPage } from "next";
import Head from "next/head";
import { Row, Col, List ,Breadcrumb} from "antd";
import { useState, useEffect } from "react";
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Link from 'next/link'
import { ScheduleOutlined ,FireOutlined,FolderOutlined} from "@ant-design/icons";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
const MyList: NextPage = (list:any) => {
  const [mylist, setMylist] = useState(list.data)
  useEffect(() => {
    setMylist(list.data)
  } )
  return (
    <div>
    <Head>
      <title>Create Next App</title>
    </Head>
    <Header></Header>
    <Row className="comm_main" justify="center">
        <Col className="comm_left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a> </Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        <List
          header={<div>最新日志</div>}
          itemLayout="vertical"
          dataSource={mylist}
          renderItem={(item :any) => (
            <List.Item>
              <div className="list_title">
                <Link href={{ pathname: '/details', query: { id: item.id } }}>
                    <a> {item.title}</a>                    
                </Link>
                {item.title}
              </div>
              <div className="list_icon">
                  <span><ScheduleOutlined /> { item.addTime}</span>
                  <span><FolderOutlined /> { item.typeName}</span>
                  <span><FireOutlined /> { item.view_count}</span>
              </div>
              <div className="list_context" >{item.context}</div>
            </List.Item>
          )}
        />
      </Col>
      <Col className= "comm_right" xs={0} sm={0} md={7} lg={5} xl={4}>
       <Author />
       <Advert />
      </Col>
    </Row>
    <Footer />
  </div>
  );
};
MyList.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getListById+id).then(
      (res) => {
        console.log(res.data)
        resolve(res.data)
      }
    )
  })
  return await promise 
}
export default MyList;
//24