# Technology Stack
  1. react@16.6.3
  2. react-redux@5.1.1
  3. react-router@4.3.1
  4. webpack@4.25.1
  5. antd@3.10.8
  6. axios@0.18.0

## Project Start
    
    在目标目录clone项目  git clone https://github.com/lewisYe/react-cli.git

    进入项目 cd react-cli 

    安装依赖 npm install

    项目启动 npm start 

## Quick Build

使用 [lewisye-react](https://github.com/lewisYe/generator-react) 快速搭建模板

## Project Structure
```txt
.
├── README.md
├── config
│   ├── webpack.config.dev.js // 开发环境配置
│   └── webpack.config.pro.js // 生成环境配置
├── dist // 打包之后的输出路径
│   ├── assets
│   │   ├── 0.3833f0bba653993cb1a3.css
│   │   ├── 1.3833f0bba653993cb1a3.css
│   │   ├── 1.3833f0bba653993cb1a3.js
│   │   ├── 2.3833f0bba653993cb1a3.css
│   │   ├── 4.3833f0bba653993cb1a3.css
│   │   ├── 4.3833f0bba653993cb1a3.js
│   │   ├── 5.3833f0bba653993cb1a3.css
│   │   ├── 5.3833f0bba653993cb1a3.js
│   │   ├── 6.3833f0bba653993cb1a3.css
│   │   ├── 6.3833f0bba653993cb1a3.js
│   │   ├── app.3833f0bba653993cb1a3.js
│   │   ├── manifest.3833f0bba653993cb1a3.js
│   │   └── vendors.3833f0bba653993cb1a3.js
│   ├── images
│   │   └── login.acd5515ea81f9d58d1cfd7df1ed2a614.png
│   └── index.html
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── server.js // 开发启动配置
└── src
    ├── App.js
    ├── components // 组件库
    │   ├── ErrorBoundary
    │   │   └── index.js
    │   ├── IconSvg
    │   │   └── index.js
    │   └── Spin
    │       ├── index.js
    │       └── index.less
    ├── index.css
    ├── index.js
    ├── layouts // 通用布局
    │   ├── login
    │   │   ├── index.js
    │   │   └── index.less
    │   └── main
    │       ├── index.js
    │       └── index.less
    ├── reducers
    │   ├── index.js
    │   └── template.js
    ├── routes //路由配置
    │   └── index.js
    ├── sagas
    │   ├── index.js
    │   └── template.js
    ├── services
    │   └── request.js // 请求库
    ├── static // 本地静态文件
    │   ├── images
    │   │   └── logo.png
    │   └── svgs
    │       └── airport.svg
    ├── store
    │   └── index.js
    ├── utils //工具库
    │   ├── constant.js // 常量
    │   ├── importSvg.js // 引入svg
    │   ├── locales.js // 文案
    │   ├── promiseBindDispatch.js // promise包裹dispatch
    │   ├── regs.js // 通用正则
    │   └── routeWithSubRoutes.js // 路由
    └── views // ui页面
        └── template
            ├── index.js
            └── index.less

```


