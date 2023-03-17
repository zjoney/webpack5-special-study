const { AsyncSeriesBailHook } = require('tapable');
const hook = new AsyncSeriesBailHook(['name']);



//只要其中一个监听的事件逻辑，内部有对应的值返回，那么就会直接执行最后的回调


hook.tap('first', (name) => {
    console.log('first', name);
    // return 不为 undefined 的值
    // return 'first return';
    /**
     * Console output:
     * 
     * first callAsync
     * end null first return
     */
})

hook.tapAsync('second', (name, callback) => {
    console.log('second', name);
    // callback 的第一个参数需要传入 null，表明没有错误；
    // 第二个参数需要传入不为 undefined 的值；
    // 这便是错误优先回调的标准格式。
    // callback(null, 'second return');
    /**
     * Console output:
     * 
     * first callAsync
     * second callAsync
     * end null second return
     */
    callback();
})

hook.tapPromise('third', (name, callback) => {
    console.log('third', name);
    // Promise 最终状态被置为 Fulfilled，并且值不为 undefined
    // return Promise.resolve('third return');
    /**
     * Console output:
     * 
     * first callAsync
     * second callAsync
     * third callAsync
     * end null third return
     */
    return Promise.resolve();
})

hook.tap('fourth', (name) => {
    console.log('fourth', name);
})

hook.callAsync('callAsync', (error, result) => {
    console.log('end', error, result);
});

// 使用 promise 方法触发事件，事件回调中也是用一样的方式来停止后续事件回调执行的；
// 区别主要在于处理错误和值的方式而已，这便是异步回调和 Promise 的不同之处了，
// 并不在本文探讨范围之内。
// const promise = hook.promise('promise');
// promise.then(value => {
//   console.log('value', value);
// }, reason => {
//   console.log('reason', reason);
// });