/*
 * @Author: shuyang
 * @Date: 2021-10-24 20:42:16
 * @LastEditTime: 2021-11-06 15:15:28
 * @FilePath: \react_myBlog\pages\index.tsx
 */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Row, Col, List } from "antd";
import { ScheduleOutlined ,FireOutlined,FolderOutlined} from "@ant-design/icons";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import axios from "axios";
// @ts-ignore
import { marked} from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import servicePath from '../config/apiUrl'
import Tocify from "../components/tocify";
const Home: NextPage = (list: any) => {
  const tocify = new Tocify()
  const renderer = new marked.Renderer()
    // ### jishupang
    // renderer.heading = function(text:any,level:any,raw:any) {
    //   const anchor = tocify.add(text, level)
    //   return `<a id = "${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
    // }
    // console.log('renderer', renderer)
    
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartList: true,
      highlight:function (code:any) {
        return hljs.highlightAuto(code).value
      }
    })
    // let html = marked( props.article_content)
  console.log('s')
  const [mylist, setMylist] = useState([
    ...list.data
  ]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header></Header>
      <Row className="comm_main" justify="center">
        <Col className="comm_left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>Header</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list_title">
                  <Link href={{ pathname: '/details', query: { id: item.id } }}>
                    <a> {item.title}</a>                    
                  </Link>
                </div>
                <div className="list_icon">
                  <span><ScheduleOutlined /> { item.addTime}</span>
                  <span><FolderOutlined /> { item.typeName}</span>
                  <span><FireOutlined /> { item.view_count}</span>
                </div>
                <div className="list_context" dangerouslySetInnerHTML = {{__html:marked(item.introduce)} }>
                  
                  {/* {item.introduce} */}
                </div>
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
Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        console.log(res.data)
        resolve(res.data)
      }
    )
  })
  return await promise 
}
export default Home;
