/*
 * @Author: your name
 * @Date: 2021-11-01 23:03:02
 * @LastEditTime: 2021-12-03 18:15:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ccit-webe:\2021年学习笔记\vue\vue-cil-day2\hello-world\vue.config.js
 */
module.exports={
    devServer:{
        port:3000,
        open:true,
        // proxy: {
        //     '/api': {
        //         // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        //         target: 'http:123.57.109.30:3006',
        //         // 允许跨域
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    lintOnSave:false,//关闭eslint的代码检查
}
//项目中没有webpack.config.js配置文件，因为vue用的是vue.config.js