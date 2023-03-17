/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const ExternalModuleFactoryPlugin = require("./ExternalModuleFactoryPlugin");

class ExternalsPlugin {
	constructor(type, externals) {
		this.type = type;
		this.externals = externals;
	}
	apply(compiler) {
		//订阅compile，内部初始化externals对应的配置，需要构建的module处理逻辑
		compiler.hooks.compile.tap("ExternalsPlugin", ({ normalModuleFactory }) => {
			new ExternalModuleFactoryPlugin(this.type, this.externals).apply(
				normalModuleFactory
			);
		});
	}
}

module.exports = ExternalsPlugin;
