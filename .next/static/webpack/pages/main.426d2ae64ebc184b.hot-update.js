/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./components/BasicBoardContent.js":
/*!*****************************************!*\
  !*** ./components/BasicBoardContent.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_RoundButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/RoundButton */ \"./components/RoundButton.js\");\n/* harmony import */ var _components_PinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PinkButton */ \"./components/PinkButton.js\");\n/* harmony import */ var _components_LayoutHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LayoutHeader */ \"./components/LayoutHeader.js\");\n/* harmony import */ var _components_LayoutSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LayoutSide */ \"./components/LayoutSide.js\");\n/* harmony import */ var _components_SquareInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SquareInput */ \"./components/SquareInput.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled */ \"./styled.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.js\");\n/* harmony import */ var _components_BasicBoard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BasicBoard */ \"./components/BasicBoard.js\");\n/* harmony import */ var _components_BasicBoardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BasicBoardContent */ \"./components/BasicBoardContent.js\");\n/* harmony import */ var _components_BasicBoardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_BasicBoardContent__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\berry\\\\y-study\\\\yuldo-study-master\\\\pages\\\\main.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n // const Main = () => (\n//   // <Title>hello</Title>;\n//   <RoundButton>로그인</RoundButton>\n// );\n// const Main = () => <RoundButton text=\"회원가입\" size={200} />;\n\n\n\nvar Main = function Main() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((_components_BasicBoardContent__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 20\n  }, _this);\n};\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main); // const Title = styled.div`\n//   font-size: 30px;\n//   font-weight: bold;\n// `;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUNBLElBQU1VLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsc0JBQU0sOERBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFOO0FBQUEsQ0FBYjs7S0FBTUE7QUFFTiwrREFBZUEsSUFBZixHQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW4uanM/YWE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJvdW5kQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1JvdW5kQnV0dG9uXCI7XG5pbXBvcnQgUGlua0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QaW5rQnV0dG9uXCI7XG5pbXBvcnQgTGF5b3V0SGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dEhlYWRlclwiO1xuaW1wb3J0IExheW91dFNpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0U2lkZVwiO1xuaW1wb3J0IFNxdWFyZUlucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL1NxdWFyZUlucHV0XCI7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlZFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgQmFzaWNCb2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9CYXNpY0JvYXJkXCI7XG5pbXBvcnQgQmFzaWNCb2FyZENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFzaWNCb2FyZENvbnRlbnRcIjtcblxuLy8gY29uc3QgTWFpbiA9ICgpID0+IChcbi8vICAgLy8gPFRpdGxlPmhlbGxvPC9UaXRsZT47XG4vLyAgIDxSb3VuZEJ1dHRvbj7roZzqt7jsnbg8L1JvdW5kQnV0dG9uPlxuLy8gKTtcblxuLy8gY29uc3QgTWFpbiA9ICgpID0+IDxSb3VuZEJ1dHRvbiB0ZXh0PVwi7ZqM7JuQ6rCA7J6FXCIgc2l6ZT17MjAwfSAvPjtcbmNvbnN0IE1haW4gPSAoKSA9PiA8QmFzaWNCb2FyZENvbnRlbnQgLz47XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cbi8vIGNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbi8vICAgZm9udC1zaXplOiAzMHB4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIGA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUm91bmRCdXR0b24iLCJQaW5rQnV0dG9uIiwiTGF5b3V0SGVhZGVyIiwiTGF5b3V0U2lkZSIsIlNxdWFyZUlucHV0IiwiR2xvYmFsU3R5bGUiLCJNb2RhbCIsIkJhc2ljQm9hcmQiLCJCYXNpY0JvYXJkQ29udGVudCIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ })

});