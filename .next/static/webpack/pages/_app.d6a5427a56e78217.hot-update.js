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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Obj = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(25 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW - 200, scH - 200);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xcccccc, 100);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            var textureLoader = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader();\n            var normalTexture = textureLoader.load(\"./public/normal.jpg\");\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.SphereGeometry(2, 4, 8);\n            var color = new three__WEBPACK_IMPORTED_MODULE_3__.Color(0x2929);\n            var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshStandardMaterial({\n                color: color\n            });\n            material.normalMap = normalTexture;\n            material.metalness = 0.7;\n            material.roughness = 0.3;\n            var sphere = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);\n            scene.add(sphere);\n            var req = null;\n            var frame = 0;\n            var render = function() {\n                req = requestAnimationFrame(render);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            render();\n            setLoading(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        ref: refContainer,\n        className: \"3d\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n            lineNumber: 111,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/connorabernethy/Portfolio/portfolio/components/3d.js\",\n        lineNumber: 102,\n        columnNumber: 13\n    }, _this);\n};\n_s(Obj, \"QtHT7GU4CTmRITUnRLYDPdATEso=\");\n_c = Obj;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obj);\nvar _c;\n$RefreshReg$(_c, \"Obj\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sRUFBRTtZQUNSNUQsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNwQjtLQUNKLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQVEsOERBQUNaLGlEQUFHO1FBQUMrRSxHQUFHLEVBQUVyRSxZQUFZO1FBQzlCc0UsU0FBUyxFQUFDLElBQUk7UUFDZEMsQ0FBQyxFQUFDLE1BQU07UUFDUkMsRUFBRSxFQUFFO1lBQUMsT0FBTztZQUFFLE9BQU87WUFBRSxRQUFRO1NBQUM7UUFDaENDLEVBQUUsRUFBRTtZQUFDLE9BQU87WUFBRSxRQUFRO1lBQUUsUUFBUTtTQUFDO1FBQ2pDQyxDQUFDLEVBQUU7QUFBQyxlQUFHO0FBQUUsZUFBRztBQUFFLGVBQUc7U0FBQztRQUNsQkMsQ0FBQyxFQUFFO0FBQUMsZUFBRztBQUFFLGVBQUc7QUFBRSxlQUFHO1NBQUM7UUFDbEJ0QyxRQUFRLEVBQUMsVUFBVTtrQkFDZnBDLE9BQU8sa0JBQ0gsOERBQUNWLHFEQUFPO1lBQUNxRixJQUFJLEVBQUMsSUFBSTtZQUFDdkMsUUFBUSxFQUFDLFVBQVU7WUFBQ3dDLElBQUksRUFBQyxLQUFLO1lBQUNDLEdBQUcsRUFBQyxLQUFLO1lBQUNDLEVBQUUsRUFBQyxxQ0FBcUM7WUFBQ1AsRUFBRSxFQUFDLGlDQUFpQzs7Ozs7aUJBQVc7Ozs7O2FBRzFKLENBQUM7Q0FDTjtHQXpHS3pFLEdBQUc7QUFBSEEsS0FBQUEsR0FBRztBQTJHVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzLzNkLmpzP2RiZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsQmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxufVxuXG5jb25zdCBPYmogPSAoKSA9PiB7XG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcbiAgICBjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgWyByZW5kZXJlciwgc2V0UmVuZGVyZXIgXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbIF9jYW1lcmEsIHNldENhbWVyYSBdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFsgdGFyZ2V0IF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxuICAgIGNvbnN0IFsgaW5pdGlhbENhbWVyYVBvc2l0aW9uIF0gPSB1c2VTdGF0ZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgICAyNSAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyMCAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXG4gICAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBbIHNjZW5lIF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgICBjb25zdCBbIF9jb250cm9scywgc2V0Q29udHJvbHMgXSA9IHVzZVN0YXRlKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1cgLSAyMDAsIHNjSCAtIDIwMClcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxuXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44XG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgICAgICA1MDAwMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxuXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxMDApXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxuXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxuXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKVxuXG4gICAgICAgICAgICBjb25zdCBub3JtYWxUZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKCcuL3B1YmxpYy9ub3JtYWwuanBnJylcblxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoIDIsIDQsIDggKVxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoMHgyOTI5KVxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoIHsgY29sb3I6IGNvbG9yfSApXG4gICAgICAgICAgICBtYXRlcmlhbC5ub3JtYWxNYXAgPSBub3JtYWxUZXh0dXJlXG4gICAgICAgICAgICBtYXRlcmlhbC5tZXRhbG5lc3MgPSAwLjdcbiAgICAgICAgICAgIG1hdGVyaWFsLnJvdWdobmVzcyA9IDAuM1xuICAgICAgICAgICAgY29uc3Qgc3BoZXJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApXG4gICAgICAgICAgICBzY2VuZS5hZGQoIHNwaGVyZSApXG5cbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcilcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lXG5cbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUgPD0gMTAwKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZSAvIDEyMCkgKiBNYXRoLlBJICogMjBcblxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gcC54ICogTWF0aC5jb3Mocm90U3BlZWQpICsgcC56ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXIoKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuICg8Qm94IHJlZj17cmVmQ29udGFpbmVyfSBcbiAgICBjbGFzc05hbWU9XCIzZFwiIFxuICAgIG09XCJhdXRvXCIgXG4gICAgbXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119IFxuICAgIG1iPXtbJy00MHB4JywgJy0xNDBweCcsICctMjAwcHgnXX0gXG4gICAgdz17WzI4MCwgNDgwLCA2NDBdfSBcbiAgICBoPXtbMjgwLCA0ODAsIDY0MF19IFxuICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIj57XG4gICAgICAgIGxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhsXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGxlZnQ9XCI1MCVcIiB0b3A9XCI1MCVcIiBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCIgbXQ9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkpXCI+PC9TcGlubmVyPlxuICAgICAgICApXG4gICAgfVxuPC9Cb3g+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmoiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsQmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIk9iaiIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjdXJyZW50IiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwidGV4dHVyZUxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJub3JtYWxUZXh0dXJlIiwibG9hZCIsImdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJjb2xvciIsIkNvbG9yIiwibWF0ZXJpYWwiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsIm5vcm1hbE1hcCIsIm1ldGFsbmVzcyIsInJvdWdobmVzcyIsInNwaGVyZSIsIk1lc2giLCJyZXEiLCJmcmFtZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsIm10IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/3d.js\n");

/***/ })

});