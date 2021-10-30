/*
 * @Author: shuyang
 * @Date: 2021-10-30 12:53:55
 * @LastEditTime: 2021-10-30 12:53:55
 * @FilePath: \my_blog\components\Author.tsx
 */
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import { Avatar, Divider } from 'antd'
const Author = () => {
    return (
        <div className="author_div comm_box">
            <div><Avatar size={100} src="http://hbimg.huabanimg.com/f07cbcdac0f64c1e4ddb32cda0309dc8cafd0145f39b7-qOX5qr_fw658/format/webp"></Avatar> </div>
            <div className="author_introduction">陈多多：专注后端开发三年，舒小小：专注前端开发三年，搭建个人博客，与大家一起学习</div>
            <Divider>社交账号</Divider>
            <Avatar size={ 28} icon={<GithubOutlined/>} className="account"></Avatar>
            <Avatar size={ 28} icon={<QqOutlined/>}className="account"></Avatar>
            <Avatar size={28} icon={<WechatOutlined/>} className="account"></Avatar>
        </div>
    )
}
export default Author