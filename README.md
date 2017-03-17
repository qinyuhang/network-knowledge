#工具：
curl || Paw

Charles || Surge || Wireshark || nmap

#储备知识
TCP/IP

HTTP

HTTPS

#提纲
网络原理

网络状况

网络安全

RESTful API

#课程一 知识点讲解
当你在浏览器输入地址到浏览器渲染页面这段时间里面发生了什么？

TCP UDP 原理和对比

截取和加密

HTTP和HTTPS

代理与反向代理

我们如何设计 web 和 API (RESTful)

#课程一课后作业
使用 Github API 抓去你的网络关系，并且通过图形化显示出来

使用 twitter API 调取你的timeline

#课程二 实际操作
实际操作一下 自建websocket echoclient／ C or js

需要准备材料 Nodejs环境，了解nodejs能够用来做websocket的模块，查看文档，写出示范代码。

实际操作一下 webbench 发起大量http请求 发起大量https请求

自行编译webbench 或者使用curl脚本编程，发送大量http请求

实际操作一下 实际操作一下 截取http 和 https 请求

给手机添加代理设置，或者创建一个Wi-Fi，然后使用 Charles 或者 Surge 来截取用户的 HTTP 请求，或者使用MITM来攻击，或者截取到URL再使用Paw||curl来进行重放攻击

现有API探秘 GitHub API 和 twitter API Uber API

#课程二课后作业

#考试项目
考生自行构建webserver，实现一个带有校验的webapi，使用curl来调用webapi，并且进行调用用户检测，如果用户有恶意调用，超过一定次数后执行IP Ban
