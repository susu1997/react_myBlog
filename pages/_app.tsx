/*
 * @Author: shuyang
 * @Date: 2021-10-24 20:42:16
 * @LastEditTime: 2021-10-28 22:30:44
 * @FilePath: \my_blog\pages\_app.tsx
 */
import "../styles/globals.css";
import "../styles/pages/comm.module.scss";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
