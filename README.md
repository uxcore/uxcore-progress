## uxcore-progress

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-progress.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-progress
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-progress.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-progress
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-progress.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-progress?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-progress.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-progress
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-progress.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-progress#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-progress.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-progress.svg
[sauce-url]: https://saucelabs.com/u/uxcore-progress


#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-progress
$ cd uxcore-progress
$ npm install
$ npm start
```

## Usage
```js
import {Line, Circle} from 'uxcore-progress';
ReactDOM.render(<Line percent={30} />, target);
ReactDOM.render(<Circle status="active" />, target);
```

## demo
http://uxco.re/components/progress/

## API

## Props

### Line

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|percent | 百分比 | number | 0 | |
|status | 状态，有两个值normal、exception、active三种状态 | string | normal | |
|strokeWidth | 进度条线的宽度，单位是px | number | 10 | |
|showInfo | 是否显示进度数值和状态图标 | bool | true | |

### Circle

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|percent | 百分比 | number | 0 | |
|status | 状态，有两个值normal、exception、active三种状态 | string | normal | |
|strokeWidth | 进度条线的宽度，单位是px | number | 6 | |
|showInfo | 是否显示进度数值和状态图标 | bool | true | |
|size | 尺寸，相当于直径 | number | 156 | |