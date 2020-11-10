module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/atoms/input.tsx":
/*!************************************!*\
  !*** ./components/atoms/input.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/patrycjabuczkowska/Documents/Patio/Dev-projects/cosi-challenge/components/atoms/input.tsx\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  name,\n  type = \"text\",\n  placeholder,\n  value,\n  onChange,\n  className = null,\n  register = null // used for registering validation rules\n\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      className: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline ${className}`,\n      type: type,\n      value: value,\n      onChange: onChange,\n      name: name,\n      placeholder: placeholder,\n      ref: register\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL2lucHV0LnRzeD83OWE5Il0sIm5hbWVzIjpbIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxnRUFBQztBQUNkQSxNQURjO0FBRWRDLE1BQUksR0FBRyxNQUZPO0FBR2RDLGFBSGM7QUFJZEMsT0FKYztBQUtkQyxVQUxjO0FBTWRDLFdBQVMsR0FBRyxJQU5FO0FBT2RDLFVBQVEsR0FBRyxJQVBHLENBT0c7O0FBUEgsQ0FBRCxLQVFUO0FBQ0osc0JBQ0U7QUFBQSwyQkFDRTtBQUNFLGVBQVMsRUFBRyx1SUFBc0lELFNBQVUsRUFEOUo7QUFFRSxVQUFJLEVBQUVKLElBRlI7QUFHRSxXQUFLLEVBQUVFLEtBSFQ7QUFJRSxjQUFRLEVBQUVDLFFBSlo7QUFLRSxVQUFJLEVBQUVKLElBTFI7QUFNRSxpQkFBVyxFQUFFRSxXQU5mO0FBT0UsU0FBRyxFQUFFSTtBQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWFELENBdEJEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hdG9tcy9pbnB1dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIG5hbWUsXG4gIHR5cGUgPSBcInRleHRcIixcbiAgcGxhY2Vob2xkZXIsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgY2xhc3NOYW1lID0gbnVsbCxcbiAgcmVnaXN0ZXIgPSBudWxsLCAvLyB1c2VkIGZvciByZWdpc3RlcmluZyB2YWxpZGF0aW9uIHJ1bGVzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2BzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBiZy13aGl0ZSBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSAke2NsYXNzTmFtZX1gfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atoms/input.tsx\n");

/***/ }),

/***/ "./components/atoms/spinner.tsx":
/*!**************************************!*\
  !*** ./components/atoms/spinner.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/patrycjabuczkowska/Documents/Patio/Dev-projects/cosi-challenge/components/atoms/spinner.tsx\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      className: \"animate-spin ml-1 mr-3 h-5 w-5 text-white\",\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        className: \"opacity-25\",\n        cx: \"12\",\n        cy: \"12\",\n        r: \"10\",\n        stroke: \"lightblue\",\n        strokeWidth: \"4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        className: \"opacity-75\",\n        fill: \"blue\",\n        d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, undefined);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL3NwaW5uZXIudHN4P2Q5OTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZSxxRUFBTTtBQUNuQixzQkFDRTtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxFQUFDLDJDQURaO0FBRUUsV0FBSyxFQUFDLDRCQUZSO0FBR0UsVUFBSSxFQUFDLE1BSFA7QUFJRSxhQUFPLEVBQUMsV0FKVjtBQUFBLDhCQU1FO0FBQ0UsaUJBQVMsRUFBQyxZQURaO0FBRUUsVUFBRSxFQUFDLElBRkw7QUFHRSxVQUFFLEVBQUMsSUFITDtBQUlFLFNBQUMsRUFBQyxJQUpKO0FBS0UsY0FBTSxFQUFDLFdBTFQ7QUFNRSxtQkFBVyxFQUFDO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQWNFO0FBQ0UsaUJBQVMsRUFBQyxZQURaO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxTQUFDLEVBQUM7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdCRCxDQXpCRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXRvbXMvc3Bpbm5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIG1sLTEgbXItMyBoLTUgdy01IHRleHQtd2hpdGVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgID5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMjVcIlxuICAgICAgICAgIGN4PVwiMTJcIlxuICAgICAgICAgIGN5PVwiMTJcIlxuICAgICAgICAgIHI9XCIxMFwiXG4gICAgICAgICAgc3Ryb2tlPVwibGlnaHRibHVlXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxuICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS03NVwiXG4gICAgICAgICAgZmlsbD1cImJsdWVcIlxuICAgICAgICAgIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3pcIlxuICAgICAgICA+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/spinner.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index */ \"./store/index.ts\");\n/* harmony import */ var _components_atoms_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/atoms/spinner */ \"./components/atoms/spinner.tsx\");\n/* harmony import */ var _components_atoms_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/atoms/input */ \"./components/atoms/input.tsx\");\n\nvar _jsxFileName = \"/Users/patrycjabuczkowska/Documents/Patio/Dev-projects/cosi-challenge/pages/index.tsx\";\n\n\n\n\n\n\n\n\n\nconst mapStateToProps = state => ({\n  flightNumber: state.flightNumber\n});\n\nconst mapDispatchToProps = {\n  signin: _store_index__WEBPACK_IMPORTED_MODULE_6__[\"signin\"]\n};\n\nconst Home = ({\n  signin\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  const {\n    register,\n    handleSubmit,\n    errors\n  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"])({\n    mode: \"onBlur\"\n  });\n  const {\n    0: flightNumber,\n    1: setFlightNumber\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\");\n  const {\n    0: lastName,\n    1: setLastName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\");\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n\n  const onSubmit = async () => {\n    try {\n      setLoading(true);\n      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"/api/passenger\", {\n        flightNumber,\n        lastName\n      });\n      signin({\n        flightNumber,\n        lastName\n      });\n      router.push(\"checkin\");\n    } catch (err) {\n      console.error(err);\n    }\n\n    setLoading(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    className: \"container m-auto h-full px-4 md:px-16 w-full md:w-1/2\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: \"h-full flex flex-col justify-center\",\n      onSubmit: handleSubmit(onSubmit),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/trip.gif\",\n        alt: \"description of gif\",\n        className: \"flex self-center w-64 h-64 mb-8 rounded-xl overflow-hidden shadow-2xl\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-4 text-xl md:text-2xl\",\n        children: \"Welcome to your web check-in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mb-2\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_atoms_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          name: \"flightNumber\",\n          placeholder: \"Flight #\",\n          value: flightNumber,\n          onChange: event => setFlightNumber(event.target.value),\n          register: register({\n            required: {\n              value: true,\n              message: \"Please enter your flight number\"\n            },\n            minLength: {\n              value: 6,\n              message: \"Your flight number must be at least 6 characters\"\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, undefined), errors.flightNumber && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"text-red-500\",\n          children: errors.flightNumber.message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_atoms_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        type: \"text\",\n        value: lastName,\n        name: \"lastName\",\n        onChange: event => setLastName(event.target.value),\n        placeholder: \"Last name\",\n        register: register({\n          required: {\n            value: true,\n            message: \"Please enter your last name\"\n          }\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, undefined), errors.lastName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-red-500\",\n        children: errors.lastName.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        className: \"flex justify-between mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow\",\n        children: [\"Search flight\", loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_atoms_spinner__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 23\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Home));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImZsaWdodE51bWJlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInNpZ25pbiIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZUZvcm0iLCJtb2RlIiwic2V0RmxpZ2h0TnVtYmVyIiwidXNlU3RhdGUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtaW5MZW5ndGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDQyxjQUFZLEVBQUVELEtBQUssQ0FBQ0M7QUFEYyxDQUFaLENBQXhCOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHO0FBQ3pCQyxRQUFNLEVBQUVBLG1EQUFNQTtBQURXLENBQTNCOztBQUlBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVEO0FBQUYsQ0FBRCxLQUFnQjtBQUMzQixRQUFNRSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFFQyxZQUFGO0FBQVlDLGdCQUFaO0FBQTBCQztBQUExQixNQUFxQ0MsK0RBQU8sQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELENBQWxEO0FBRUEsUUFBTTtBQUFBLE9BQUNWLFlBQUQ7QUFBQSxPQUFlVztBQUFmLE1BQWtDQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFDQSxR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QyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNkRELENBdEZEOztBQXdGZWdCLDBIQUFPLENBQUNqQyxlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q0UsSUFBN0MsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc2lnbmluIH0gZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9hdG9tcy9zcGlubmVyXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXRvbXMvaW5wdXRcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBmbGlnaHROdW1iZXI6IHN0YXRlLmZsaWdodE51bWJlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHNpZ25pbjogc2lnbmluLFxufTtcblxuY29uc3QgSG9tZSA9ICh7IHNpZ25pbiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKHsgbW9kZTogXCJvbkJsdXJcIiB9KTtcblxuICBjb25zdCBbZmxpZ2h0TnVtYmVyLCBzZXRGbGlnaHROdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcGFzc2VuZ2VyXCIsIHtcbiAgICAgICAgZmxpZ2h0TnVtYmVyLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgIH0pO1xuICAgICAgc2lnbmluKHsgZmxpZ2h0TnVtYmVyLCBsYXN0TmFtZSB9KTtcblxuICAgICAgcm91dGVyLnB1c2goXCJjaGVja2luXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLWF1dG8gaC1mdWxsIHB4LTQgbWQ6cHgtMTYgdy1mdWxsIG1kOnctMS8yXCI+XG4gICAgICA8Zm9ybVxuICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy90cmlwLmdpZlwiXG4gICAgICAgICAgYWx0PVwiZGVzY3JpcHRpb24gb2YgZ2lmXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHNlbGYtY2VudGVyIHctNjQgaC02NCBtYi04IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGxcIlxuICAgICAgICAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXhsIG1kOnRleHQtMnhsXCI+XG4gICAgICAgICAgV2VsY29tZSB0byB5b3VyIHdlYiBjaGVjay1pblxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJmbGlnaHROdW1iZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGbGlnaHQgI1wiXG4gICAgICAgICAgICB2YWx1ZT17ZmxpZ2h0TnVtYmVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RmxpZ2h0TnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXIoe1xuICAgICAgICAgICAgICByZXF1aXJlZDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIHlvdXIgZmxpZ2h0IG51bWJlclwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtaW5MZW5ndGg6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogNixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgZmxpZ2h0IG51bWJlciBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZXJyb3JzLmZsaWdodE51bWJlciAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcnMuZmxpZ2h0TnVtYmVyLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XG4gICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRMYXN0TmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lXCJcbiAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXIoe1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIHlvdXIgbGFzdCBuYW1lXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICAgICB7ZXJyb3JzLmxhc3ROYW1lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcnMubGFzdE5hbWUubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTQgdGV4dC1jZW50ZXIgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgc2hhZG93XCJcbiAgICAgICAgPlxuICAgICAgICAgIFNlYXJjaCBmbGlnaHRcbiAgICAgICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! exports provided: SIGNIN, signin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGNIN\", function() { return SIGNIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// More information: https://dev.to/waqasabbasi/server-side-rendered-app-with-next-js-react-and-redux-38gf\n\n\nconst SIGNIN = 'SIGNIN';\nconst signin = payload => ({\n  type: SIGNIN,\n  payload\n});\nconst DEFAULT_STATE = {\n  flightNumber: null,\n  lastName: null\n};\n\nconst passengerReducer = (state = DEFAULT_STATE, action) => {\n  switch (action.type) {\n    case SIGNIN:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        flightNumber: action.payload.flightNumber,\n        lastName: action.payload.lastName\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  passenger: passengerReducer\n});\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(rootReducer);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC50cz81OThhIl0sIm5hbWVzIjpbIlNJR05JTiIsInNpZ25pbiIsInBheWxvYWQiLCJ0eXBlIiwiREVGQVVMVF9TVEFURSIsImZsaWdodE51bWJlciIsImxhc3ROYW1lIiwicGFzc2VuZ2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwYXNzZW5nZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLE1BQU0sR0FBRyxRQUFmO0FBRUEsTUFBTUMsTUFBTSxHQUFJQyxPQUFELEtBQWM7QUFDbENDLE1BQUksRUFBRUgsTUFENEI7QUFFbENFO0FBRmtDLENBQWQsQ0FBZjtBQUtQLE1BQU1FLGFBQWEsR0FBRztBQUFFQyxjQUFZLEVBQUUsSUFBaEI7QUFBc0JDLFVBQVEsRUFBRTtBQUFoQyxDQUF0Qjs7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDQyxLQUFLLEdBQUdKLGFBQVQsRUFBd0JLLE1BQXhCLEtBQW1DO0FBQzFELFVBQVFBLE1BQU0sQ0FBQ04sSUFBZjtBQUNFLFNBQUtILE1BQUw7QUFDRSw2Q0FDS1EsS0FETDtBQUVFSCxvQkFBWSxFQUFFSSxNQUFNLENBQUNQLE9BQVAsQ0FBZUcsWUFGL0I7QUFHRUMsZ0JBQVEsRUFBRUcsTUFBTSxDQUFDUCxPQUFQLENBQWVJO0FBSDNCOztBQUtGO0FBQ0UsK0JBQVdFLEtBQVg7QUFSSjtBQVVELENBWEQ7O0FBYUEsTUFBTUUsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxXQUFTLEVBQUVMO0FBRHVCLENBQUQsQ0FBbkM7QUFJQSxNQUFNTSxLQUFLLEdBQUdDLHlEQUFXLENBQ3ZCSixXQUR1QixDQUF6QjtBQUllRyxvRUFBZiIsImZpbGUiOiIuL3N0b3JlL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9yZSBpbmZvcm1hdGlvbjogaHR0cHM6Ly9kZXYudG8vd2FxYXNhYmJhc2kvc2VydmVyLXNpZGUtcmVuZGVyZWQtYXBwLXdpdGgtbmV4dC1qcy1yZWFjdC1hbmQtcmVkdXgtMzhnZlxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5cbmV4cG9ydCBjb25zdCBTSUdOSU4gPSAnU0lHTklOJ1xuXG5leHBvcnQgY29uc3Qgc2lnbmluID0gKHBheWxvYWQpID0+ICh7XG4gIHR5cGU6IFNJR05JTixcbiAgcGF5bG9hZFxufSlcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHsgZmxpZ2h0TnVtYmVyOiBudWxsLCBsYXN0TmFtZTogbnVsbCB9XG5cbmNvbnN0IHBhc3NlbmdlclJlZHVjZXIgPSAoc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0lHTklOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZsaWdodE51bWJlcjogYWN0aW9uLnBheWxvYWQuZmxpZ2h0TnVtYmVyLFxuICAgICAgICBsYXN0TmFtZTogYWN0aW9uLnBheWxvYWQubGFzdE5hbWVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZX1cbiAgfVxufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHBhc3NlbmdlcjogcGFzc2VuZ2VyUmVkdWNlclxufSlcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcm9vdFJlZHVjZXJcbilcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIj9kZmM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWhvb2stZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-hook-form\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });