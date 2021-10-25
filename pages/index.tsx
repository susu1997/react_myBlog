/*
 * @Author: shuyang
 * @Date: 2021-10-24 20:42:16
 * @LastEditTime: 2021-10-25 21:41:23
 * @FilePath: \my_blog\pages\index.tsx
 */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Button } from "antd";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header></Header>
    </div>
  );
};

export default Home;
