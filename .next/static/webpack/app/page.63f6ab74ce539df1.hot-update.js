"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/SearchManufacturer.tsx":
/*!*******************************************!*\
  !*** ./components/SearchManufacturer.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Combobox,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/combobox/combobox.js\");\n/* harmony import */ var _barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Combobox,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SearchManufacturer = (param)=>{\n    let { manufacturer, setManufacturer } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const filteredManufacturer = query === \"\" ? _constants__WEBPACK_IMPORTED_MODULE_3__.manufacturers : _constants__WEBPACK_IMPORTED_MODULE_3__.manufacturers.filter((item)=>item.toLowerCase().replace(/\\s+/g, \"\").includes(query.toLowerCase().replace(/\\s+/g, \"\")));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-manufacturer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Button, {\n                        className: \"absolute top-[14px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/car-logo.svg\",\n                            width: 20,\n                            height: 20,\n                            className: \"ml-4\",\n                            alt: \"Car Logo\"\n                        }, void 0, false, {\n                            fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Input, {\n                        className: \"search-manufacturer__input\",\n                        placeholder: \"Volkswagen\",\n                        displayValue: (manufacturer)=>manufacturer,\n                        onChange: (e)=>setQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                        leave: \"transition ease-in duration-100\",\n                        leaveFrom: \"opacity-100\",\n                        leaveTo: \"opacity-0\",\n                        afterLeave: ()=>setQuery(\"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Options, {}, void 0, false, {\n                            fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchManufacturer, \"qO/HZodsWTfJhuzZtdaxiosei2U=\");\n_c = SearchManufacturer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchManufacturer);\nvar _c;\n$RefreshReg$(_c, \"SearchManufacturer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VhcmNoTWFudWZhY3R1cmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV5QjtBQUNrQjtBQUNaO0FBQzBCO0FBRWI7QUFFNUMsTUFBTU8scUJBQXFCO1FBQUMsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQTJCOztJQUVsRixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVcsdUJBQ05GLFVBQVUsS0FDUkoscURBQWFBLEdBQ2JBLHFEQUFhQSxDQUFDTyxNQUFNLENBQUMsQ0FBQ0MsT0FDcEJBLEtBQUtDLFdBQVcsR0FDZkMsT0FBTyxDQUFDLFFBQVEsSUFDaEJDLFFBQVEsQ0FBQ1AsTUFBTUssV0FBVyxHQUFHQyxPQUFPLENBQUMsUUFBUTtJQUdwRCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ2YsaUdBQVFBO3NCQUNMLDRFQUFDYztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNmLGlHQUFRQSxDQUFDZ0IsTUFBTTt3QkFBQ0QsV0FBVTtrQ0FDdkIsNEVBQUNoQixtREFBS0E7NEJBQ0ZrQixLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSSixXQUFVOzRCQUNWSyxLQUFJOzs7Ozs7Ozs7OztrQ0FJWiw4REFBQ3BCLGlHQUFRQSxDQUFDcUIsS0FBSzt3QkFDWE4sV0FBVTt3QkFDVk8sYUFBWTt3QkFDWkMsY0FBYyxDQUFDbkIsZUFBeUJBO3dCQUN4Q29CLFVBQVUsQ0FBQ0MsSUFBTWxCLFNBQVNrQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FHNUMsOERBQUMxQixtR0FBVUE7d0JBQ1AyQixJQUFJOUIsMkNBQVFBO3dCQUNaK0IsT0FBTTt3QkFDTkMsV0FBVTt3QkFDVkMsU0FBUTt3QkFDUkMsWUFBWSxJQUFNekIsU0FBUztrQ0FFM0IsNEVBQUNQLGlHQUFRQSxDQUFDaUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckM7R0FqRE05QjtLQUFBQTtBQW1ETiwrREFBZUEsa0JBQWtCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoTWFudWZhY3R1cmVyLnRzeD81MmYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBDb21ib2JveCwgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0JztcbmltcG9ydCB7IFNlYXJjaE1hbnVmYWN0dXJlclByb3BzIH0gZnJvbSAnQC90eXBlcydcbmltcG9ydCB7IG1hbnVmYWN0dXJlcnMgfSBmcm9tICdAL2NvbnN0YW50cyc7XG5cbmNvbnN0IFNlYXJjaE1hbnVmYWN0dXJlciA9ICh7IG1hbnVmYWN0dXJlciwgc2V0TWFudWZhY3R1cmVyIH06IFNlYXJjaE1hbnVmYWN0dXJlclByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkTWFudWZhY3R1cmVyID0gXG4gICAgcXVlcnkgPT09ICcnIFxuICAgID8gbWFudWZhY3R1cmVycyBcbiAgICA6IG1hbnVmYWN0dXJlcnMuZmlsdGVyKChpdGVtKSA9PiAoXG4gICAgICAgIGl0ZW0udG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIlwiKVxuICAgICAgICAuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpXG4gICAgKSkpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLW1hbnVmYWN0dXJlcic+XG4gICAgICAgIDxDb21ib2JveD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB3LWZ1bGwnPlxuICAgICAgICAgICAgICAgIDxDb21ib2JveC5CdXR0b24gY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtWzE0cHhdJz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9jYXItbG9nby5zdmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC00J1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdDYXIgTG9nbydcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbWJvYm94LkJ1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxDb21ib2JveC5JbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlYXJjaC1tYW51ZmFjdHVyZXJfX2lucHV0J1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVm9sa3N3YWdlbidcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlPXsobWFudWZhY3R1cmVyOiBzdHJpbmcpID0+IG1hbnVmYWN0dXJlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgICAgICAgICAgbGVhdmU9J3RyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0xMDAnXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT0nb3BhY2l0eS0xMDAnXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlVG89J29wYWNpdHktMCdcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJMZWF2ZT17KCkgPT4gc2V0UXVlcnkoJycpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPENvbWJvYm94Lk9wdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9Db21ib2JveC5PcHRpb25zPlxuICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbWJvYm94PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaE1hbnVmYWN0dXJlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRnJhZ21lbnQiLCJJbWFnZSIsIkNvbWJvYm94IiwiVHJhbnNpdGlvbiIsIm1hbnVmYWN0dXJlcnMiLCJTZWFyY2hNYW51ZmFjdHVyZXIiLCJtYW51ZmFjdHVyZXIiLCJzZXRNYW51ZmFjdHVyZXIiLCJxdWVyeSIsInNldFF1ZXJ5IiwiZmlsdGVyZWRNYW51ZmFjdHVyZXIiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFzIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiYWZ0ZXJMZWF2ZSIsIk9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SearchManufacturer.tsx\n"));

/***/ })

});