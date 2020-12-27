webpackHotUpdate_N_E("pages/portfolio/user-interface",{

/***/ "./components/photo-grid/index.js":
/*!****************************************!*\
  !*** ./components/photo-grid/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ImageGallery; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/photo-grid/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image */ \"./components/image/index.js\");\n/* harmony import */ var _hooks_image_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/image-lightbox */ \"./hooks/image-lightbox.js\");\n/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-lightbox */ \"./node_modules/react-image-lightbox/dist/index.es.js\");\n\n\nvar _jsxFileName = \"/home/mostafa/Project/sarah-alirezaee/components/photo-grid/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar defaultAspectRatio = 347 / 195;\nfunction ImageGallery(_ref) {\n  _s();\n\n  var _this = this;\n\n  var images = _ref.images,\n      aspectRatio = _ref.aspectRatio;\n\n  var _useImageLightBox = Object(_hooks_image_lightbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(images.map(function (image) {\n    return image.src;\n  })),\n      isOpen = _useImageLightBox.isOpen,\n      setIsOpen = _useImageLightBox.setIsOpen,\n      setPhotoIndex = _useImageLightBox.setPhotoIndex,\n      mainSrc = _useImageLightBox.mainSrc,\n      prevSrc = _useImageLightBox.prevSrc,\n      nextSrc = _useImageLightBox.nextSrc,\n      onCloseRequest = _useImageLightBox.onCloseRequest,\n      onMoveNextRequest = _useImageLightBox.onMoveNextRequest,\n      onMovePrevRequest = _useImageLightBox.onMovePrevRequest;\n\n  function _onImageClick(image) {\n    var index = images.findIndex(function (img) {\n      return image === img;\n    });\n\n    if (index !== -1) {\n      setIsOpen(true);\n      setPhotoIndex(index);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.photoGrid,\n    children: [images.map(function (image, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        src: image.src,\n        alt: image.alt,\n        aspectRatio: aspectRatio || defaultAspectRatio,\n        onImageClick: function onImageClick() {\n          _onImageClick && _onImageClick(image);\n        }\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 25\n      }, _this);\n    }), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_image_lightbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      mainSrc: mainSrc(),\n      nextSrc: nextSrc(),\n      prevSrc: prevSrc(),\n      onCloseRequest: onCloseRequest,\n      onMovePrevRequest: onMovePrevRequest,\n      onMoveNextRequest: onMoveNextRequest\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ImageGallery, \"PO7hjKvlPgWfa0VoPSGv2E+2nlg=\", false, function () {\n  return [_hooks_image_lightbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = ImageGallery;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageGallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9waG90by1ncmlkL2luZGV4LmpzPzk0NTMiXSwibmFtZXMiOlsiZGVmYXVsdEFzcGVjdFJhdGlvIiwiSW1hZ2VHYWxsZXJ5IiwiaW1hZ2VzIiwiYXNwZWN0UmF0aW8iLCJ1c2VJbWFnZUxpZ2h0Qm94IiwibWFwIiwiaW1hZ2UiLCJzcmMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZXRQaG90b0luZGV4IiwibWFpblNyYyIsInByZXZTcmMiLCJuZXh0U3JjIiwib25DbG9zZVJlcXVlc3QiLCJvbk1vdmVOZXh0UmVxdWVzdCIsIm9uTW92ZVByZXZSZXF1ZXN0Iiwib25JbWFnZUNsaWNrIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpbWciLCJzdHlsZXMiLCJwaG90b0dyaWQiLCJhbHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxNQUFNLEdBQWpDO0FBRWUsU0FBU0MsWUFBVCxPQUErQztBQUFBOztBQUFBOztBQUFBLE1BQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7O0FBQUEsMEJBV3REQyxxRUFBZ0IsQ0FBQ0YsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsR0FBakI7QUFBQSxHQUFYLENBQUQsQ0FYc0M7QUFBQSxNQUV0REMsTUFGc0QscUJBRXREQSxNQUZzRDtBQUFBLE1BR3REQyxTQUhzRCxxQkFHdERBLFNBSHNEO0FBQUEsTUFJdERDLGFBSnNELHFCQUl0REEsYUFKc0Q7QUFBQSxNQUt0REMsT0FMc0QscUJBS3REQSxPQUxzRDtBQUFBLE1BTXREQyxPQU5zRCxxQkFNdERBLE9BTnNEO0FBQUEsTUFPdERDLE9BUHNELHFCQU90REEsT0FQc0Q7QUFBQSxNQVF0REMsY0FSc0QscUJBUXREQSxjQVJzRDtBQUFBLE1BU3REQyxpQkFUc0QscUJBU3REQSxpQkFUc0Q7QUFBQSxNQVV0REMsaUJBVnNELHFCQVV0REEsaUJBVnNEOztBQWExRCxXQUFTQyxhQUFULENBQXNCWCxLQUF0QixFQUE2QjtBQUN6QixRQUFNWSxLQUFLLEdBQUdoQixNQUFNLENBQUNpQixTQUFQLENBQWlCLFVBQUNDLEdBQUQ7QUFBQSxhQUFTZCxLQUFLLEtBQUtjLEdBQW5CO0FBQUEsS0FBakIsQ0FBZDs7QUFFQSxRQUFHRixLQUFLLEtBQUssQ0FBQyxDQUFkLEVBQWlCO0FBQ2JULGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUMsbUJBQWEsQ0FBQ1EsS0FBRCxDQUFiO0FBQ0g7QUFDSjs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBRUcsMERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSxlQUVRcEIsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRWSxLQUFSLEVBQWtCO0FBQ3pCLDBCQUNJLHFFQUFDLDhDQUFEO0FBRUksV0FBRyxFQUFFWixLQUFLLENBQUNDLEdBRmY7QUFHSSxXQUFHLEVBQUVELEtBQUssQ0FBQ2lCLEdBSGY7QUFJSSxtQkFBVyxFQUFFcEIsV0FBVyxJQUFJSCxrQkFKaEM7QUFLSSxvQkFBWSxFQUFFLHdCQUFNO0FBQUVpQix1QkFBWSxJQUFJQSxhQUFZLENBQUNYLEtBQUQsQ0FBNUI7QUFBcUM7QUFML0QsU0FDU1ksS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFTSCxLQVZELENBRlIsRUFnQlFWLE1BQU0saUJBQ0YscUVBQUMsNERBQUQ7QUFDSSxhQUFPLEVBQUVHLE9BQU8sRUFEcEI7QUFFSSxhQUFPLEVBQUVFLE9BQU8sRUFGcEI7QUFHSSxhQUFPLEVBQUVELE9BQU8sRUFIcEI7QUFJSSxvQkFBYyxFQUFFRSxjQUpwQjtBQUtJLHVCQUFpQixFQUFFRSxpQkFMdkI7QUFNSSx1QkFBaUIsRUFBRUQ7QUFOdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThCSDs7R0FwRHVCZCxZO1VBV2hCRyw2RDs7O0tBWGdCSCxZO0FBb0R2QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGhvdG8tZ3JpZC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltYWdlJztcbmltcG9ydCB1c2VJbWFnZUxpZ2h0Qm94IGZyb20gJy4uLy4uL2hvb2tzL2ltYWdlLWxpZ2h0Ym94JztcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XG5cbmNvbnN0IGRlZmF1bHRBc3BlY3RSYXRpbyA9IDM0NyAvIDE5NTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VHYWxsZXJ5KHsgaW1hZ2VzLCBhc3BlY3RSYXRpbyB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgICBpc09wZW4sXG4gICAgICAgIHNldElzT3BlbixcbiAgICAgICAgc2V0UGhvdG9JbmRleCxcbiAgICAgICAgbWFpblNyYyxcbiAgICAgICAgcHJldlNyYyxcbiAgICAgICAgbmV4dFNyYyxcbiAgICAgICAgb25DbG9zZVJlcXVlc3QsXG4gICAgICAgIG9uTW92ZU5leHRSZXF1ZXN0LFxuICAgICAgICBvbk1vdmVQcmV2UmVxdWVzdCxcbiAgICB9ID0gdXNlSW1hZ2VMaWdodEJveChpbWFnZXMubWFwKChpbWFnZSkgPT4gaW1hZ2Uuc3JjKSk7XG5cbiAgICBmdW5jdGlvbiBvbkltYWdlQ2xpY2soaW1hZ2UpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbWFnZXMuZmluZEluZGV4KChpbWcpID0+IGltYWdlID09PSBpbWcpO1xuXG4gICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc2V0SXNPcGVuKHRydWUpO1xuICAgICAgICAgICAgc2V0UGhvdG9JbmRleChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvR3JpZH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvPXthc3BlY3RSYXRpbyB8fCBkZWZhdWx0QXNwZWN0UmF0aW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbWFnZUNsaWNrPXsoKSA9PiB7IG9uSW1hZ2VDbGljayAmJiBvbkltYWdlQ2xpY2soaW1hZ2UpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc09wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8TGlnaHRib3hcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5TcmM9e21haW5TcmMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcmM9e25leHRTcmMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTcmM9e3ByZXZTcmMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VSZXF1ZXN0PXtvbkNsb3NlUmVxdWVzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVByZXZSZXF1ZXN0PXtvbk1vdmVQcmV2UmVxdWVzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZU5leHRSZXF1ZXN0PXtvbk1vdmVOZXh0UmVxdWVzdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/photo-grid/index.js\n");

/***/ })

})