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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Obj = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0x656, 0.7);\n            scene.add(ambientLight);\n            var dl = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xffff, 0.7);\n            dl.position.set(0, 1, 2);\n            var helper = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLightHelper(dl, 3);\n            helper.castShadow = true;\n            scene.add(dl);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            controls.enableZoom = false;\n            setControls(controls);\n            var textureLoader = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader();\n            var normalTexture = textureLoader.load(\"/public/normal.png\");\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(5, 5, 5);\n            var color = new three__WEBPACK_IMPORTED_MODULE_3__.Color(0x2929);\n            var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshStandardMaterial({\n                color: color\n            });\n            material.metalness = 10;\n            material.roughness = 0.3;\n            var cube = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);\n            scene.add(cube);\n            var req = null;\n            var frame = 0;\n            var render = function() {\n                req = requestAnimationFrame(render);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            render();\n            setLoading(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        ref: refContainer,\n        className: \"3d\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n            lineNumber: 117,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n        lineNumber: 108,\n        columnNumber: 13\n    }, _this);\n};\n_s(Obj, \"PoCMKBRFUuHjz0y7odtmo4vjNbw=\");\n_c = Obj;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obj);\nvar _c;\n$RefreshReg$(_c, \"Obj\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L19OX0UvLi9jb21wb25lbnRzLzNkLmpzP2RiZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsQmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxufVxuXG5jb25zdCBPYmogPSAoKSA9PiB7XG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcbiAgICBjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgWyByZW5kZXJlciwgc2V0UmVuZGVyZXIgXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbIF9jYW1lcmEsIHNldENhbWVyYSBdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFsgdGFyZ2V0IF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxuICAgIGNvbnN0IFsgaW5pdGlhbENhbWVyYVBvc2l0aW9uIF0gPSB1c2VTdGF0ZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgICAyMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyMCAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXG4gICAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBbIHNjZW5lIF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgICBjb25zdCBbIF9jb250cm9scywgc2V0Q29udHJvbHMgXSA9IHVzZVN0YXRlKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSCApXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgICAgNTAwMDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcblxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDY1NiwgMC43KVxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcblxuICAgICAgICAgICAgY29uc3QgZGwgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmYsIDAuNylcbiAgICAgICAgICAgIGRsLnBvc2l0aW9uLnNldCgwLCAxLCAyKVxuICAgICAgICAgICAgY29uc3QgaGVscGVyID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHRIZWxwZXIoZGwsIDMpXG4gICAgICAgICAgICBoZWxwZXIuY2FzdFNoYWRvdyA9IHRydWVcbiAgICAgICAgICAgIHNjZW5lLmFkZCggZGwgKVxuXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgIGNvbnRyb2xzLmVuYWJsZVpvb20gPSBmYWxzZVxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXG5cbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpXG5cbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbFRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoJy9wdWJsaWMvbm9ybWFsLnBuZycpXG5cbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA1LCA1LCA1IClcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKDB4MjkyOSlcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKCB7IGNvbG9yOiBjb2xvcn0gKVxuICAgICAgICAgICAgbWF0ZXJpYWwubWV0YWxuZXNzID0gMTBcbiAgICAgICAgICAgIG1hdGVyaWFsLnJvdWdobmVzcyA9IDAuM1xuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKVxuICAgICAgICAgICAgc2NlbmUuYWRkKCBjdWJlIClcblxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcblxuICAgICAgICAgICAgICAgIGlmIChmcmFtZSA8PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxuXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcigpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKDxCb3ggcmVmPXtyZWZDb250YWluZXJ9IFxuICAgIGNsYXNzTmFtZT1cIjNkXCIgXG4gICAgbT1cImF1dG9cIiBcbiAgICBtdD17WyctMjBweCcsICctNjBweCcsICctMTIwcHgnXX0gXG4gICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfSBcbiAgICB3PXtbMjgwLCA0ODAsIDY0MF19IFxuICAgIGg9e1syODAsIDQ4MCwgNjQwXX0gXG4gICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiPntcbiAgICAgICAgbG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cIjUwJVwiIHRvcD1cIjUwJVwiIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIiBtdD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSlcIj48L1NwaW5uZXI+XG4gICAgICAgIClcbiAgICB9XG48L0JveD4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iaiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxCYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiT2JqIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImN1cnJlbnQiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJkbCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJzZXQiLCJoZWxwZXIiLCJEaXJlY3Rpb25hbExpZ2h0SGVscGVyIiwiY2FzdFNoYWRvdyIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsImVuYWJsZVpvb20iLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsIm5vcm1hbFRleHR1cmUiLCJsb2FkIiwiZ2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImNvbG9yIiwiQ29sb3IiLCJtYXRlcmlhbCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwiY3ViZSIsIk1lc2giLCJyZXEiLCJmcmFtZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsIm10IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/3d.js\n");

/***/ })

});