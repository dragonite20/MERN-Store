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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("uhzS");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "rjN7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseUrl =  true ? "https://react-reserve.now.sh" : undefined;
/* harmony default export */ __webpack_exports__["a"] = (baseUrl);

/***/ }),

/***/ "uhzS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__("xUX2");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./components/Product/AddProductToCart.js
var __jsx = external_react_default.a.createElement;








function AddProductToCart({
  user,
  productId
}) {
  const [quantity, setQuantity] = external_react_default.a.useState(1);
  const [loading, setLoading] = external_react_default.a.useState(false);
  const [success, setSuccess] = external_react_default.a.useState(false);
  const router = Object(router_["useRouter"])();
  external_react_default.a.useEffect(() => {
    let timeout;

    if (success) {
      timeout = setTimeout(() => setSuccess(false), 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  async function handleAddProductToCart() {
    try {
      setLoading(true);
      const url = `${baseUrl["a" /* default */]}/api/cart`;
      const payload = {
        quantity,
        productId
      };
      const token = external_js_cookie_default.a.get("token");
      const headers = {
        headers: {
          Authorization: token
        }
      };
      await external_axios_default.a.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      Object(catchErrors["a" /* default */])(error, window.alert);
    } finally {
      setLoading(false);
    }
  }

  return __jsx(external_semantic_ui_react_["Input"], {
    type: "number",
    min: "1",
    placeholder: "Quantity",
    value: quantity,
    onChange: event => setQuantity(Number(event.target.value)),
    action: user && success ? {
      color: "blue",
      content: "Item Added!",
      icon: "plus cart",
      disabled: true
    } : user ? {
      color: "orange",
      content: "Add to Cart",
      icon: "plus cart",
      loading,
      disabled: loading,
      onClick: handleAddProductToCart
    } : {
      color: "blue",
      content: "Sign Up To Purchase",
      icon: "signup",
      onClick: () => router.push("/signup")
    }
  });
}

/* harmony default export */ var Product_AddProductToCart = (AddProductToCart);
// CONCATENATED MODULE: ./components/Product/ProductSummary.js

var ProductSummary_jsx = external_react_default.a.createElement;



function ProductSummary({
  name,
  mediaUrl,
  _id,
  price,
  sku,
  user
}) {
  return ProductSummary_jsx(external_semantic_ui_react_["Item"].Group, null, ProductSummary_jsx(external_semantic_ui_react_["Item"], null, ProductSummary_jsx(external_semantic_ui_react_["Item"].Image, {
    size: "medium",
    src: mediaUrl
  }), ProductSummary_jsx(external_semantic_ui_react_["Item"].Content, null, ProductSummary_jsx(external_semantic_ui_react_["Item"].Header, null, name), ProductSummary_jsx(external_semantic_ui_react_["Item"].Description, null, ProductSummary_jsx("p", null, "$", price), ProductSummary_jsx(external_semantic_ui_react_["Label"], null, "SKU: ", sku)), ProductSummary_jsx(external_semantic_ui_react_["Item"].Extra, null, ProductSummary_jsx(Product_AddProductToCart, {
    user: user,
    productId: _id
  })))));
}

/* harmony default export */ var Product_ProductSummary = (ProductSummary);
// CONCATENATED MODULE: ./components/Product/ProductAttributes.js
var ProductAttributes_jsx = external_react_default.a.createElement;






function ProductAttributes({
  description,
  _id,
  user
}) {
  const [modal, setModal] = external_react_default.a.useState(false);
  const router = Object(router_["useRouter"])();
  const isRoot = user && user.role === "root";
  const isAdmin = user && user.role === "admin";
  const isRootOrAdmin = isRoot || isAdmin;

  async function handleDelete() {
    const url = `${baseUrl["a" /* default */]}/api/product`;
    const payload = {
      params: {
        _id
      }
    };
    await external_axios_default.a.delete(url, payload);
    router.push("/");
  }

  return ProductAttributes_jsx(external_react_default.a.Fragment, null, ProductAttributes_jsx(external_semantic_ui_react_["Header"], {
    as: "h3"
  }, "About this product"), ProductAttributes_jsx("p", null, description), isRootOrAdmin && ProductAttributes_jsx(external_react_default.a.Fragment, null, ProductAttributes_jsx(external_semantic_ui_react_["Button"], {
    icon: "trash alternate outline",
    color: "red",
    content: "Delete Product",
    onClick: () => setModal(true)
  }), ProductAttributes_jsx(external_semantic_ui_react_["Modal"], {
    open: modal,
    dimmer: "blurring"
  }, ProductAttributes_jsx(external_semantic_ui_react_["Modal"].Header, null, "Confirm Delete"), ProductAttributes_jsx(external_semantic_ui_react_["Modal"].Content, null, ProductAttributes_jsx("p", null, "Are you sure you want to delete this product?")), ProductAttributes_jsx(external_semantic_ui_react_["Modal"].Actions, null, ProductAttributes_jsx(external_semantic_ui_react_["Button"], {
    onClick: () => setModal(false),
    content: "Cancel"
  }), ProductAttributes_jsx(external_semantic_ui_react_["Button"], {
    negative: true,
    icon: "trash",
    labelPosition: "right",
    content: "Delete",
    onClick: handleDelete
  })))));
}

/* harmony default export */ var Product_ProductAttributes = (ProductAttributes);
// CONCATENATED MODULE: ./pages/product.js


var product_jsx = external_react_default.a.createElement;





function Product({
  product,
  user
}) {
  return product_jsx(external_react_default.a.Fragment, null, product_jsx(Product_ProductSummary, _extends({
    user: user
  }, product)), product_jsx(Product_ProductAttributes, _extends({
    user: user
  }, product)));
}

Product.getInitialProps = async ({
  query: {
    _id
  }
}) => {
  const url = `${baseUrl["a" /* default */]}/api/product`;
  const payload = {
    params: {
      _id
    }
  };
  const response = await external_axios_default.a.get(url, payload);
  return {
    product: response.data
  };
};

/* harmony default export */ var pages_product = __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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

/***/ })

/******/ });