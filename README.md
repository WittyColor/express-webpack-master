# node-express-redis

## 描述

> 本人做的一个使用node的Express框架，结合redis的一个小项目，后面会不断的更新和完善。

- 项目相关文件夹
  - bin：node启动
  - client：js和sass文件
  - config：各个不同环境的配置文件（beta：测试环境；prod：生产环境）
  - webpack_config：webpack的配置文件
  - node_modules：node依赖的包
  - public：外部访问的文件夹，如js、css、images。这里的js和css是由client中的文件编译而成的。
  - routes：路由文件夹（用来处理浏览器请求，并返回相关数据给浏览器）
  - requests：用来请求Java服务器的数据
  - utils：工具
  - views：存放jade文件（由node用数据渲染生成HTML）
  - app.js:入口文件

## Build Setup


``` bash
# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:2000
npm run start

## License

MIT
