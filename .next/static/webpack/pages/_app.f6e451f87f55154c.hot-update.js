"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#f0e7db\", \"#202023\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    Heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    glassTeal: \"#88ccca\"\n};\nvar config = {\n    initalColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    colors: colors,\n    fonts: fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXlEO0FBQ1o7QUFFN0MsSUFBTUcsTUFBTSxHQUFHO0lBQ1hDLE1BQU0sRUFBRUMsU0FBQUEsS0FBSztlQUFLO1lBQ2RDLElBQUksRUFBRTtnQkFDRkMsRUFBRSxFQUFFTCw0REFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQ0csS0FBSyxDQUFDO2FBQ3hDO1NBQ0o7S0FBQztDQUNMO0FBRUQsSUFBTUcsVUFBVSxHQUFHO0lBQ2ZDLE9BQU8sRUFBRTtRQUNMQyxRQUFRLEVBQUU7WUFDTixlQUFlLEVBQUU7Z0JBQ2JDLGNBQWMsRUFBRSxXQUFXO2dCQUMzQkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3RCQyxtQkFBbUIsRUFBRSxTQUFTO2dCQUM5QkMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDMUJDLFNBQVMsRUFBRSxDQUFDO2dCQUNaQyxZQUFZLEVBQUUsQ0FBQzthQUNsQjtTQUNKO0tBQ0o7SUFDREMsSUFBSSxFQUFFO1FBQ0ZDLFNBQVMsRUFBRWQsU0FBQUEsS0FBSzttQkFBSztnQkFDakJlLEtBQUssRUFBRWxCLDREQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDRyxLQUFLLENBQUM7Z0JBQ3hDUSxtQkFBbUIsRUFBRSxDQUFDO2FBQ3pCO1NBQUM7S0FDTDtDQUNKO0FBRUQsSUFBTVEsS0FBSyxHQUFHO0lBQ1ZaLE9BQU8sRUFBRSxxQkFBcUI7Q0FDakM7QUFFRCxJQUFNYSxNQUFNLEdBQUc7SUFDWEMsU0FBUyxFQUFFLFNBQVM7Q0FDdkI7QUFFRCxJQUFNQyxNQUFNLEdBQUc7SUFDWEMsZUFBZSxFQUFFLE1BQU07SUFDdkJDLGtCQUFrQixFQUFFLElBQUk7Q0FDM0I7QUFFRCxJQUFNQyxLQUFLLEdBQUcxQiw2REFBVyxDQUFDO0lBQ3RCdUIsTUFBTSxFQUFOQSxNQUFNO0lBQ05yQixNQUFNLEVBQU5BLE1BQU07SUFDTkssVUFBVSxFQUFWQSxVQUFVO0lBQ1ZjLE1BQU0sRUFBTkEsTUFBTTtJQUNORCxLQUFLLEVBQUxBLEtBQUs7Q0FDUixDQUFDO0FBRUYsK0RBQWVNLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbSwgZXh0ZW5kVGhlbWV9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGdsb2JhbDogcHJvcHMgPT4gKHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgYmc6IG1vZGUoJyNmMGU3ZGInLCAnIzIwMjAyMycpKHByb3BzKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgICBIZWFkaW5nOiB7XG4gICAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgICAgICAnc2VjdGlvbi10aXRsZSc6IHtcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgTGluazoge1xuICAgICAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XG4gICAgICAgICAgICBjb2xvcjogbW9kZSgnIzNkN2FlZCcsICcjZmY2M2MzJykocHJvcHMpLFxuICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogM1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgZm9udHMgPSB7XG4gICAgSGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcbn1cblxuY29uc3QgY29sb3JzID0ge1xuICAgIGdsYXNzVGVhbDogJyM4OGNjY2EnXG59XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBpbml0YWxDb2xvck1vZGU6ICdkYXJrJyxcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcbn1cblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gICAgY29uZmlnLFxuICAgIHN0eWxlcyxcbiAgICBjb21wb25lbnRzLFxuICAgIGNvbG9ycyxcbiAgICBmb250c1xufSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbSIsImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJjb2xvcnMiLCJnbGFzc1RlYWwiLCJjb25maWciLCJpbml0YWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});