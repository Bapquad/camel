function BaiCaDatNuoc(root, factory) 
{
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else 
	{
		var a = factory();
		for(var i in a) 
		{
			(typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	}
}

function Export(modules) 
{
	var installedModules = {};

	// The require function
	function __webpack_require__(moduleId) {

		// Check if module is in cache
		if(installedModules[moduleId])
			return installedModules[moduleId].exports;

		// Create a new module (and put it into the cache)
		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: false
		};

		// Execute the module function
		modules[moduleId].call(module.exports, module, __webpack_require__);

		// Flag the module as loaded
		module.loaded = true;

		// Return the exports of the module
		return module.exports;
	}

	// Load entry module and return exports
	return __webpack_require__(0);
}

function Factory() 
{
	return (function(modules) {Export(modules)}) (
		[
			function(module, __webpack_require__) 
			{

			},
			function(module) {},
			function(module, __webpack_require__) {},
			function(module, __webpack_require__) {},
			function(module, __webpack_require__) {},
			function(module, __webpack_require__) {},
			function(module, __webpack_require__) {},
			function(module, __webpack_require__) {},
			function(module, __webpack_require__) {},
			function(module, __webpack_require__) {}
		]
	);
}

BaiCaDatNuoc(this, Factory);