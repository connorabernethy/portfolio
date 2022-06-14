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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Obj = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(\"rgb(255, 193, 143)\", 0.7);\n            scene.add(ambientLight);\n            var dl = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(\"rgb(143, 205, 255)\", 1);\n            dl.position.set(3, 1, 2);\n            var helper = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLightHelper(dl, 3);\n            scene.add(dl);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            controls.enableZoom = false;\n            setControls(controls);\n            var textureLoader = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader();\n            var normalTexture = textureLoader.load(\"/public/normal.png\");\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(5, 5, 5);\n            var color = new three__WEBPACK_IMPORTED_MODULE_3__.Color((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorMode)(\"whitesmoke\", \"black\"));\n            var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshStandardMaterial({\n                color: color\n            });\n            material.metalness = 2;\n            material.opacity = 0.7;\n            material.wireframe = true;\n            var cube = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);\n            scene.add(cube);\n            var req = null;\n            var frame = 0;\n            var render = function() {\n                req = requestAnimationFrame(render);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            render();\n            setLoading(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        ref: refContainer,\n        className: \"3d\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n            lineNumber: 117,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n        lineNumber: 108,\n        columnNumber: 13\n    }, _this);\n};\n_s(Obj, \"PoCMKBRFUuHjz0y7odtmo4vjNbw=\");\n_c = Obj;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obj);\nvar _c;\n$RefreshReg$(_c, \"Obj\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvM2QuanM/ZGJkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxCYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIsIHVzZUNvbG9yTW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcblxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgT2JqID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gICAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFsgcmVuZGVyZXIsIHNldFJlbmRlcmVyIF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgWyBfY2FtZXJhLCBzZXRDYW1lcmEgXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbIHRhcmdldCBdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSlcbiAgICBjb25zdCBbIGluaXRpYWxDYW1lcmFQb3NpdGlvbiBdID0gdXNlU3RhdGUoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgWyBzY2VuZSBdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXG4gICAgY29uc3QgWyBfY29udHJvbHMsIHNldENvbnRyb2xzIF0gPSB1c2VTdGF0ZSgpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgIXJlbmRlcmVyKSB7XG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0ggKVxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMDAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoJ3JnYigyNTUsIDE5MywgMTQzKScsIDAuNylcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG5cbiAgICAgICAgICAgIGNvbnN0IGRsID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoJ3JnYigxNDMsIDIwNSwgMjU1KScsIDEpXG4gICAgICAgICAgICBkbC5wb3NpdGlvbi5zZXQoMywgMSwgMilcbiAgICAgICAgICAgIGNvbnN0IGhlbHBlciA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0SGVscGVyKGRsLCAzKVxuICAgICAgICAgICAgc2NlbmUuYWRkKCBkbCApXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcbiAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgY29udHJvbHMuZW5hYmxlWm9vbSA9IGZhbHNlXG4gICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scylcblxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKClcblxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsVGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCgnL3B1YmxpYy9ub3JtYWwucG5nJylcblxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDUsIDUsIDUgKVxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IodXNlQ29sb3JNb2RlKCd3aGl0ZXNtb2tlJywgJ2JsYWNrJykpXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCggeyBjb2xvcjogY29sb3J9IClcbiAgICAgICAgICAgIG1hdGVyaWFsLm1ldGFsbmVzcyA9IDJcbiAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHkgPSAwLjdcbiAgICAgICAgICAgIG1hdGVyaWFsLndpcmVmcmFtZSA9IHRydWVcbiAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsIClcbiAgICAgICAgICAgIHNjZW5lLmFkZCggY3ViZSApXG5cbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcilcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lXG5cbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUgPD0gMTAwKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZSAvIDEyMCkgKiBNYXRoLlBJICogMjBcblxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gcC54ICogTWF0aC5jb3Mocm90U3BlZWQpICsgcC56ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXIoKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuICg8Qm94IHJlZj17cmVmQ29udGFpbmVyfSBcbiAgICBjbGFzc05hbWU9XCIzZFwiIFxuICAgIG09XCJhdXRvXCIgXG4gICAgbXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119IFxuICAgIG1iPXtbJy00MHB4JywgJy0xNDBweCcsICctMjAwcHgnXX0gXG4gICAgdz17WzI4MCwgNDgwLCA2NDBdfSBcbiAgICBoPXtbMjgwLCA0ODAsIDY0MF19IFxuICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIj57XG4gICAgICAgIGxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhsXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGxlZnQ9XCI1MCVcIiB0b3A9XCI1MCVcIiBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCIgbXQ9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkpXCI+PC9TcGlubmVyPlxuICAgICAgICApXG4gICAgfVxuPC9Cb3g+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmoiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsQmFjayIsIkJveCIsIlNwaW5uZXIiLCJ1c2VDb2xvck1vZGUiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIk9iaiIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjdXJyZW50IiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiZGwiLCJEaXJlY3Rpb25hbExpZ2h0Iiwic2V0IiwiaGVscGVyIiwiRGlyZWN0aW9uYWxMaWdodEhlbHBlciIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsImVuYWJsZVpvb20iLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsIm5vcm1hbFRleHR1cmUiLCJsb2FkIiwiZ2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImNvbG9yIiwiQ29sb3IiLCJtYXRlcmlhbCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwibWV0YWxuZXNzIiwib3BhY2l0eSIsIndpcmVmcmFtZSIsImN1YmUiLCJNZXNoIiwicmVxIiwiZnJhbWUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJtdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/3d.js\n");

/***/ })

});