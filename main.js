/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n  background-color: black;\n  font-family: Helvetica, Arial, sans-serif;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    \n    display: grid;\n    \n    grid-template-columns: 0.5fr 6fr 0.5fr;\n    grid-template-rows: 0.2fr 10fr 1fr;\n}\n\nheader {\n    /* border: 2px solid rgb(245 197 25); */\n\n    font-size: 0.9rem;\n    font-weight: bold;\n\n    background-color: #121212;\n    max-height: 60px;\n\n    grid-area: 1 / 1 / 2 / -1;\n\n    display: flex;\n    justify-content: center;\n}\n\n.nav-inside-header {\n    /* border: 2px solid deeppink; */\n\n    min-width: 85%;\n    height: 60px;\n\n    display: flex;\n}\n\nul {\n    width: 100%;\n\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    align-items: center;\n\n}\n\nli {\n    /* border: 1px solid aqua; */\n\n    list-style-type: none;\n    margin: 6px;\n}\n\n/* CREATE 'btn' utility class and put cursor:pointer ONLY ONCE */\n.logo-container {\n    cursor: pointer;\n}\n\n.menu-container {\n    display: flex;\n    border-radius: 4px;\n    padding: 4px 10px;\n    margin: 0 6px;\n\n    cursor: pointer;\n}\n\n.menu-container:hover {\n    background-color: rgba(128, 128, 128, 0.24);\n}\n\n.menu-icon {\n    /* border: 1px solid red; */\n    \n    width: fit-content;\n    display: flex;\n}\n\n.menu-text {\n    /* border: 1px solid red; */\n\n    color: white;\n    align-self: center;\n    margin-left: 4px;\n}\n\n.search-container {\n    /* border: 2px solid yellow; */\n    display: flex;\n    flex: 1;\n}\n\n.search-filter-container {\n    background-color: white;\n    color: black;\n    border-right: 1px solid grey;\n    border-radius: 4px 0 0 4px;\n    height: 24px;\n\n    display: flex;\n    align-items: center;\n    padding: 4px 12px;\n\n    cursor: pointer;\n}\n\n.search-filter-container:hover {\n    opacity: calc(90%);\n}\n\n.searchbar-container {\n    /* border: 2px solid purple; */\n\n    display: flex;\n    flex: 10;\n}\n\n.searchbar {\n    /* border: 1px solid blue; */\n    display: flex;\n    flex: 10;\n}\n\n#searchbar {\n    width: 100%;\n    height: 24px;\n    outline: 0;\n    border: 0;\n    padding: 4px 6px;\n}\n\n.search-icon-container {\n    /* border: 1px solid red; */\n    border-radius: 0px 4px 4px 0;\n\n    padding: 4px 6px;\n    height: 24px;\n    background-color: white;\n    cursor: pointer;\n    align-self: center;\n}\n\n\n.watchlist-container {\n    /* border: 1px solid red; */\n    border-radius: 4px;\n\n\n    display: flex;\n    /* flex: 1; */\n\n    padding: 4px 10px;\n    margin: 0 6px;\n\n    cursor: pointer;\n}\n\n.watchlist-container:hover {\n    background-color: rgba(128, 128, 128, 0.24);\n}\n\n.watchlist-icon {\n    /* border: 1px solid yellow; */\n    width: fit-content;\n    display: flex;\n}\n\n.watchlist-text {\n    /* border: 1px solid yellow; */\n\n    color: white;\n    align-self: center;\n    margin-left: 4px;\n}\n\nmain {\n    /* border: 2px solid red; */\n\n    grid-area: 2 / 2 / span 1 / span 1;\n\n    display: grid;\n\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: 4fr repeat(4, 2.2fr);\n}\n\nsection {\n    margin: 8px 0;\n}\n\n.popular {\n    /* border: 1px solid white; */\n\n    background-color: black;\n    grid-area: 1 / 1 / span 1 / -1;\n\n    min-height: 550px;\n\n    display: flex;\n    gap: 10px;\n\n\n}\n\n.main-image-container {\n    /* border: 1px solid yellowgreen; */\n\n    position: relative;\n    filter: brightness(75%);\n}\n\n.main-image-container::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 20%;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));\n    pointer-events: none;\n  }\n\n.main-popular-section {\n    /* border: 2px solid red; */\n\n    min-width: 800px;\n\n    flex: 2;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n\n    position: relative;\n}\n\n.main-text-container {\n    /* border: 2px solid green; */\n\n    color: white;\n\n    bottom: 0;\n    right: 0;\n    width: 75%;\n\n    flex: 1;\n}\n\n.main-poster {\n    position: absolute;\n    bottom: 0;\n    left: 18px;\n\n    box-shadow: 0 0 10px 4px white;\n}\n\n.main-title {\n    /* border: 1px solid white; */\n\n    font-size: 2rem;\n    padding: 10px;\n\n\n    flex: 2;\n}\n\n.main-starring {\n    /* border: 1px solid cyan; */\n\n    font-size: 1rem;\n\n    display: flex;\n    flex-direction: row;\n    padding: 0 10px;\n    gap: 1rem;\n\n\n    flex: 1;\n}\n\n.main-movie-actor {\n    border: 2px solid white;\n    border-radius: 50px;\n\n    padding: 4px 8px;\n}\n\n\n\n.secondary-popular-section {\n    border: 2px solid blue;\n\n    min-width: 350px;\n    position: relative;\n    flex: 1;\n\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n}\n\n.secondary-title {\n    border: 1px solid white;\n\n    color: #F5C518;\n    font-size: 1.2rem;\n    font-weight: bold;\n    padding: 6px;\n\n}\n\n.pop-movie-container {\n    border: 1px solid white;\n\n\n    flex: 1;\n}\n\n.pop-two {\n    /* border: none; */\n\n    background-color: rgb(17 17 17);\n    position: relative;\n}\n\n.pop-two::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 75%;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));\n    pointer-events: none;\n}\n\n\n\n\n\n\n\n\n\n.featured-today {\n    border: 1px solid white;\n\n    background-color: black;\n    grid-area: 2 / 1 / span 1 / -1;\n}\n\n.upcoming {\n    background-color: deeppink;\n    grid-area: 3 / 1 / span 1 / -1;\n}\n\n.what-to-watch {\n    background-color: lightseagreen;\n    grid-area: 4 / 1 / span 1 / -1;\n}\n\n.people-trending {\n    background-color: orange;\n    grid-area: 5 / 1 / span 1 / -1;\n}\n\nfooter {\n    border: 2px solid blue;\n    background-color: grey;\n\n    grid-area: 3 / 1 / span 1 / -1;\n\n    color: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://watchlist-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://watchlist-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://watchlist-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://watchlist-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://watchlist-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://watchlist-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://watchlist-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://watchlist-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://watchlist-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://watchlist-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/cred.js":
/*!*********************!*\
  !*** ./src/cred.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_KEY: () => (/* binding */ API_KEY)\n/* harmony export */ });\nconst API_KEY = '4b95db7f763ac20470be7bab97d1c69f'\n\n\n//# sourceURL=webpack://watchlist-app/./src/cred.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _cred__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cred */ \"./src/cred.js\");\n\n\n\n// store the base url, that'll be used in every request\nconst BASE_URL = 'https://api.themoviedb.org/3'\n\n// we'll pass this object as a second argument everytime we make a request using 'GET'\nconst OPTIONS = {\n  method: 'GET',\n  headers: {\n    accept: 'application/json',\n    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjk1ZGI3Zjc2M2FjMjA0NzBiZTdiYWI5N2QxYzY5ZiIsInN1YiI6IjY1YzNhNmI0OGMwYTQ4MDE2NDg1YWUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTWg4CfQZHMbgjAz5Znn5-5daI5seOIaaiVfi5B7qXk'\n  }\n}\n\n// SEARCH ##################################################################################################################\n\n// explain\nconst SEARCH_MULTI_URL = BASE_URL + '/search/multi?'\n\n// default SEARCH term\nconst SEARCH_TERM = 'Allied'\n\nasync function getMovie (url) {\n  try {\n    const response = await fetch(url)\n\n    if (response.status === 200) {\n      const data = await response.json()\n      console.log(data)\n    } else {\n      console.log('There was a problem with the request.')\n    }\n  } catch (error) {\n    console.log('Error: ', error)\n  }\n}\n\n// getMovie(`${SEARCH_MULTI_URL}query=${SEARCH_TERM}&api_key=${API_KEY}`)\n\n// MOVIE LISTS ##################################################################################################################\n\n// Get a list of movies that are being released soon\nconst UPCOMING_URL = BASE_URL + '/movie/upcoming?language=en-US&page=1'\n\n// Get a list of movies that are currently in theatres\nconst NOW_PLAYING_URL = BASE_URL + '/movie/now_playing?language=en-US&page=1'\n\n// Get a list of movies ordered by popularity\nconst POPULAR_URL = BASE_URL + '/movie/popular?language=en-US&page=1'\n\n// Get a list of movies ordered by rating\nconst TOP_RATED_URL = BASE_URL + '/movie/top_rated?language=en-US&page=1'\n\n// Get a list of actors playing in a movie\n// const MOVIE_CREDITS_URL\n\n// Get the poster image or the backdrop image for a MOVIE\nconst MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/' + 'zVMyvNowgbsBAL6O6esWfRpAcOb.jpg'\n\n// GET 'UPCOMING'\n\nasync function getUpcomingMovies (url, options) {\n  try {\n    const response = await fetch(url, options)\n\n    if (response.status === 200) {\n      const data = await response.json()\n      console.log(data)\n    } else {\n      console.log('There was a problem with the request.')\n    }\n  } catch (error) {\n    console.log('Error: ', error)\n  }\n}\n\n// getUpcomingMovies(UPCOMING_URL, OPTIONS)\n\n// GET 'NOW PLAYING'\n\nasync function getNowPlayingMovies (url, options) {\n  try {\n    const response = await fetch(url, options)\n\n    if (response.status === 200) {\n      const data = await response.json()\n      console.log(data)\n    } else {\n      console.log('There was a problem with the request.')\n    }\n  } catch (error) {\n    console.log('Error: ', error)\n  }\n}\n\ngetNowPlayingMovies(NOW_PLAYING_URL, OPTIONS)\n\n// GET 'POPULAR'\n\nasync function getPopularMovies (url, options) {\n  try {\n    const response = await fetch(url, options)\n\n    if (response.status === 200) {\n      const data = await response.json()\n      console.log(data)\n    } else {\n      console.log('There was a problem with the request.')\n    }\n  } catch (error) {\n    console.log('Error: ', error)\n  }\n}\n\ngetPopularMovies(POPULAR_URL, OPTIONS)\n\n// GET 'TOP RATED'\n\nasync function getTopRated (url, options) {\n  try {\n    const response = await fetch(url, options)\n\n    if (response.status === 200) {\n      const data = await response.json()\n      console.log(data)\n    } else {\n      console.log('There was a problem with the request.')\n    }\n  } catch (error) {\n    console.log('Error: ', error)\n  }\n}\n\n// getTopRated(TOP_RATED_URL, OPTIONS)\n\n// GET 'MOVIE CREDITS'\n\nasync function getMovieCredits (id, options) {\n  try {\n    const response = await fetch(BASE_URL + `/movie/${id}/credits`, options)\n\n    if (response.status === 200) {\n      const data = await response.json()\n      console.log(data)\n    } else {\n      console.log('There was a problem with the request.')\n    }\n  } catch (error) {\n    console.log('Error: ', error)\n  }\n}\n\n// getMovieCredits(787699, OPTIONS)\n\n// GET 'MOVIE IMAGE'\n\nasync function getMovieImage (url, options) {\n  try {\n    const response = await fetch(url, options)\n\n    if (response.status === 200) {\n      const data = await response.json()\n      console.log(data)\n    } else {\n      console.log('There was a problem with the request.')\n    }\n  } catch (error) {\n    console.log('Error: ', error)\n  }\n}\n\n// getMovieImage(MOVIE_CREDITS_URL, OPTIONS)\n\n// GENRES ##################################################################################################################\n\n// const MOVIE_GENRES_URL = BASE_URL + '/genre/movie/list?language=en'\n\n// async function getMovieGenres (url, options) {\n//   try {\n//     const response = await fetch(url, options)\n\n//     if (response.status === 200) {\n//       const data = await response.json()\n//       console.log(data)\n//     } else {\n//       console.log('There was a problem with the request.')\n//     }\n//   } catch (error) {\n//     console.log('Error: ', error)\n//   }\n// }\n\n// getMovieGenres(MOVIE_GENRES_URL, OPTIONS)\n\n// store all the genres and their corresponding id, so we can map them later\nconst genreData = [\n  { id: 28, name: 'Action' },\n  { id: 12, name: 'Adventure' },\n  { id: 16, name: 'Animation' },\n  { id: 35, name: 'Comedy' },\n  { id: 80, name: 'Crime' },\n  { id: 99, name: 'Documentary' },\n  { id: 18, name: 'Drama' },\n  { id: 10751, name: 'Family' },\n  { id: 14, name: 'Fantasy' },\n  { id: 36, name: 'History' },\n  { id: 27, name: 'Horror' },\n  { id: 10402, name: 'Music' },\n  { id: 9648, name: 'Mystery' },\n  { id: 10749, name: 'Romance' },\n  { id: 878, name: 'Science Fiction' },\n  { id: 10770, name: 'TV Movie' },\n  { id: 53, name: 'Thriller' },\n  { id: 10752, name: 'War' },\n  { id: 37, name: 'Western' }\n]\n\n// BUTTONS:\n\nconst homeBtn = document.querySelector('logo-container')\nconst menuBtn = document.querySelector('.menu-container')\nconst searchFilterBtn = document.querySelector('.search-filter-container')\nconst searchBarBtn = document.getElementById('searchbar')\nconst searchIconBtn = document.querySelector('.search-icon-container')\n\n\n//# sourceURL=webpack://watchlist-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;