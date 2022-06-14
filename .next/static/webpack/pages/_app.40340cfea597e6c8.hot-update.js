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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Obj = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(\"rgb(255, 193, 143)\", 0.7);\n            scene.add(ambientLight);\n            var dl = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(\"rgb(143, 205, 255)\", 1);\n            dl.position.set(5, 1, 2);\n            var helper = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLightHelper(dl, 3);\n            scene.add(dl);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            controls.enableZoom = false;\n            setControls(controls);\n            var textureLoader = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader();\n            var normalTexture = textureLoader.load(\"/public/normal.png\");\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(5, 5, 5);\n            var color = new three__WEBPACK_IMPORTED_MODULE_3__.Color(\"rgb(255, 193, 143)\");\n            var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshStandardMaterial({\n                color: color\n            });\n            material.metalness = 0.7;\n            var cube = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);\n            scene.add(cube);\n            var req = null;\n            var frame = 0;\n            var render = function() {\n                req = requestAnimationFrame(render);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            render();\n            setLoading(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        ref: refContainer,\n        className: \"3d\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n            lineNumber: 115,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n        lineNumber: 106,\n        columnNumber: 13\n    }, _this);\n};\n_s(Obj, \"PoCMKBRFUuHjz0y7odtmo4vjNbw=\");\n_c = Obj;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obj);\nvar _c;\n$RefreshReg$(_c, \"Obj\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ2EsR0FBRyxDQUFDNEQsUUFBUSxDQUFDO29CQUN2RWxDLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDL0IsTUFBTSxDQUFDO2lCQUN4QixNQUNJO29CQUNEd0MsUUFBUSxDQUFDd0IsTUFBTSxFQUFFO2lCQUNwQjtnQkFDRHJFLFNBQVEsQ0FBQytELE1BQU0sQ0FBQ3BELEtBQUssRUFBRXFCLE1BQU0sQ0FBQzthQUNqQztZQUNEK0IsTUFBTSxFQUFFO1lBQ1JoRSxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ3BCO0tBQ0osRUFBRSxFQUFFLENBQUM7SUFFTixxQkFBUSw4REFBQ1osaURBQUc7UUFBQ21GLEdBQUcsRUFBRXpFLFlBQVk7UUFDOUIwRSxTQUFTLEVBQUMsSUFBSTtRQUNkQyxDQUFDLEVBQUMsTUFBTTtRQUNSQyxFQUFFLEVBQUU7WUFBQyxPQUFPO1lBQUUsT0FBTztZQUFFLFFBQVE7U0FBQztRQUNoQ0MsRUFBRSxFQUFFO1lBQUMsT0FBTztZQUFFLFFBQVE7WUFBRSxRQUFRO1NBQUM7UUFDakNDLENBQUMsRUFBRTtBQUFDLGVBQUc7QUFBRSxlQUFHO0FBQUUsZUFBRztTQUFDO1FBQ2xCQyxDQUFDLEVBQUU7QUFBQyxlQUFHO0FBQUUsZUFBRztBQUFFLGVBQUc7U0FBQztRQUNsQjFDLFFBQVEsRUFBQyxVQUFVO2tCQUNmcEMsT0FBTyxrQkFDSCw4REFBQ1YscURBQU87WUFBQ3lGLElBQUksRUFBQyxJQUFJO1lBQUMzQyxRQUFRLEVBQUMsVUFBVTtZQUFDNEMsSUFBSSxFQUFDLEtBQUs7WUFBQ0MsR0FBRyxFQUFDLEtBQUs7WUFBQ0MsRUFBRSxFQUFDLHFDQUFxQztZQUFDUCxFQUFFLEVBQUMsaUNBQWlDOzs7OztpQkFBVzs7Ozs7YUFHMUosQ0FBQztDQUNOO0dBN0dLN0UsR0FBRztBQUFIQSxLQUFBQSxHQUFHO0FBK0dULCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvM2QuanM/ZGJkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxCYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5cbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpXG59XG5cbmNvbnN0IE9iaiA9ICgpID0+IHtcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbIHJlbmRlcmVyLCBzZXRSZW5kZXJlciBdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFsgX2NhbWVyYSwgc2V0Q2FtZXJhIF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgWyB0YXJnZXQgXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCkpXG4gICAgY29uc3QgWyBpbml0aWFsQ2FtZXJhUG9zaXRpb24gXSA9IHVzZVN0YXRlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IFsgc2NlbmUgXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxuICAgIGNvbnN0IFsgX2NvbnRyb2xzLCBzZXRDb250cm9scyBdID0gdXNlU3RhdGUoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIIClcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxuXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44XG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgICAgICA1MDAwMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxuXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCdyZ2IoMjU1LCAxOTMsIDE0MyknLCAwLjcpXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxuXG4gICAgICAgICAgICBjb25zdCBkbCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCdyZ2IoMTQzLCAyMDUsIDI1NSknLCAxKVxuICAgICAgICAgICAgZGwucG9zaXRpb24uc2V0KDUsIDEsIDIpXG4gICAgICAgICAgICBjb25zdCBoZWxwZXIgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodEhlbHBlcihkbCwgMylcbiAgICAgICAgICAgIHNjZW5lLmFkZCggZGwgKVxuXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgIGNvbnRyb2xzLmVuYWJsZVpvb20gPSBmYWxzZVxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXG5cbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpXG5cbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbFRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoJy9wdWJsaWMvbm9ybWFsLnBuZycpXG5cbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA1LCA1LCA1IClcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKFwicmdiKDI1NSwgMTkzLCAxNDMpXCIpXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCggeyBjb2xvcjogY29sb3J9IClcbiAgICAgICAgICAgIG1hdGVyaWFsLm1ldGFsbmVzcyA9IDAuN1xuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKVxuICAgICAgICAgICAgc2NlbmUuYWRkKCBjdWJlIClcblxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcblxuICAgICAgICAgICAgICAgIGlmIChmcmFtZSA8PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxuXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcigpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKDxCb3ggcmVmPXtyZWZDb250YWluZXJ9IFxuICAgIGNsYXNzTmFtZT1cIjNkXCIgXG4gICAgbT1cImF1dG9cIiBcbiAgICBtdD17WyctMjBweCcsICctNjBweCcsICctMTIwcHgnXX0gXG4gICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfSBcbiAgICB3PXtbMjgwLCA0ODAsIDY0MF19IFxuICAgIGg9e1syODAsIDQ4MCwgNjQwXX0gXG4gICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiPntcbiAgICAgICAgbG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cIjUwJVwiIHRvcD1cIjUwJVwiIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIiBtdD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSlcIj48L1NwaW5uZXI+XG4gICAgICAgIClcbiAgICB9XG48L0JveD4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iaiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxCYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiT2JqIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImN1cnJlbnQiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJkbCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJzZXQiLCJoZWxwZXIiLCJEaXJlY3Rpb25hbExpZ2h0SGVscGVyIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwiZW5hYmxlWm9vbSIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwibm9ybWFsVGV4dHVyZSIsImxvYWQiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiY29sb3IiLCJDb2xvciIsIm1hdGVyaWFsIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJtZXRhbG5lc3MiLCJjdWJlIiwiTWVzaCIsInJlcSIsImZyYW1lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwibXQiLCJtYiIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiLCJtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/3d.js\n");

/***/ })

});