"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-post";
exports.ids = ["pages/api/new-post"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "./components/Mongo/getDatabase.js?55a2":
/*!*****************************************!*\
  !*** ./components/Mongo/getDatabase.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb://localhost:27017/blog');\n    return {\n        client: client,\n        db: client.db()\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vbmdvL2dldERhdGFiYXNlLmpzPzU1YTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO2VBRXRCQyxXQUFXLEdBQUUsQ0FBQztJQUN6QixLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNGLHdEQUFtQixDQUNwQyxDQUFnQztJQUVwQyxNQUFNLENBQUMsQ0FBQztRQUFDRSxNQUFNLEVBQUVBLE1BQU07UUFBRUUsRUFBRSxFQUFFRixNQUFNLENBQUNFLEVBQUU7SUFBRyxDQUFDO0FBQzlDLENBQUM7QUFDRCxpRUFBZUgsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnh0anMtdHV0Ly4vY29tcG9uZW50cy9Nb25nby9nZXREYXRhYmFzZS5qcz8xMzFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YWJhc2UoKXtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgICAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9ibG9nJ1xuICAgICAgICApO1xuICAgIHJldHVybiB7IGNsaWVudDogY2xpZW50LCBkYjogY2xpZW50LmRiKCkgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGdldERhdGFiYXNlOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImdldERhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Mongo/getDatabase.js?55a2\n");

/***/ }),

/***/ "./pages/api/new-post.js":
/*!*******************************!*\
  !*** ./pages/api/new-post.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Mongo_getDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Mongo/getDatabase */ \"./components/Mongo/getDatabase.js?55a2\");\n\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        const data = req.body;\n        data.image = data.image || null;\n        const { client , db  } = await (0,_components_Mongo_getDatabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const placesCollec = db.collection('posts');\n        const result = await placesCollec.insertOne(data);\n        client.close();\n        res.status(201).json({\n            msg: 'done'\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmV3LXBvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEQ7ZUFFN0NDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUNoQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQ0MsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFDckJELElBQUksQ0FBQ0UsS0FBSyxHQUFHRixJQUFJLENBQUNFLEtBQUssSUFBSSxJQUFJO1FBRS9CLEtBQUssQ0FBQyxDQUFDLENBQUNDLE1BQU0sR0FBRUMsRUFBRSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNULHlFQUFXO1FBQ3hDLEtBQUssQ0FBQ1UsWUFBWSxHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxDQUFPO1FBRTFDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0YsWUFBWSxDQUFDRyxTQUFTLENBQUNSLElBQUk7UUFDaERHLE1BQU0sQ0FBQ00sS0FBSztRQUNaWCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEdBQUcsRUFBRSxDQUFNO1FBQUMsQ0FBQztJQUN0QyxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlaEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnh0anMtdHV0Ly4vcGFnZXMvYXBpL25ldy1wb3N0LmpzP2ZlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldERhdGFiYXNlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9uZ28vZ2V0RGF0YWJhc2UnO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgZGF0YS5pbWFnZSA9IGRhdGEuaW1hZ2UgfHwgbnVsbDsgXG5cbiAgICBjb25zdCB7IGNsaWVudCwgZGIgfSA9IGF3YWl0IGdldERhdGFiYXNlKCk7XG4gICAgY29uc3QgcGxhY2VzQ29sbGVjID0gZGIuY29sbGVjdGlvbigncG9zdHMnKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBsYWNlc0NvbGxlYy5pbnNlcnRPbmUoZGF0YSk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtc2c6ICdkb25lJyB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImdldERhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiaW1hZ2UiLCJjbGllbnQiLCJkYiIsInBsYWNlc0NvbGxlYyIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/new-post.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/new-post.js"));
module.exports = __webpack_exports__;

})();