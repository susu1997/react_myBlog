/*
 * @Author: shuyang
 * @Date: 2021-10-24 20:42:16
 * @LastEditTime: 2021-10-30 14:42:06
 * @FilePath: \my_blog\pages\_app.tsx
 */
import type { AppProps } from "next/app"
import "antd/dist/antd.css"
import "../styles/globals.css"
import "../styles/pages/index.scss"
import "../styles/pages/comm.scss"
import '../styles/components/header.scss'
import '../styles/components/author.scss'
import '../styles/components/advert.scss'
import '../styles/components/footer.scss'
import '../styles/components/detailed.scss'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
