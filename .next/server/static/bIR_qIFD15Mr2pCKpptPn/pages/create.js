module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aIwK");


/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aIwK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2wwy");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rjN7");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xUX2");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const INITIAL_PRODUCT = {
  name: "",
  price: "",
  media: "",
  description: ""
};

function CreateProduct() {
  const [product, setProduct] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(INITIAL_PRODUCT);
  const [mediaPreview, setMediaPreview] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("");
  const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("");
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
    const isProduct = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(product).every(el => Boolean(el));

    isProduct ? setDisabled(false) : setDisabled(true);
  }, [product]);

  function handleChange(event) {
    const {
      name,
      value,
      files
    } = event.target;

    if (name === "media") {
      setProduct(prevState => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState, {
        media: files[0]
      }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct(prevState => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState, {
        [name]: value
      }));
    }
  }

  async function handleImageUpload() {
    const data = new FormData();
    data.append("file", product.media);
    data.append("upload_preset", "reactreserve");
    data.append("cloud_name", "reedbargercodes");
    const response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("<insert-cloudinary-url>", data);
    const mediaUrl = response.data.url;
    return mediaUrl;
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError("");
      const mediaUrl = await handleImageUpload();
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]}/api/product`;
      const {
        name,
        price,
        description
      } = product;
      const payload = {
        name,
        price,
        description,
        mediaUrl
      };
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, payload);
      setProduct(INITIAL_PRODUCT);
      setSuccess(true);
    } catch (error) {
      Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h2",
    block: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "add",
    color: "orange"
  }), "Create New Product"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    loading: loading,
    error: Boolean(error),
    success: success,
    onSubmit: handleSubmit
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
    error: true,
    header: "Oops!",
    content: error
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
    success: true,
    icon: "check",
    header: "Success!",
    content: "Your product has been posted"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"],
    name: "name",
    label: "Name",
    placeholder: "Name",
    value: product.name,
    onChange: handleChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"],
    name: "price",
    label: "Price",
    placeholder: "Price",
    min: "0.00",
    step: "0.01",
    type: "number",
    value: product.price,
    onChange: handleChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"],
    name: "media",
    type: "file",
    label: "Media",
    accept: "image/*",
    content: "Select Image",
    onChange: handleChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true,
    size: "small"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["TextArea"],
    name: "description",
    label: "Description",
    placeholder: "Description",
    onChange: handleChange,
    value: product.description
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"],
    disabled: disabled || loading,
    color: "blue",
    icon: "pencil alternate",
    content: "Submit",
    type: "submit"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateProduct);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rjN7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseUrl =  true ? "https://react-reserve.now.sh" : undefined;
/* harmony default export */ __webpack_exports__["a"] = (baseUrl);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "xUX2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function catchErrors(error, displayError) {
  let errorMsg;

  if (error.response) {
    // The request was made and the server responsed with a status code that is not in the range of 2XX
    errorMsg = error.response.data;
    console.error("Error response", errorMsg); // For Cloudinary image uploads

    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // The request was made, but no response was received
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    // Something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.error("Error message", errorMsg);
  }

  displayError(errorMsg);
}

/* harmony default export */ __webpack_exports__["a"] = (catchErrors);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });