/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-toggle-button */ \"./components/theme-toggle-button.js\");\n/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"gray.700\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar Navbar = function(props) {\n    _s1();\n    var path = props.path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px\"\n        },\n        zIndex: 1\n    }, props, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        nmd: 0\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            ml: 2,\n                            display: {\n                                base: \"inline-block\",\n                                md: \"none\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuButton, {\n                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton,\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                    variant: \"outline\",\n                                    \"aria-label\": \"Options\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuList, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/projects\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,\n                                                children: \"Projects\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/about\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,\n                                                children: \"About\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/contact\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,\n                                                children: \"Contact\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, _this)\n    }), void 0, false, {\n        fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/navbar.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0csd0RBQVU7b0NBQUNrQixFQUFFLEVBQUVqQix3REFBVTtvQ0FBRXdDLElBQUksZ0JBQUUsOERBQUN0QywyREFBYSxvQ0FBRTtvQ0FBRXVDLE9BQU8sRUFBQyxTQUFTO29DQUFDQyxZQUFVLEVBQUMsU0FBUzs7Ozs7eUNBQUU7OENBQzVGLDhEQUFDNUMsc0RBQVE7O3NEQUNMLDhEQUFDVCxrREFBUTs0Q0FBQ2dCLElBQUksRUFBQyxXQUFXOzRDQUFDc0MsUUFBUTtzREFDL0IsNEVBQUM5QyxzREFBUTtnREFBQ29CLEVBQUUsRUFBRXpCLGtEQUFJOzBEQUFFLFVBQVE7Ozs7O3FEQUFXOzs7OztpREFDaEM7c0RBQ1gsOERBQUNILGtEQUFROzRDQUFDZ0IsSUFBSSxFQUFDLFFBQVE7NENBQUNzQyxRQUFRO3NEQUM1Qiw0RUFBQzlDLHNEQUFRO2dEQUFDb0IsRUFBRSxFQUFFekIsa0RBQUk7MERBQUUsT0FBSzs7Ozs7cURBQVc7Ozs7O2lEQUM3QjtzREFDWCw4REFBQ0gsa0RBQVE7NENBQUNnQixJQUFJLEVBQUMsVUFBVTs0Q0FBQ3NDLFFBQVE7c0RBQzlCLDRFQUFDOUMsc0RBQVE7Z0RBQUNvQixFQUFFLEVBQUV6QixrREFBSTswREFBRSxTQUFPOzs7OztxREFBVzs7Ozs7aURBQy9COzs7Ozs7eUNBQ0o7Ozs7OztpQ0FDUjs7Ozs7O3lCQUNMOzs7Ozs7aUJBQ0U7Ozs7O2FBQ1YsQ0FDVDtDQUNKO0lBL0NLc0IsTUFBTTs7UUFPQWIsK0RBQWlCOzs7QUFQdkJhLE1BQUFBLE1BQU07QUFpRFosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/NWI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICAgIENvbnRhaW5lcixcbiAgICBCb3gsXG4gICAgTGluayxcbiAgICBTdGFjayxcbiAgICBIZWFkaW5nLFxuICAgIEZsZXgsXG4gICAgTWVudSxcbiAgICBNZW51SXRlbSxcbiAgICBNZW51TGlzdCxcbiAgICBNZW51QnV0dG9uLFxuICAgIEljb25CdXR0b24sXG4gICAgdXNlQ29sb3JNb2RlVmFsdWVcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuaW1wb3J0IFRoZW1lVG9nZ2xlQnV0dG9uIGZyb20gJy4vdGhlbWUtdG9nZ2xlLWJ1dHRvbidcblxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuICAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS43MDAnLCAnd2hpdGVBbHBoYS45MDAnKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgIGJnPXthY3RpdmUgPyAnZ2xhc3NUZWFsJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICApXG59XG5cbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzODAnKX1cbiAgICAgICAgc3R5bGU9e3sgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgnfX1cbiAgICAgICAgekluZGV4PXsxfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxDb250YWluZXIgZGlzcGxheT1cImZsZXhcIiBwPXsyfSBtYXhXPVwiY29udGFpbmVyLm1kXCIgd3JhcD1cIndyYXBcIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibGdcIiBsZXR0ZXJTcGFjaW5nPXsndGlnaHRlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17e2Jhc2U6ICdjb2x1bW4nLCBtZDogJ3Jvdyd9fVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e3tiYXNlOiAnbm9uZScsIG1kOiAnZmxleCd9fVxuICAgICAgICAgICAgICAgIHdpZHRoPXt7YmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nfX1cbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICAgICAgICBtdD17e2Jhc2U6IDQsIG5tZDogMH19PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPEJveCBmbGV4PXsxfSBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWw9ezJ9IGRpc3BsYXk9e3tiYXNlOiAnaW5saW5lLWJsb2NrJywgbWQ6ICdub25lJ319Lz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbiBhcz17SWNvbkJ1dHRvbn0gaWNvbj17PEhhbWJ1cmdlckljb24vPn0gdmFyaWFudD1cIm91dGxpbmVcIiBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PlByb2plY3RzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2Fib3V0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+QWJvdXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PkNvbnRhY3Q8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJIYW1idXJnZXJJY29uIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwicCIsImJnIiwidW5kZWZpbmVkIiwiY29sb3IiLCJOYXZiYXIiLCJwcm9wcyIsInBvc2l0aW9uIiwiYXMiLCJ3Iiwic3R5bGUiLCJiYWNrZHJvcEZpbHRlciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCIsImFsaWduIiwianVzdGlmeSIsIm1yIiwic2l6ZSIsImxldHRlclNwYWNpbmciLCJkaXJlY3Rpb24iLCJiYXNlIiwibWQiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm10Iiwibm1kIiwiZmxleCIsIm1sIiwiaWNvbiIsInZhcmlhbnQiLCJhcmlhLWxhYmVsIiwicGFzc0hyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ }),

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ })

});