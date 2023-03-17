
//module 厂库
(function (modules) {
    /**
    1.按照顺序执行模块 
    2.存值
    3. 取值
    */
    var installedModules = {};//存值
    function require(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId]
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,//是否执行过
            exports: {}//当前模块存的值
        };
        modules[moduleId].call(module.exports, module, require);
        module.l = true;
        return module.exports;
    }

    return require(0)
})
    ([function (module, require) {
        //a.js
        //import {name} from 'b.js';
        var name = require(1);
        function getName() {
            console.log(name)
        }
        getName();
    }, function (module, require) {
        //b.js 
        var name = 'yideng'
        //export name
        module.exports = name
    }])
