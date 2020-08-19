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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cdae");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cdae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// CONCATENATED MODULE: ./utils/formatDate.js
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US");
}

/* harmony default export */ var utils_formatDate = (formatDate);
// CONCATENATED MODULE: ./components/Account/AccountHeader.js

var __jsx = external_react_default.a.createElement;



function AccountHeader({
  role,
  email,
  name,
  createdAt
}) {
  return __jsx(external_semantic_ui_react_["Segment"], {
    secondary: true,
    inverted: true,
    color: "violet"
  }, __jsx(external_semantic_ui_react_["Label"], {
    color: "teal",
    size: "large",
    ribbon: true,
    icon: "privacy",
    style: {
      textTransform: "capitalize"
    },
    content: role
  }), __jsx(external_semantic_ui_react_["Header"], {
    inverted: true,
    textAlign: "center",
    as: "h1",
    icon: true
  }, __jsx(external_semantic_ui_react_["Icon"], {
    name: "user"
  }), name, __jsx(external_semantic_ui_react_["Header"].Subheader, null, email), __jsx(external_semantic_ui_react_["Header"].Subheader, null, "Joined ", utils_formatDate(createdAt))));
}

/* harmony default export */ var Account_AccountHeader = (AccountHeader);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Account/AccountOrders.js

var AccountOrders_jsx = external_react_default.a.createElement;




function AccountOrders({
  orders
}) {
  const router = Object(router_["useRouter"])();

  function mapOrdersToPanels(orders) {
    return orders.map(order => ({
      key: order._id,
      title: {
        content: AccountOrders_jsx(external_semantic_ui_react_["Label"], {
          color: "blue",
          content: utils_formatDate(order.createdAt)
        })
      },
      content: {
        content: AccountOrders_jsx(external_react_default.a.Fragment, null, AccountOrders_jsx(external_semantic_ui_react_["List"].Header, {
          as: "h3"
        }, "Total: $", order.total, AccountOrders_jsx(external_semantic_ui_react_["Label"], {
          content: order.email,
          icon: "mail",
          basic: true,
          horizontal: true,
          style: {
            marginLeft: "1em"
          }
        })), AccountOrders_jsx(external_semantic_ui_react_["List"], null, order.products.map(p => AccountOrders_jsx(external_semantic_ui_react_["List"].Item, {
          key: p.product._id
        }, AccountOrders_jsx(external_semantic_ui_react_["Image"], {
          avatar: true,
          src: p.product.mediaUrl
        }), AccountOrders_jsx(external_semantic_ui_react_["List"].Content, null, AccountOrders_jsx(external_semantic_ui_react_["List"].Header, null, p.product.name), AccountOrders_jsx(external_semantic_ui_react_["List"].Description, null, p.quantity, " \xB7 $", p.product.price)), AccountOrders_jsx(external_semantic_ui_react_["List"].Content, {
          floated: "right"
        }, AccountOrders_jsx(external_semantic_ui_react_["Label"], {
          tag: true,
          color: "red",
          size: "tiny"
        }, p.product.sku))))))
      }
    }));
  }

  return AccountOrders_jsx(external_react_default.a.Fragment, null, AccountOrders_jsx(external_semantic_ui_react_["Header"], {
    as: "h2"
  }, AccountOrders_jsx(external_semantic_ui_react_["Icon"], {
    name: "folder open"
  }), "Order History"), orders.length === 0 ? AccountOrders_jsx(external_semantic_ui_react_["Segment"], {
    inverted: true,
    tertiary: true,
    color: "grey",
    textAlign: "center"
  }, AccountOrders_jsx(external_semantic_ui_react_["Header"], {
    icon: true
  }, AccountOrders_jsx(external_semantic_ui_react_["Icon"], {
    name: "copy outline"
  }), "No past orders."), AccountOrders_jsx("div", null, AccountOrders_jsx(external_semantic_ui_react_["Button"], {
    onClick: () => router.push("/"),
    color: "orange"
  }, "View Products"))) : AccountOrders_jsx(external_semantic_ui_react_["Accordion"], {
    fluid: true,
    styled: true,
    exclusive: false,
    panels: mapOrdersToPanels(orders)
  }));
}

/* harmony default export */ var Account_AccountOrders = (AccountOrders);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// CONCATENATED MODULE: ./components/Account/AccountPermissions.js
var AccountPermissions_jsx = external_react_default.a.createElement;







function AccountPermissions() {
  const [users, setUsers] = external_react_default.a.useState([]);
  external_react_default.a.useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const url = `${baseUrl["a" /* default */]}/api/users`;
    const token = external_js_cookie_default.a.get("token");
    const payload = {
      headers: {
        Authorization: token
      }
    };
    const response = await external_axios_default.a.get(url, payload);
    setUsers(response.data);
  }

  return AccountPermissions_jsx("div", {
    style: {
      margin: "2em 0"
    }
  }, AccountPermissions_jsx(external_semantic_ui_react_["Header"], {
    as: "h2"
  }, AccountPermissions_jsx(external_semantic_ui_react_["Icon"], {
    name: "settings"
  }), "User Permissions"), AccountPermissions_jsx(external_semantic_ui_react_["Table"], {
    compact: true,
    celled: true,
    definition: true
  }, AccountPermissions_jsx(external_semantic_ui_react_["Table"].Header, null, AccountPermissions_jsx(external_semantic_ui_react_["Table"].Row, null, AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Name"), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Email"), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Joined"), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Updated"), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Role"))), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Body, null, users.map(user => AccountPermissions_jsx(UserPermission, {
    key: user._id,
    user: user
  })))));
}

function UserPermission({
  user
}) {
  const [admin, setAdmin] = external_react_default.a.useState(user.role === "admin");
  const isFirstRun = external_react_default.a.useRef(true);
  external_react_default.a.useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    updatePermission();
  }, [admin]);

  function handleChangePermission() {
    setAdmin(prevState => !prevState);
  }

  async function updatePermission() {
    const url = `${baseUrl["a" /* default */]}/api/account`;
    const payload = {
      _id: user._id,
      role: admin ? "admin" : "user"
    };
    await external_axios_default.a.put(url, payload);
  }

  return AccountPermissions_jsx(external_semantic_ui_react_["Table"].Row, null, AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, {
    collapsing: true
  }, AccountPermissions_jsx(external_semantic_ui_react_["Checkbox"], {
    checked: admin,
    toggle: true,
    onChange: handleChangePermission
  })), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, user.name), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, user.email), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, utils_formatDate(user.createdAt)), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, utils_formatDate(user.updatedAt)), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, admin ? "admin" : "user"));
}

/* harmony default export */ var Account_AccountPermissions = (AccountPermissions);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__("kG9d");

// CONCATENATED MODULE: ./pages/account.js

var account_jsx = external_react_default.a.createElement;







function Account({
  user,
  orders
}) {
  return account_jsx(external_react_default.a.Fragment, null, account_jsx(Account_AccountHeader, user), account_jsx(Account_AccountOrders, {
    orders: orders
  }), user.role === "root" && account_jsx(Account_AccountPermissions, null));
}

Account.getInitialProps = async ctx => {
  const {
    token
  } = Object(external_nookies_["parseCookies"])(ctx);

  if (!token) {
    return {
      orders: []
    };
  }

  const payload = {
    headers: {
      Authorization: token
    }
  };
  const url = `${baseUrl["a" /* default */]}/api/orders`;
  const response = await external_axios_default.a.get(url, payload);
  return response.data;
};

/* harmony default export */ var account = __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "kG9d":
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "rjN7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseUrl =  true ? "https://react-reserve.now.sh" : undefined;
/* harmony default export */ __webpack_exports__["a"] = (baseUrl);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });