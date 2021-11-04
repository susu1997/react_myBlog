/*
 * @Author: shuyang
 * @Date: 2021-10-30 12:53:24
 * @LastEditTime: 2021-11-04 22:59:32
 * @FilePath: \nextJs_Blog\react_myBlog\components\Header.tsx
 */
import * as Icon from "@ant-design/icons";
  import { Col, Menu, Row } from "antd";
  import React, { useState ,useEffect} from "react";
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Item from "antd/lib/list/Item";
import { HomeOutlined } from "@ant-design/icons";
  const handleClick = () => {};
const iconBC = (name:any) => {
 return React.createElement((Icon as any)[name], { style: {fontSize:'16px'}})
}
  export default function Header() {
    const [current, setcurrent] = useState<any>("homePage");
    const [navArray, setNavArray] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(servicePath.getTypeInfo).then((res) => {
          return res.data.data
        })
        setNavArray(result)
      }
      fetchData()
    }, [])
    const handleClick = (e: any) => {
      console.log(e)
      if (e.key === '0') {
        Router.push('/')
      } else {
        Router.push('/list?id='+e.key)
      }
    }
   
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
              <Menu.Item key="0" icon={<HomeOutlined />} onClick={handleClick}>
                首页
              </Menu.Item>
              {
                navArray.map((item:any) => {
                  return (
                    <Menu.Item key={item.id} icon={item.icon ? iconBC(item.icon) : ''}>
                    { item.typeName}
                   </Menu.Item>
                  )
                 })
              }
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
  