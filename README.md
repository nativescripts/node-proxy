# abort Toad

#### 为什么使用？
* 前端开发依赖后端环境
* 开发迭代因为环境原因delay
* 在家办公

#### 主要功能:
* `proxy代理`（使用本地静态文件开发）
* `shtml解析`（前端模板服务器）
* `mock server`  （模拟接口请求返回）

#### 如何使用？
* 修改app.js中`proxyUrl`的地址，指向代理服务器
* 修改app.js中`localPath`配置，指向本地静态文件
* 修改app.js中`mockList`的配置，用来拦截指定的请求
* 如果你希望使用mock服务，请在`mockData`中添加对应的返回内容
* 修改`mockData/mockdata.js` 
    * `key`值就是接口名
	* `caption`是接口说明
	* `data`是返回数据

#### 如何运行?

    $ git clone git@172.16.201.210:liwenqiang/toad.git
    $ cd src/
    $ npm install     //墙内使用cnpm安装指定插件
    //$ npm run test  测试模块是否正常安装
    $ npm run hot     //热加载启动

[老版本实现过程→](http://www.isjs.cn/?p=657)
