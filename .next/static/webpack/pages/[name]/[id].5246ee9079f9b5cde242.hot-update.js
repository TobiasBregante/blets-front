webpackHotUpdate_N_E("pages/[name]/[id]",{

/***/ "./components/product/send.transaction.component.jsx":
/*!***********************************************************!*\
  !*** ./components/product/send.transaction.component.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar SendTransaction = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(objectTransaction) {\n    var getFetch, resFetch;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            proof_payment;\n            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"\".concat(\"http://localhost:4000\", \"/v1/product\"), frmData, {});\n            _context.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"\".concat(\"http://localhost:4000\", \"/v1/product/transaction\"), objectTransaction, {\n              headers: {\n                'Content-Type': 'multipart/form-data',\n                'Access-Control-Allow-Origin': '*',\n                'token': cookies.user.token\n              }\n            });\n\n          case 4:\n            getFetch = _context.sent;\n            _context.next = 7;\n            return getFetch.data;\n\n          case 7:\n            resFetch = _context.sent;\n            return _context.abrupt(\"return\", resFetch);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function SendTransaction(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n_c = SendTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendTransaction);\n\nvar _c;\n\n$RefreshReg$(_c, \"SendTransaction\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L3NlbmQudHJhbnNhY3Rpb24uY29tcG9uZW50LmpzeD9hODM0Il0sIm5hbWVzIjpbIlNlbmRUcmFuc2FjdGlvbiIsIm9iamVjdFRyYW5zYWN0aW9uIiwicHJvb2ZfcGF5bWVudCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJmcm1EYXRhIiwiaGVhZGVycyIsImNvb2tpZXMiLCJ1c2VyIiwidG9rZW4iLCJnZXRGZXRjaCIsImRhdGEiLCJyZXNGZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxlQUFlO0FBQUEsOExBQUcsaUJBQU1DLGlCQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVwQkMseUJBQWE7QUFFYkMsd0RBQUssQ0FBQ0MsSUFBTixXQUFjQyx1QkFBZCxrQkFBaURDLE9BQWpELEVBQTBELEVBQTFEO0FBSm9CO0FBQUEsbUJBUUdILDRDQUFLLENBQUNDLElBQU4sV0FBY0MsdUJBQWQsOEJBQ25CSixpQkFEbUIsRUFFbkI7QUFDSU0scUJBQU8sRUFBRTtBQUNMLGdDQUFnQixxQkFEWDtBQUVMLCtDQUErQixHQUYxQjtBQUdMLHlCQUFTQyxPQUFPLENBQUNDLElBQVIsQ0FBYUM7QUFIakI7QUFEYixhQUZtQixDQVJIOztBQUFBO0FBUWRDLG9CQVJjO0FBQUE7QUFBQSxtQkFrQkdBLFFBQVEsQ0FBQ0MsSUFsQlo7O0FBQUE7QUFrQmRDLG9CQWxCYztBQUFBLDZDQW1CYkEsUUFuQmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZmIsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7S0FBTUEsZTtBQXNCU0EsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3Qvc2VuZC50cmFuc2FjdGlvbi5jb21wb25lbnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBTZW5kVHJhbnNhY3Rpb24gPSBhc3luYyBvYmplY3RUcmFuc2FjdGlvbiA9PiB7XG4gICAgXG4gICAgcHJvb2ZfcGF5bWVudFxuXG4gICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5BUElfUEFUSH0vdjEvcHJvZHVjdGAsIGZybURhdGEsIHtcbiAgICAgICAgXG4gICAgfSlcblxuICAgIGNvbnN0IGdldEZldGNoID0gYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5BUElfUEFUSH0vdjEvcHJvZHVjdC90cmFuc2FjdGlvbmAsIFxuICAgICAgICBvYmplY3RUcmFuc2FjdGlvbixcbiAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICAgICAndG9rZW4nOiBjb29raWVzLnVzZXIudG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgcmVzRmV0Y2ggPSBhd2FpdCBnZXRGZXRjaC5kYXRhO1xuICAgIHJldHVybiByZXNGZXRjaFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZW5kVHJhbnNhY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/product/send.transaction.component.jsx\n");

/***/ })

})