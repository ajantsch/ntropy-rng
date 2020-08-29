/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: getRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./src/services/index.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ \"./src/util/index.ts\");\n\n\n\n\n\nvar getRandom = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var rnd;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            res.type(\"json\");\n\n            try {\n              rnd = Object(_services__WEBPACK_IMPORTED_MODULE_2__[\"random\"])();\n              res.status(200);\n              res.send(rnd);\n            } catch (err) {\n              _util__WEBPACK_IMPORTED_MODULE_3__[\"logger\"].error(err);\n              res.status(500);\n              res.send(JSON.stringify(err));\n            } finally {\n              res.end();\n            }\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getRandom(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2luZGV4LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC50cz85ZjgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIjtcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWxcIjtcblxudmFyIGdldFJhbmRvbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShyZXEsIHJlcykge1xuICAgIHZhciBybmQ7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJlcy50eXBlKFwianNvblwiKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcm5kID0gcmFuZG9tKCk7XG4gICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICAgICAgICAgICAgcmVzLnNlbmQocm5kKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApO1xuICAgICAgICAgICAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHJlcy5lbmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gZ2V0UmFuZG9tKF94LCBfeDIpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuXG5leHBvcnQgeyBnZXRSYW5kb20gfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/index.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./src/server.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util/index.ts\");\n\n\nvar _process$env = {\"npm_package_devDependencies__types_compression\":\"^1.7.0\",\"npm_package_dependencies_prettier\":\"^2.1.1\",\"npm_package_dependencies__babel_plugin_transform_runtime\":\"^7.11.0\",\"npm_package_dependencies_eslint_plugin_import\":\"^2.22.0\",\"npm_package_dependencies__babel_preset_typescript\":\"^7.10.4\",\"npm_package_dependencies__babel_node\":\"^7.10.5\",\"OPTIMIZED_BUILD\":\"false\",\"npm_config_version_commit_hooks\":\"true\",\"npm_config_user_agent\":\"yarn/1.22.5 npm/? node/v14.9.0 linux x64\",\"NODE_VERSION\":\"14.9.0\",\"npm_package_dependencies__typescript_eslint_eslint_plugin\":\"^3.10.1\",\"npm_config_bin_links\":\"true\",\"HOSTNAME\":\"ac4bdf9891a2\",\"YARN_VERSION\":\"1.22.5\",\"npm_node_execpath\":\"/usr/local/bin/node\",\"npm_package_dependencies__babel_core\":\"^7.11.4\",\"npm_package_scripts_start_dev\":\"env NODE_ENV=local yarn build\",\"npm_config_init_version\":\"1.0.0\",\"SHLVL\":\"4\",\"npm_package_devDependencies__types_express\":\"^4.17.7\",\"npm_package_dependencies_webpack_node_externals\":\"^2.5.2\",\"npm_package_dependencies_clean_webpack_plugin\":\"^3.0.0\",\"PORT\":\"5000\",\"HOME\":\"/root\",\"npm_package_dependencies_express_rate_limit\":\"^5.1.3\",\"npm_config_init_license\":\"MIT\",\"YARN_WRAP_OUTPUT\":\"false\",\"npm_config_version_tag_prefix\":\"v\",\"npm_package_dependencies_webpack\":\"^4.44.1\",\"npm_package_dependencies_eslint\":\"^7.7.0\",\"npm_package_dependencies_dotenv\":\"^8.2.0\",\"npm_package_dependencies_compression\":\"^1.7.4\",\"npm_package_devDependencies__types_winston\":\"^2.4.4\",\"npm_package_dependencies_colors\":\"^1.4.0\",\"npm_package_dependencies_express\":\"^4.17.1\",\"npm_package_private\":\"true\",\"npm_package_devDependencies__types_cors\":\"^2.8.7\",\"npm_package_dependencies_fork_ts_checker_webpack_plugin\":\"^5.1.0\",\"npm_package_scripts_lint\":\"eslint --ext .ts,.js src\",\"npm_config_registry\":\"https://registry.yarnpkg.com\",\"TERM\":\"xterm\",\"npm_package_dependencies_eslint_plugin_prettier\":\"^3.1.4\",\"npm_package_dependencies_core_js\":\"^3.6.5\",\"npm_package_scripts_start\":\"node build\",\"npm_config_ignore_scripts\":\"\",\"npm_config_version\":\"1.22.5\",\"npm_package_dependencies__babel_plugin_transform_regenerator\":\"^7.10.4\",\"npm_package_author_email\":\"andreas.jantschnig@gmail.com\",\"PATH\":\"/tmp/yarn--1598722533169-0.657262082605879:/usr/src/app/node_modules/.bin:/usr/local/share/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\",\"NODE\":\"/usr/local/bin/node\",\"npm_package_name\":\"ntropy-rng-service\",\"npm_package_devDependencies__types_helmet\":\"^0.0.48\",\"npm_package_dependencies_winston\":\"^3.3.3\",\"npm_lifecycle_script\":\"webpack\",\"npm_package_scripts_start_watch\":\"nodemon build\",\"npm_package_main\":\"index.js\",\"npm_config_version_git_message\":\"v%s\",\"npm_lifecycle_event\":\"build\",\"npm_package_dependencies_webpack_cli\":\"^3.3.12\",\"npm_package_version\":\"1.0.0\",\"AWS_REGION\":\"eu-central-1\",\"npm_config_argv\":\"{\\\"remain\\\":[],\\\"cooked\\\":[\\\"run\\\",\\\"build\\\"],\\\"original\\\":[\\\"build\\\"]}\",\"npm_package_dependencies_cors\":\"^2.8.5\",\"npm_package_scripts_build\":\"webpack\",\"npm_package_dependencies_nodemon\":\"^2.0.4\",\"npm_config_version_git_tag\":\"true\",\"npm_config_version_git_sign\":\"\",\"npm_package_dependencies__typescript_eslint_parser\":\"^3.10.1\",\"npm_package_license\":\"MIT\",\"npm_config_strict_ssl\":\"true\",\"npm_package_dependencies_eslint_config_prettier\":\"^6.11.0\",\"PWD\":\"/usr/src/app\",\"npm_execpath\":\"/opt/yarn-v1.22.5/bin/yarn.js\",\"npm_package_dependencies_helmet\":\"^4.1.0\",\"npm_package_dependencies_terser_webpack_plugin\":\"^4.1.0\",\"npm_package_dependencies_eslint_loader\":\"^4.0.2\",\"npm_package_author_name\":\"Andreas Jantschnnig\",\"npm_package_devDependencies__types_express_rate_limit\":\"^5.1.0\",\"npm_config_save_prefix\":\"^\",\"npm_config_ignore_optional\":\"\",\"npm_config_scripts_prepend_node_path\":\"true\",\"NODE_ENV\":\"local\",\"npm_package_dependencies_typescript\":\"^4.0.2\",\"npm_package_dependencies_babel_loader\":\"^8.1.0\",\"INIT_CWD\":\"/usr/src/app\",\"npm_package_dependencies__babel_preset_env\":\"^7.11.0\",\"npm_package_scripts_lint_apply\":\"eslint --ext .ts,.js src --fix\"},\n    NODE_ENV = _process$env.NODE_ENV,\n    PORT = _process$env.PORT;\nvar port = PORT || 5000;\n_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(port, function () {\n  _util__WEBPACK_IMPORTED_MODULE_1__[\"logger\"].info(\"ntropy service is running on http://localhost:\".concat(port, \" in \").concat(NODE_ENV, \" mode\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/Y2E4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VydmVyIGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4vdXRpbFwiO1xudmFyIF9wcm9jZXNzJGVudiA9IHByb2Nlc3MuZW52LFxuICAgIE5PREVfRU5WID0gX3Byb2Nlc3MkZW52Lk5PREVfRU5WLFxuICAgIFBPUlQgPSBfcHJvY2VzcyRlbnYuUE9SVDtcbnZhciBwb3J0ID0gUE9SVCB8fCA1MDAwO1xuc2VydmVyLmxpc3Rlbihwb3J0LCBmdW5jdGlvbiAoKSB7XG4gIGxvZ2dlci5pbmZvKFwibnRyb3B5IHNlcnZpY2UgaXMgcnVubmluZyBvbiBodHRwOi8vbG9jYWxob3N0OlwiLmNvbmNhdChwb3J0LCBcIiBpbiBcIikuY29uY2F0KE5PREVfRU5WLCBcIiBtb2RlXCIpKTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/routers/index.ts":
/*!******************************!*\
  !*** ./src/routers/index.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar DefaultRouter = function DefaultRouter() {\n  var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router({\n    mergeParams: true\n  });\n  router.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\n  router.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n    extended: true\n  }));\n  router.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultRouter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVycy9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL2luZGV4LnRzP2Y0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcblxudmFyIERlZmF1bHRSb3V0ZXIgPSBmdW5jdGlvbiBEZWZhdWx0Um91dGVyKCkge1xuICB2YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoe1xuICAgIG1lcmdlUGFyYW1zOiB0cnVlXG4gIH0pO1xuICByb3V0ZXIudXNlKGNvcnMoKSk7XG4gIHJvdXRlci51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgICBleHRlbmRlZDogdHJ1ZVxuICB9KSk7XG4gIHJvdXRlci51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICByZXR1cm4gcm91dGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdFJvdXRlcjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routers/index.ts\n");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routers */ \"./src/routers/index.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api/index.ts\");\n\n\nvar router = Object(_routers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nrouter.get(\"/\", _api__WEBPACK_IMPORTED_MODULE_1__[\"getRandom\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy50cz80NTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWZhdWx0Um91dGVyIGZyb20gXCIuL3JvdXRlcnNcIjtcbmltcG9ydCB7IGdldFJhbmRvbSB9IGZyb20gXCIuL2FwaVwiO1xudmFyIHJvdXRlciA9IERlZmF1bHRSb3V0ZXIoKTtcbnJvdXRlci5nZXQoXCIvXCIsIGdldFJhbmRvbSk7XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes.ts\n");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-rate-limit */ \"express-rate-limit\");\n/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"./src/routes.ts\");\n\n\n\n\n\n\nvar apiLimiter = express_rate_limit__WEBPACK_IMPORTED_MODULE_4___default()({\n  windowMs: 15 * 60 * 1000,\n  // 15 minutes\n  max: 1000,\n  message: \"API rate limit exceeded!\"\n});\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.set(\"trust proxy\", 1);\napp.use(\"/\", apiLimiter);\napp.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_0___default()());\napp.use(\"/health\", function (_req, res) {\n  res.status(200);\n  res.type(\"json\");\n  res.send({\n    status: \"OK\"\n  });\n  res.end();\n});\napp.use(\"/\", _routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar server = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(app);\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cz80YTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IGhlbG1ldCBmcm9tIFwiaGVsbWV0XCI7XG5pbXBvcnQgUmF0ZUxpbWl0IGZyb20gXCJleHByZXNzLXJhdGUtbGltaXRcIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCI7XG52YXIgYXBpTGltaXRlciA9IFJhdGVMaW1pdCh7XG4gIHdpbmRvd01zOiAxNSAqIDYwICogMTAwMCxcbiAgLy8gMTUgbWludXRlc1xuICBtYXg6IDEwMDAsXG4gIG1lc3NhZ2U6IFwiQVBJIHJhdGUgbGltaXQgZXhjZWVkZWQhXCJcbn0pO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcbmFwcC5zZXQoXCJ0cnVzdCBwcm94eVwiLCAxKTtcbmFwcC51c2UoXCIvXCIsIGFwaUxpbWl0ZXIpO1xuYXBwLnVzZShoZWxtZXQoKSk7XG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShcIi9oZWFsdGhcIiwgZnVuY3Rpb24gKF9yZXEsIHJlcykge1xuICByZXMuc3RhdHVzKDIwMCk7XG4gIHJlcy50eXBlKFwianNvblwiKTtcbiAgcmVzLnNlbmQoe1xuICAgIHN0YXR1czogXCJPS1wiXG4gIH0pO1xuICByZXMuZW5kKCk7XG59KTtcbmFwcC51c2UoXCIvXCIsIHJvdXRlcyk7XG52YXIgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server.ts\n");

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng */ \"./src/services/rng.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return _rng__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5kZXgudHM/MWE4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmFuZG9tIGZyb20gXCIuL3JuZ1wiO1xuZXhwb3J0IHsgcmFuZG9tIH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/index.ts\n");

/***/ }),

/***/ "./src/services/rng.ts":
/*!*****************************!*\
  !*** ./src/services/rng.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar random = function random() {\n  return Math.random();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (random);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcm5nLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3JuZy50cz81ZWVkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByYW5kb20gPSBmdW5jdGlvbiByYW5kb20oKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/rng.ts\n");

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! exports provided: logger, randomString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomString\", function() { return randomString; });\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ \"./src/util/logger.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"logger\", function() { return _logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\nfunction randomString(length, chars) {\n  var mask = \"\";\n  if (chars.indexOf(\"a\") > -1) mask += \"abcdefghijklmnopqrstuvwxyz\";\n  if (chars.indexOf(\"A\") > -1) mask += \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n  if (chars.indexOf(\"#\") > -1) mask += \"0123456789\";\n  if (chars.indexOf(\"!\") > -1) mask += \"~`!@#$%^&*()_+-={}[]:\\\";'<>?,./|\\\\\";\n  var result = \"\";\n\n  for (var i = length; i > 0; --i) {\n    result += mask[Math.floor(Math.random() * mask.length)];\n  }\n\n  return result;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LnRzPzAxZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi9sb2dnZXJcIjtcblxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aCwgY2hhcnMpIHtcbiAgdmFyIG1hc2sgPSBcIlwiO1xuICBpZiAoY2hhcnMuaW5kZXhPZihcImFcIikgPiAtMSkgbWFzayArPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XG4gIGlmIChjaGFycy5pbmRleE9mKFwiQVwiKSA+IC0xKSBtYXNrICs9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbiAgaWYgKGNoYXJzLmluZGV4T2YoXCIjXCIpID4gLTEpIG1hc2sgKz0gXCIwMTIzNDU2Nzg5XCI7XG4gIGlmIChjaGFycy5pbmRleE9mKFwiIVwiKSA+IC0xKSBtYXNrICs9IFwifmAhQCMkJV4mKigpXystPXt9W106XFxcIjsnPD4/LC4vfFxcXFxcIjtcbiAgdmFyIHJlc3VsdCA9IFwiXCI7XG5cbiAgZm9yICh2YXIgaSA9IGxlbmd0aDsgaSA+IDA7IC0taSkge1xuICAgIHJlc3VsdCArPSBtYXNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1hc2subGVuZ3RoKV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgeyBsb2dnZXIsIHJhbmRvbVN0cmluZyB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util/index.ts\n");

/***/ }),

/***/ "./src/util/logger.ts":
/*!****************************!*\
  !*** ./src/util/logger.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n\nvar logger = winston__WEBPACK_IMPORTED_MODULE_0___default.a.createLogger({\n  level: {\"npm_package_devDependencies__types_compression\":\"^1.7.0\",\"npm_package_dependencies_prettier\":\"^2.1.1\",\"npm_package_dependencies__babel_plugin_transform_runtime\":\"^7.11.0\",\"npm_package_dependencies_eslint_plugin_import\":\"^2.22.0\",\"npm_package_dependencies__babel_preset_typescript\":\"^7.10.4\",\"npm_package_dependencies__babel_node\":\"^7.10.5\",\"OPTIMIZED_BUILD\":\"false\",\"npm_config_version_commit_hooks\":\"true\",\"npm_config_user_agent\":\"yarn/1.22.5 npm/? node/v14.9.0 linux x64\",\"NODE_VERSION\":\"14.9.0\",\"npm_package_dependencies__typescript_eslint_eslint_plugin\":\"^3.10.1\",\"npm_config_bin_links\":\"true\",\"HOSTNAME\":\"ac4bdf9891a2\",\"YARN_VERSION\":\"1.22.5\",\"npm_node_execpath\":\"/usr/local/bin/node\",\"npm_package_dependencies__babel_core\":\"^7.11.4\",\"npm_package_scripts_start_dev\":\"env NODE_ENV=local yarn build\",\"npm_config_init_version\":\"1.0.0\",\"SHLVL\":\"4\",\"npm_package_devDependencies__types_express\":\"^4.17.7\",\"npm_package_dependencies_webpack_node_externals\":\"^2.5.2\",\"npm_package_dependencies_clean_webpack_plugin\":\"^3.0.0\",\"PORT\":\"5000\",\"HOME\":\"/root\",\"npm_package_dependencies_express_rate_limit\":\"^5.1.3\",\"npm_config_init_license\":\"MIT\",\"YARN_WRAP_OUTPUT\":\"false\",\"npm_config_version_tag_prefix\":\"v\",\"npm_package_dependencies_webpack\":\"^4.44.1\",\"npm_package_dependencies_eslint\":\"^7.7.0\",\"npm_package_dependencies_dotenv\":\"^8.2.0\",\"npm_package_dependencies_compression\":\"^1.7.4\",\"npm_package_devDependencies__types_winston\":\"^2.4.4\",\"npm_package_dependencies_colors\":\"^1.4.0\",\"npm_package_dependencies_express\":\"^4.17.1\",\"npm_package_private\":\"true\",\"npm_package_devDependencies__types_cors\":\"^2.8.7\",\"npm_package_dependencies_fork_ts_checker_webpack_plugin\":\"^5.1.0\",\"npm_package_scripts_lint\":\"eslint --ext .ts,.js src\",\"npm_config_registry\":\"https://registry.yarnpkg.com\",\"TERM\":\"xterm\",\"npm_package_dependencies_eslint_plugin_prettier\":\"^3.1.4\",\"npm_package_dependencies_core_js\":\"^3.6.5\",\"npm_package_scripts_start\":\"node build\",\"npm_config_ignore_scripts\":\"\",\"npm_config_version\":\"1.22.5\",\"npm_package_dependencies__babel_plugin_transform_regenerator\":\"^7.10.4\",\"npm_package_author_email\":\"andreas.jantschnig@gmail.com\",\"PATH\":\"/tmp/yarn--1598722533169-0.657262082605879:/usr/src/app/node_modules/.bin:/usr/local/share/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\",\"NODE\":\"/usr/local/bin/node\",\"npm_package_name\":\"ntropy-rng-service\",\"npm_package_devDependencies__types_helmet\":\"^0.0.48\",\"npm_package_dependencies_winston\":\"^3.3.3\",\"npm_lifecycle_script\":\"webpack\",\"npm_package_scripts_start_watch\":\"nodemon build\",\"npm_package_main\":\"index.js\",\"npm_config_version_git_message\":\"v%s\",\"npm_lifecycle_event\":\"build\",\"npm_package_dependencies_webpack_cli\":\"^3.3.12\",\"npm_package_version\":\"1.0.0\",\"AWS_REGION\":\"eu-central-1\",\"npm_config_argv\":\"{\\\"remain\\\":[],\\\"cooked\\\":[\\\"run\\\",\\\"build\\\"],\\\"original\\\":[\\\"build\\\"]}\",\"npm_package_dependencies_cors\":\"^2.8.5\",\"npm_package_scripts_build\":\"webpack\",\"npm_package_dependencies_nodemon\":\"^2.0.4\",\"npm_config_version_git_tag\":\"true\",\"npm_config_version_git_sign\":\"\",\"npm_package_dependencies__typescript_eslint_parser\":\"^3.10.1\",\"npm_package_license\":\"MIT\",\"npm_config_strict_ssl\":\"true\",\"npm_package_dependencies_eslint_config_prettier\":\"^6.11.0\",\"PWD\":\"/usr/src/app\",\"npm_execpath\":\"/opt/yarn-v1.22.5/bin/yarn.js\",\"npm_package_dependencies_helmet\":\"^4.1.0\",\"npm_package_dependencies_terser_webpack_plugin\":\"^4.1.0\",\"npm_package_dependencies_eslint_loader\":\"^4.0.2\",\"npm_package_author_name\":\"Andreas Jantschnnig\",\"npm_package_devDependencies__types_express_rate_limit\":\"^5.1.0\",\"npm_config_save_prefix\":\"^\",\"npm_config_ignore_optional\":\"\",\"npm_config_scripts_prepend_node_path\":\"true\",\"NODE_ENV\":\"local\",\"npm_package_dependencies_typescript\":\"^4.0.2\",\"npm_package_dependencies_babel_loader\":\"^8.1.0\",\"INIT_CWD\":\"/usr/src/app\",\"npm_package_dependencies__babel_preset_env\":\"^7.11.0\",\"npm_package_scripts_lint_apply\":\"eslint --ext .ts,.js src --fix\"}.LOGGING_LEVEL || \"info\",\n  format: winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.simple(),\n  transports: [new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Console()]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (logger);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9sb2dnZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIudHM/YWQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2luc3RvbiBmcm9tIFwid2luc3RvblwiO1xudmFyIGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHtcbiAgbGV2ZWw6IHByb2Nlc3MuZW52LkxPR0dJTkdfTEVWRUwgfHwgXCJpbmZvXCIsXG4gIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuc2ltcGxlKCksXG4gIHRyYW5zcG9ydHM6IFtuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoKV1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/logger.ts\n");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-rate-limit");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });