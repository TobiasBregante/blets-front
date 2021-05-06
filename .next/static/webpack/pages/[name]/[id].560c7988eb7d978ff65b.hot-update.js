webpackHotUpdate_N_E("pages/[name]/[id]",{

/***/ "./components/product/send.transaction.component.jsx":
/*!***********************************************************!*\
  !*** ./components/product/send.transaction.component.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar SendTransaction = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(objectTransaction, cookies) {\n    var getFetch, resFetch;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"\".concat(\"http://localhost:4000\", \"/v1/product/transaction\"), objectTransaction, {\n              headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'multipart/form-data',\n                'Access-Control-Allow-Origin': '*',\n                'token': cookies.user.token\n              }\n            });\n\n          case 2:\n            getFetch = _context.sent;\n            _context.next = 5;\n            return getFetch.data;\n\n          case 5:\n            resFetch = _context.sent;\n            return _context.abrupt(\"return\", resFetch);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function SendTransaction(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n_c = SendTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendTransaction);\n\nvar _c;\n\n$RefreshReg$(_c, \"SendTransaction\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L3NlbmQudHJhbnNhY3Rpb24uY29tcG9uZW50LmpzeD9hODM0Il0sIm5hbWVzIjpbIlNlbmRUcmFuc2FjdGlvbiIsIm9iamVjdFRyYW5zYWN0aW9uIiwiY29va2llcyIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJoZWFkZXJzIiwidXNlciIsInRva2VuIiwiZ2V0RmV0Y2giLCJkYXRhIiwicmVzRmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZUFBZTtBQUFBLDhMQUFHLGlCQUFPQyxpQkFBUCxFQUEwQkMsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDR0MsNENBQUssQ0FBQ0MsSUFBTixXQUFjQyx1QkFBZCw4QkFDbkJKLGlCQURtQixFQUVuQjtBQUNJSyxxQkFBTyxFQUFFO0FBQ0wsMEJBQVUsa0JBREw7QUFFTCxnQ0FBZ0IscUJBRlg7QUFHTCwrQ0FBK0IsR0FIMUI7QUFJTCx5QkFBU0osT0FBTyxDQUFDSyxJQUFSLENBQWFDO0FBSmpCO0FBRGIsYUFGbUIsQ0FESDs7QUFBQTtBQUNkQyxvQkFEYztBQUFBO0FBQUEsbUJBWUdBLFFBQVEsQ0FBQ0MsSUFaWjs7QUFBQTtBQVlkQyxvQkFaYztBQUFBLDZDQWFiQSxRQWJhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZYLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0tBQU1BLGU7QUFnQlNBLDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0L3NlbmQudHJhbnNhY3Rpb24uY29tcG9uZW50LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgU2VuZFRyYW5zYWN0aW9uID0gYXN5bmMgKG9iamVjdFRyYW5zYWN0aW9uLCBjb29raWVzKSA9PiB7XG4gICAgY29uc3QgZ2V0RmV0Y2ggPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkFQSV9QQVRIfS92MS9wcm9kdWN0L3RyYW5zYWN0aW9uYCwgXG4gICAgICAgIG9iamVjdFRyYW5zYWN0aW9uLFxuICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogY29va2llcy51c2VyLnRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc0ZldGNoID0gYXdhaXQgZ2V0RmV0Y2guZGF0YTtcbiAgICByZXR1cm4gcmVzRmV0Y2hcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VuZFRyYW5zYWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/product/send.transaction.component.jsx\n");

/***/ })

})