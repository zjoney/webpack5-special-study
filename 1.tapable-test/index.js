const {
    //给你不同类型的电话本 
    SyncHook,
    SyncBailHook, //return 返回 直接结束
    SyncWaterfallHook,//流式串行
    SyncLoopHook,//循环逻辑
    AsyncParallelHook, //异步并行执行回调
    AsyncParallelBailHook,//异步并行执行回调，return返回 直接结束
    AsyncSeriesHook,//异步按顺序执行
    AsyncSeriesBailHook,//异步按顺序执行 return 返回 直接结束
    AsyncSeriesWaterfallHook, //异步按顺序执行 参数传递到下一个
    AsyncHook
} = require('tapable')


let hooks = new SyncHook(); //获取配置 

let init = new SyncHook(); //初始化

let mounted = new SyncHook();//挂载

let update = new SyncHook(); //更新






// init.tap("tap", () => {
//     console.log('init')
// });


// init.call();

// Use the tap method to add a consument
hooks.tap("WarningLampPlugin", () => {
    console.log('brake plugin')
});

hooks.tap({
    name: 'warpPlufin',
    stage: -1//控制顺序，正负数表示执行前后次序
}, () => {
    console.log('brake plugin1')
});

hooks.tap({
    name: 'warpPlufin2',
    before: 'warpPlufin'//表示改任务需要在这个任务之前
}, () => {
    console.log('brake plugin12')
});


// //打电话
hooks.call();






// let hook1 = new SyncHook(['name']);//只使用了传入参数的长度

// //可以来注册拦截器，来控制事件注册、调用、以及事件的触发
// hook1.intercept({
//     context: true, //控制上下文，通过上下文来控制传入
//     // 注册时执行
//     register(tap) {
//         console.log('register', tap);
//         return tap;
//     },
//     // 触发事件时执行
//     call(...args) {
//         console.log('call', args);
//     },
//     // 在 call 拦截器之后执行
//     loop(...args) {
//         console.log('loop', args);
//     },
//     // 事件回调调用前执行
//     tap(context, tap) {
//         context.firstChange = true
//         console.log('tap', tap, context);

//     },
// })

// //实例化钩子的时候，参数有多长，就只能接受多少数据
// hook1.tap({
//     name: 'hook1',
//     context: true
// }, (context, arg) => {
//     //context上下文 控制钩子之前的传参数传递
//     console.log(arg, context)
// })

// hook1.call('on')


// //异步钩子 需要传入回调函数在触发的时候，这个是串行执行的逻辑
// let asynchook = new AsyncSeriesHook(['hook']);



// //在有回调函数传入的时候，如果给回调传入了错误信息，那么对于其他的回调就不会执行
// asynchook.tapAsync('name', (name, callback) => {
//     //此处callback，已经被重写
//     console.log(name)
//     callback()
// });
// asynchook.tapAsync('name1', (name, callback) => {
//     //此处callback，已经被重写
//     console.log(name)
//     callback('有错误');
// })
// asynchook.callAsync('来吧', (error) => {
//     console.log('这是一个回调函数', error)
// })
