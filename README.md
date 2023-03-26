# 透析weback5-内部实现/透析weback5（1.内部实现）
## webpack5-special-study

1. webpack 内部模块机制 
    webpack 构建原理 tapable 
    tapable 构建流程管控 

2. 抽象语法树 
    状态机 、正则匹配 AST
    代码编译流程
    手写一个 
3. bundle 、bundleless
    tree shaking 

js  打包 组织代码 
webpack

es6 、ts ==> js
1. 资源处理
2. 语言编译 
3. 模块之间的组合

glup  webpack 
webpack ？？ 编译过程 import require 
webpack 模块引用路径 ==> 依赖 

webpack？？？ 做什么？？

1. 变量 方法 名称 冲突   模块(作用域)隔离  ==>作用域==> function(){} ==>闭包
2. 产生了依赖之后 ， 保证模块执行的顺序    数组


b.js 
var name='yideng'
export name


a.js
import {name} from 'react';

function getName() {
    console.log(name)
}


a ==(b\c)
b==> d 
c==>(e/f)

对于webpack 模块的执行顺序 
深度优先的  函数执行的过程  ==> 深度优先遍历的过程



webpack 
    config  ==> 

1. 初始化配置 
    内部的默认配置 合并 用户传入的配置 ==> webpack config
    1. 获取用户配置  ？？？  电话本     ()=>{ 获取用户配置}
    2. 构建默认配置 ？？ 电话本    ()=>{构建默认配置}
    3. 合并配置  ？？？  电话本  ()=>{构建默认配置}
2.  初始化 文件读写 分析路径 配置webpack 

webpack 内部 管理构建流程 

不同的阶段 不通的事情 
通知系统

[  ]

tapable 发出通知  



总结性 webpack 内部 插件  tapable

 管理整个webpack的执行流程
 1. 不通的电话 不通的处理逻辑  串行 异步 并行 
 2. 不通阶段 执行不通通知 
 3. 执行任务 
 tap ==》订阅对应阶段的过程 
 call ==> 调动对应的阶段的所有执行 
    编译  性能和控制流程



class asasas{
    apply(compiler){
        compiler.hook.tap({},()=>{
            ...
        })
    }
}


