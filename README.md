# Technology Stack
  1. React@16.6.3
  2. React-redux@5.1.1
  3. React-router@4.3.1
  4. Webpack@4.25.1
  5. antd@3.10.8
  6. axios@0.18.0

## Project Start
    
      git clone https://github.com/lewisYe/react-cli.git

      npm install
      
      npm start 

## Quick Build

使用 [lewisye-react](https://github.com/lewisYe/generator-react)快速搭建模板

## Project Structure
```txt
.
├── README.md
├── config // webpack 配置
│   ├── webpack.config.dev.js //开发环境
│   └── webpack.config.pro.js //生产环境
├── dist //打包之后文件
│   ├── app.21cd9856d748e6036297.css
│   ├── app.js
│   ├── index.html
│   └── manifest.21cd9856d748e6036297.js
├── package-lock.json
├── package.json
├── public
│   └── index.html //主文件
├── server.js //本地开发web服务器node启动文件，也用于热更新
└── src // 源文件目录
    ├── App.js // 应用入口
    ├── components // 公共组件
    ├── index.css
    ├── index.js //入口文件
    ├── layouts // 布局
    │   ├── login // 登录页
    │   │   ├── index.js
    │   │   └── index.scss
    │   └── main // 主页面
    │       ├── index.js
    │       └── index.scss
    ├── locales // 本地静态
    ├── pages // 业务页面
    │   └── test.js
    ├── reducers 
    │   ├── index.js
    │   └── test.js
    ├── routes // 路由
    │   └── index.js
    ├── sagas
    │   ├── index.js
    │   └── test.js
    ├── services // 请求库
    │   └── request.js
    ├── static // 静态文件
    │   └── logo.png
    ├── store
    │   └── index.js
    └── util.js //工具函数

```


