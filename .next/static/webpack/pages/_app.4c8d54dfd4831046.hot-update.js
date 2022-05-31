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

/***/ "./components/3d.js":
/*!**************************!*\
  !*** ./components/3d.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Obj = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xcccccc, 100);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            var textureLoader = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader();\n            var normalTexture = textureLoader.load(\"./public/normal.jpg\");\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.SphereGeometry(2, 4, 8);\n            var color = new three__WEBPACK_IMPORTED_MODULE_3__.Color(0x292929);\n            var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshStandardMaterial({\n                color: color\n            });\n            material.normalMap = normalTexture;\n            material.metalness = 0.7;\n            material.roughness = 0.3;\n            var sphere = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);\n            scene.add(sphere);\n            var req = null;\n            var frame = 0;\n            var render = function() {\n                req = requestAnimationFrame(render);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            render();\n            setLoading(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        ref: refContainer,\n        className: \"3d\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n            lineNumber: 111,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n        lineNumber: 102,\n        columnNumber: 13\n    }, _this);\n};\n_s(Obj, \"PoCMKBRFUuHjz0y7odtmo4vjNbw=\");\n_c = Obj;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obj);\nvar _c;\n$RefreshReg$(_c, \"Obj\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsQ0FBQyxLQUFLLENBQUM7U0FDcEI7S0FDSixFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUFRLDhEQUFDWixpREFBRztRQUFDK0UsR0FBRyxFQUFFckUsWUFBWTtRQUM5QnNFLFNBQVMsRUFBQyxJQUFJO1FBQ2RDLENBQUMsRUFBQyxNQUFNO1FBQ1JDLEVBQUUsRUFBRTtZQUFDLE9BQU87WUFBRSxPQUFPO1lBQUUsUUFBUTtTQUFDO1FBQ2hDQyxFQUFFLEVBQUU7WUFBQyxPQUFPO1lBQUUsUUFBUTtZQUFFLFFBQVE7U0FBQztRQUNqQ0MsQ0FBQyxFQUFFO0FBQUMsZUFBRztBQUFFLGVBQUc7QUFBRSxlQUFHO1NBQUM7UUFDbEJDLENBQUMsRUFBRTtBQUFDLGVBQUc7QUFBRSxlQUFHO0FBQUUsZUFBRztTQUFDO1FBQ2xCdEMsUUFBUSxFQUFDLFVBQVU7a0JBQ2ZwQyxPQUFPLGtCQUNILDhEQUFDVixxREFBTztZQUFDcUYsSUFBSSxFQUFDLElBQUk7WUFBQ3ZDLFFBQVEsRUFBQyxVQUFVO1lBQUN3QyxJQUFJLEVBQUMsS0FBSztZQUFDQyxHQUFHLEVBQUMsS0FBSztZQUFDQyxFQUFFLEVBQUMscUNBQXFDO1lBQUNQLEVBQUUsRUFBQyxpQ0FBaUM7Ozs7O2lCQUFXOzs7OzthQUcxSixDQUFDO0NBQ047R0F6R0t6RSxHQUFHO0FBQUhBLEtBQUFBLEdBQUc7QUEyR1QsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8zZC5qcz9kYmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbEJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcblxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgT2JqID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gICAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFsgcmVuZGVyZXIsIHNldFJlbmRlcmVyIF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgWyBfY2FtZXJhLCBzZXRDYW1lcmEgXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbIHRhcmdldCBdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSlcbiAgICBjb25zdCBbIGluaXRpYWxDYW1lcmFQb3NpdGlvbiBdID0gdXNlU3RhdGUoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgWyBzY2VuZSBdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXG4gICAgY29uc3QgWyBfY29udHJvbHMsIHNldENvbnRyb2xzIF0gPSB1c2VTdGF0ZSgpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgIXJlbmRlcmVyKSB7XG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0ggKVxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMDAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEwMClcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcbiAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXG5cbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpXG5cbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbFRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoJy4vcHVibGljL25vcm1hbC5qcGcnKVxuXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSggMiwgNCwgOCApXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBUSFJFRS5Db2xvcigweDI5MjkyOSlcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKCB7IGNvbG9yOiBjb2xvcn0gKVxuICAgICAgICAgICAgbWF0ZXJpYWwubm9ybWFsTWFwID0gbm9ybWFsVGV4dHVyZVxuICAgICAgICAgICAgbWF0ZXJpYWwubWV0YWxuZXNzID0gMC43XG4gICAgICAgICAgICBtYXRlcmlhbC5yb3VnaG5lc3MgPSAwLjNcbiAgICAgICAgICAgIGNvbnN0IHNwaGVyZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKVxuICAgICAgICAgICAgc2NlbmUuYWRkKCBzcGhlcmUgKVxuXG4gICAgICAgICAgICBsZXQgcmVxID0gbnVsbFxuICAgICAgICAgICAgbGV0IGZyYW1lID0gMFxuICAgICAgICAgICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxuXG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lIDw9IDEwMCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXG5cbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IHAueiAqIE1hdGguY29zKHJvdFNwZWVkKSAtIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyKClcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoPEJveCByZWY9e3JlZkNvbnRhaW5lcn0gXG4gICAgY2xhc3NOYW1lPVwiM2RcIiBcbiAgICBtPVwiYXV0b1wiIFxuICAgIG10PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfSBcbiAgICBtYj17WyctNDBweCcsICctMTQwcHgnLCAnLTIwMHB4J119IFxuICAgIHc9e1syODAsIDQ4MCwgNjQwXX0gXG4gICAgaD17WzI4MCwgNDgwLCA2NDBdfSBcbiAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCI+e1xuICAgICAgICBsb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBsZWZ0PVwiNTAlXCIgdG9wPVwiNTAlXCIgbWw9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkgLyAyKVwiIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiPjwvU3Bpbm5lcj5cbiAgICAgICAgKVxuICAgIH1cbjwvQm94Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbEJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJPYmoiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiY3VycmVudCIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0IiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwibm9ybWFsVGV4dHVyZSIsImxvYWQiLCJnZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5IiwiY29sb3IiLCJDb2xvciIsIm1hdGVyaWFsIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJub3JtYWxNYXAiLCJtZXRhbG5lc3MiLCJyb3VnaG5lc3MiLCJzcGhlcmUiLCJNZXNoIiwicmVxIiwiZnJhbWUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJtdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/3d.js\n");

/***/ })

});