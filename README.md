---

## uxcore-progress [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-progress.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-progress) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-progress.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-progress#info=devDependencies)

## TL;DR

uxcore-progress ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-progress
$ cd uxcore-progress
$ npm install
$ gulp server
```

## Usage
```js
let Progress = require('uxcore-progress');
ReactDOM.render(<Progress percent={30} />, target);
```

## demo
http://uxcore.github.io/uxcore/components/progress/

## API

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|percent | 百分比 | number | 0 | |
|status | 状态，有两个值normal、exception、active三种状态 | string | normal | |
|strokeWidth | 进度条线的宽度，单位是px | number | 1 | |
|showInfo | 是否显示进度数值和状态图标 | bool | true | |
