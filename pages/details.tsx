/*
 * @Author: shuyang
 * @Date: 2021-10-28 22:46:12
 * @LastEditTime: 2021-11-04 21:45:55
 * @FilePath: \nextJs_Blog\react_myBlog\pages\details.tsx
 */
import type { NextPage } from "next";
import Head from "next/head";
import { Row, Col,Breadcrumb ,Affix} from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import { CalendarOutlined, FireOutlined, FolderAddOutlined } from "@ant-design/icons";

import axios from "axios";
// @ts-ignore
import { marked} from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify'
import servicePath from '../config/apiUrl'
const Details: NextPage = (props: any) => {
  console.log('ss', props)
  const tocify = new Tocify()
  const renderer = new marked.Renderer()
  // ### jishupang
  renderer.heading = function(text:any,level:any,raw:any) {
    const anchor = tocify.add(text, level)
    return `<a id = "${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }
  console.log('renderer', renderer)
  
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
  let html = marked( props.article_content)
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
            <div className="detailed-content" dangerouslySetInnerHTML={{__html:html} }>
              {/* { html} */}
              {/* <ReactMarkDown children={markdown} skipHtml={false} /> */}
              
            </div>
          </div>
        </Col>
        <Col className="comm_right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={ 5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              { tocify&& tocify.render()}
              {/* <MarkNav className="article-menu"  source={html} ordered={false}></MarkNav> */}
            </div>

          </Affix>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
};
Details.getInitialProps = async (content) => {
  let id = content.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById + id).then(
      (res) => {
        console.log(res.data)
        resolve(res.data.data[0])
      }
    )
  })
  return await promise 
 }
export default Details;
//21
