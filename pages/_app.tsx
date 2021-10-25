/*
 * @Author: shuyang
 * @Date: 2021-10-24 20:42:16
 * @LastEditTime: 2021-10-25 21:49:40
 * @FilePath: \my_blog\pages\_app.tsx
 */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
// import '../styles/pages/comm.scss'
// import '../styles/components/header.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
