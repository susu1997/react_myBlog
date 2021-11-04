/*
 * @Author: shuyang
 * @Date: 2021-11-04 21:41:59
 * @LastEditTime: 2021-11-04 22:38:03
 * @FilePath: \nextJs_Blog\react_myBlog\config\apiUrl.js
 */

let ipUrl = 'http://127.0.0.1:7001/default/'
let servicePath = {
    getArticleList:ipUrl +'getArticleList',//首页接口
    getArticleById: ipUrl + 'getArticleById/',//详细页接口
    getTypeInfo:ipUrl + 'getTypeInfo',//获得文章类别接口
    getListById:ipUrl + 'getListById/',//获得类别id 获得文章列表
}
export default servicePath