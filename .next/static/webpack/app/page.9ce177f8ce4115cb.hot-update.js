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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Combobox,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/combobox/combobox.js\");\n/* harmony import */ var _barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Combobox,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SearchManufacturer = (param)=>{\n    let { manufacturer, setManufacturer } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const filteredManufacturer = query === \"\" ? _constants__WEBPACK_IMPORTED_MODULE_3__.manufacturers : _constants__WEBPACK_IMPORTED_MODULE_3__.manufacturers.filter((item)=>item.toLowerCase().replace(/\\s+/g, \"\").includes(query.toLowerCase().replace(/\\s+/g, \"\")));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-manufacturer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Button, {\n                        className: \"absolute top-[14px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/car-logo.svg\",\n                            width: 20,\n                            height: 20,\n                            className: \"ml-4\",\n                            alt: \"Car Logo\"\n                        }, void 0, false, {\n                            fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Input, {\n                        className: \"search-manufacturer__input\",\n                        placeholder: \"Volkswagen\",\n                        displayValue: (manufacturer)=>manufacturer,\n                        onChange: (e)=>setQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                        leave: \"transition ease-in duration-100\",\n                        leaveFrom: \"opacity-100\",\n                        leaveTo: \"opacity-0\",\n                        afterLeave: ()=>setQuery(\"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Combobox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Options, {\n                            children: filteredManufacturer.length\n                        }, void 0, false, {\n                            fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/krishna/MY DRIVE/Coding/MERN Projects/Car Showcase/components/SearchManufacturer.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchManufacturer, \"qO/HZodsWTfJhuzZtdaxiosei2U=\");\n_c = SearchManufacturer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchManufacturer);\nvar _c;\n$RefreshReg$(_c, \"SearchManufacturer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VhcmNoTWFudWZhY3R1cmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV5QjtBQUNrQjtBQUNaO0FBQzBCO0FBRWI7QUFFNUMsTUFBTU8scUJBQXFCO1FBQUMsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQTJCOztJQUVsRixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVcsdUJBQ05GLFVBQVUsS0FDUkoscURBQWFBLEdBQ2JBLHFEQUFhQSxDQUFDTyxNQUFNLENBQUMsQ0FBQ0MsT0FDcEJBLEtBQUtDLFdBQVcsR0FDZkMsT0FBTyxDQUFDLFFBQVEsSUFDaEJDLFFBQVEsQ0FBQ1AsTUFBTUssV0FBVyxHQUFHQyxPQUFPLENBQUMsUUFBUTtJQUdwRCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ2YsaUdBQVFBO3NCQUNMLDRFQUFDYztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNmLGlHQUFRQSxDQUFDZ0IsTUFBTTt3QkFBQ0QsV0FBVTtrQ0FDdkIsNEVBQUNoQixtREFBS0E7NEJBQ0ZrQixLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSSixXQUFVOzRCQUNWSyxLQUFJOzs7Ozs7Ozs7OztrQ0FJWiw4REFBQ3BCLGlHQUFRQSxDQUFDcUIsS0FBSzt3QkFDWE4sV0FBVTt3QkFDVk8sYUFBWTt3QkFDWkMsY0FBYyxDQUFDbkIsZUFBeUJBO3dCQUN4Q29CLFVBQVUsQ0FBQ0MsSUFBTWxCLFNBQVNrQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FHNUMsOERBQUMxQixtR0FBVUE7d0JBQ1AyQixJQUFJOUIsMkNBQVFBO3dCQUNaK0IsT0FBTTt3QkFDTkMsV0FBVTt3QkFDVkMsU0FBUTt3QkFDUkMsWUFBWSxJQUFNekIsU0FBUztrQ0FFM0IsNEVBQUNQLGlHQUFRQSxDQUFDaUMsT0FBTztzQ0FDWnpCLHFCQUFxQjBCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wRDtHQWpETS9CO0tBQUFBO0FBbUROLCtEQUFlQSxrQkFBa0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hNYW51ZmFjdHVyZXIudHN4PzUyZjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IENvbWJvYm94LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnO1xuaW1wb3J0IHsgU2VhcmNoTWFudWZhY3R1cmVyUHJvcHMgfSBmcm9tICdAL3R5cGVzJ1xuaW1wb3J0IHsgbWFudWZhY3R1cmVycyB9IGZyb20gJ0AvY29uc3RhbnRzJztcblxuY29uc3QgU2VhcmNoTWFudWZhY3R1cmVyID0gKHsgbWFudWZhY3R1cmVyLCBzZXRNYW51ZmFjdHVyZXIgfTogU2VhcmNoTWFudWZhY3R1cmVyUHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRNYW51ZmFjdHVyZXIgPSBcbiAgICBxdWVyeSA9PT0gJycgXG4gICAgPyBtYW51ZmFjdHVyZXJzIFxuICAgIDogbWFudWZhY3R1cmVycy5maWx0ZXIoKGl0ZW0pID0+IChcbiAgICAgICAgaXRlbS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiXCIpXG4gICAgICAgIC5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCJcIilcbiAgICApKSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtbWFudWZhY3R1cmVyJz5cbiAgICAgICAgPENvbWJvYm94PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCc+XG4gICAgICAgICAgICAgICAgPENvbWJvYm94LkJ1dHRvbiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC1bMTRweF0nPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2Nhci1sb2dvLnN2ZydcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTQnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J0NhciBMb2dvJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29tYm9ib3guQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPENvbWJvYm94LklucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VhcmNoLW1hbnVmYWN0dXJlcl9faW5wdXQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdWb2xrc3dhZ2VuJ1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU9eyhtYW51ZmFjdHVyZXI6IHN0cmluZykgPT4gbWFudWZhY3R1cmVyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgICAgICAgICBsZWF2ZT0ndHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTEwMCdcbiAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPSdvcGFjaXR5LTEwMCdcbiAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz0nb3BhY2l0eS0wJ1xuICAgICAgICAgICAgICAgICAgICBhZnRlckxlYXZlPXsoKSA9PiBzZXRRdWVyeSgnJyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q29tYm9ib3guT3B0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZE1hbnVmYWN0dXJlci5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29tYm9ib3guT3B0aW9ucz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db21ib2JveD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hNYW51ZmFjdHVyZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZyYWdtZW50IiwiSW1hZ2UiLCJDb21ib2JveCIsIlRyYW5zaXRpb24iLCJtYW51ZmFjdHVyZXJzIiwiU2VhcmNoTWFudWZhY3R1cmVyIiwibWFudWZhY3R1cmVyIiwic2V0TWFudWZhY3R1cmVyIiwicXVlcnkiLCJzZXRRdWVyeSIsImZpbHRlcmVkTWFudWZhY3R1cmVyIiwiZmlsdGVyIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZGlzcGxheVZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhcyIsImxlYXZlIiwibGVhdmVGcm9tIiwibGVhdmVUbyIsImFmdGVyTGVhdmUiLCJPcHRpb25zIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SearchManufacturer.tsx\n"));

/***/ })

});