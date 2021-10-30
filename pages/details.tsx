/*
 * @Author: shuyang
 * @Date: 2021-10-28 22:46:12
 * @LastEditTime: 2021-10-30 17:52:04
 * @FilePath: \my_blog\pages\details.tsx
 */
import type { NextPage } from "next";
import Head from "next/head";
import { Row, Col,Breadcrumb } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import { CalendarOutlined, FireOutlined, FolderAddOutlined } from "@ant-design/icons";
import ReactMarkDown from 'react-markdown'
// import MarkdownNavbar from 'markdown-navbar';
// The default style of markdown-navbar should be imported additionally
// import 'markdown-navbar/dist/navbar.css'
const Details: NextPage = () => {
  let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
  return (
    <div>
      <Head>
        <title>Details</title>
      </Head>
      <Header></Header>
      <Row className="comm_main" justify="center">
        <Col className="comm_left"
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
        >
          <div className="bread-div">
            <Breadcrumb>
               <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
               <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
               <Breadcrumb.Item><a href="/">xxx</a></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">React实战视频教程-舒小小Blog前端开发</div>
            <div className="list-icon center">
              <span><CalendarOutlined />2021-10-30</span>
              <span><FolderAddOutlined />视频教程</span>
              <span><FireOutlined />2344人</span>
            </div>
            <div className="detailed-content">
              <ReactMarkDown children={markdown} skipHtml ={ false}/>
            </div>
          </div>
        </Col>
        <Col className="comm_right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            {/* <MarkNav></MarkNav> */}
          </div>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
};

export default Details;
