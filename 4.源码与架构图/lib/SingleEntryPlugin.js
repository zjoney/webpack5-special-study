/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";
const SingleEntryDependency = require("./dependencies/SingleEntryDependency");

class SingleEntryPlugin {
	constructor(context, entry, name) {
		this.context = context;
		this.entry = entry;
		this.name = name;
	}

	apply(compiler) {
		//订阅了compilation阶段执行，目前还没有执行
		compiler.hooks.compilation.tap(
			"SingleEntryPlugin",
			(compilation, { normalModuleFactory }) => {
				//单文件依赖的处理是normalModuleFactory工厂对象
				compilation.dependencyFactories.set(
					SingleEntryDependency,
					normalModuleFactory
				);
			}
		);

		//订阅了mack阶段执行，目前还没有执行
		compiler.hooks.make.tapAsync(
			"SingleEntryPlugin",
			(compilation, callback) => {
				const { entry, name, context } = this;

				//单文件入口的依赖创建
				const dep = SingleEntryPlugin.createDependency(entry, name);

				//添加到对应的构建阶段，正式进入构建
				/**
				 * addEntry阶段触发第一批module的解析，通过entry入口文件index.js
				 * 一个依赖Dependence通过工厂方法 factory创建之后，可以生成对应的modue实例
				 *
				 * Dependence可以理解成为还没有被解析成为模块实例的依赖对象，比如入口index.js
				 * 首先通过createDependency生成SingleEntryDependency，在通过对应的工厂对象构建module
				 * 开始根据依赖执行构建
				 */
				compilation.addEntry(context, dep, name, callback);
			}
		);
	}

	static createDependency(entry, name) {
		const dep = new SingleEntryDependency(entry);
		dep.loc = name;
		return dep;
	}
}

module.exports = SingleEntryPlugin;
