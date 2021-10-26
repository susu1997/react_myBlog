/*
 * @Author: shuyang
 * @Date: 2021-10-24 20:42:16
 * @LastEditTime: 2021-10-26 21:35:48
 * @FilePath: \my_blog\pages\index.tsx
 */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Button } from "antd";
import Header from "../components/Header/Header";

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
