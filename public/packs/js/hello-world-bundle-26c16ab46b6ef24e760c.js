/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello-world-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hello-world-bundle.js":
/*!****************************************************!*\
  !*** ./app/javascript/packs/hello-world-bundle.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-on-rails */ "./node_modules/react-on-rails/node_package/lib/ReactOnRails.js");
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_on_rails__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../bundles/HelloWorld/components/HelloWorld'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

 // This is how react_on_rails can see the HelloWorld in the browser.

react_on_rails__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  HelloWorld: !(function webpackMissingModule() { var e = new Error("Cannot find module '../bundles/HelloWorld/components/HelloWorld'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/Authenticity.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/Authenticity.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  authenticityToken: function authenticityToken() {
    var token = document.querySelector('meta[name="csrf-token"]');

    if (token && token instanceof window.HTMLMetaElement) {
      return token.content;
    }

    return null;
  },
  authenticityHeaders: function authenticityHeaders(otherHeaders) {
    if (otherHeaders === void 0) {
      otherHeaders = {};
    }

    return Object.assign(otherHeaders, {
      'X-CSRF-Token': this.authenticityToken(),
      'X-Requested-With': 'XMLHttpRequest'
    });
  }
};

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/ComponentRegistry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/ComponentRegistry.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isRenderFunction_1 = __importDefault(__webpack_require__(/*! ./isRenderFunction */ "./node_modules/react-on-rails/node_package/lib/isRenderFunction.js"));

var registeredComponents = new Map();
exports.default = {
  /**
   * @param components { component1: component1, component2: component2, etc. }
   */
  register: function register(components) {
    Object.keys(components).forEach(function (name) {
      if (registeredComponents.has(name)) {
        console.warn('Called register for component that is already registered', name);
      }

      var component = components[name];

      if (!component) {
        throw new Error("Called register with null component named " + name);
      }

      var renderFunction = isRenderFunction_1.default(component);
      var isRenderer = renderFunction && component.length === 3;
      registeredComponents.set(name, {
        name: name,
        component: component,
        renderFunction: renderFunction,
        isRenderer: isRenderer
      });
    });
  },

  /**
   * @param name
   * @returns { name, component, isRenderFunction, isRenderer }
   */
  get: function get(name) {
    if (registeredComponents.has(name)) {
      return registeredComponents.get(name);
    }

    var keys = Array.from(registeredComponents.keys()).join(', ');
    throw new Error("Could not find component registered with name " + name + ". Registered component names include [ " + keys + " ]. Maybe you forgot to register the component?");
  },

  /**
   * Get a Map containing all registered components. Useful for debugging.
   * @returns Map where key is the component name and values are the
   * { name, component, renderFunction, isRenderer}
   */
  components: function components() {
    return registeredComponents;
  }
};

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/ReactOnRails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/ReactOnRails.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_dom_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var ClientStartup = __importStar(__webpack_require__(/*! ./clientStartup */ "./node_modules/react-on-rails/node_package/lib/clientStartup.js"));

var handleError_1 = __importDefault(__webpack_require__(/*! ./handleError */ "./node_modules/react-on-rails/node_package/lib/handleError.js"));

var ComponentRegistry_1 = __importDefault(__webpack_require__(/*! ./ComponentRegistry */ "./node_modules/react-on-rails/node_package/lib/ComponentRegistry.js"));

var StoreRegistry_1 = __importDefault(__webpack_require__(/*! ./StoreRegistry */ "./node_modules/react-on-rails/node_package/lib/StoreRegistry.js"));

var serverRenderReactComponent_1 = __importDefault(__webpack_require__(/*! ./serverRenderReactComponent */ "./node_modules/react-on-rails/node_package/lib/serverRenderReactComponent.js"));

var buildConsoleReplay_1 = __importDefault(__webpack_require__(/*! ./buildConsoleReplay */ "./node_modules/react-on-rails/node_package/lib/buildConsoleReplay.js"));

var createReactOutput_1 = __importDefault(__webpack_require__(/*! ./createReactOutput */ "./node_modules/react-on-rails/node_package/lib/createReactOutput.js"));

var Authenticity_1 = __importDefault(__webpack_require__(/*! ./Authenticity */ "./node_modules/react-on-rails/node_package/lib/Authenticity.js"));

var context_1 = __importDefault(__webpack_require__(/*! ./context */ "./node_modules/react-on-rails/node_package/lib/context.js"));

var ctx = context_1.default();

if (ctx === undefined) {
  throw new Error("The context (usually Window or NodeJS's Global) is undefined.");
}

var DEFAULT_OPTIONS = {
  traceTurbolinks: false,
  turbo: false
};
ctx.ReactOnRails = {
  options: {},

  /**
   * Main entry point to using the react-on-rails npm package. This is how Rails will be able to
   * find you components for rendering.
   * @param components (key is component name, value is component)
   */
  register: function register(components) {
    ComponentRegistry_1.default.register(components);
  },

  /**
   * Allows registration of store generators to be used by multiple react components on one Rails
   * view. store generators are functions that take one arg, props, and return a store. Note that
   * the setStore API is different in that it's the actual store hydrated with props.
   * @param stores (keys are store names, values are the store generators)
   */
  registerStore: function registerStore(stores) {
    if (!stores) {
      throw new Error('Called ReactOnRails.registerStores with a null or undefined, rather than ' + 'an Object with keys being the store names and the values are the store generators.');
    }

    StoreRegistry_1.default.register(stores);
  },

  /**
   * Allows retrieval of the store by name. This store will be hydrated by any Rails form props.
   * Pass optional param throwIfMissing = false if you want to use this call to get back null if the
   * store with name is not registered.
   * @param name
   * @param throwIfMissing Defaults to true. Set to false to have this call return undefined if
   *        there is no store with the given name.
   * @returns Redux Store, possibly hydrated
   */
  getStore: function getStore(name, throwIfMissing) {
    if (throwIfMissing === void 0) {
      throwIfMissing = true;
    }

    return StoreRegistry_1.default.getStore(name, throwIfMissing);
  },

  /**
   * Set options for ReactOnRails, typically before you call ReactOnRails.register
   * Available Options:
   * `traceTurbolinks: true|false Gives you debugging messages on Turbolinks events
   * `turbo: true|false Turbo (the follower of Turbolinks) events will be registered, if set to true.
   */
  setOptions: function setOptions(newOptions) {
    if (typeof newOptions.traceTurbolinks !== 'undefined') {
      this.options.traceTurbolinks = newOptions.traceTurbolinks; // eslint-disable-next-line no-param-reassign

      delete newOptions.traceTurbolinks;
    }

    if (typeof newOptions.turbo !== 'undefined') {
      this.options.turbo = newOptions.turbo; // eslint-disable-next-line no-param-reassign

      delete newOptions.turbo;
    }

    if (Object.keys(newOptions).length > 0) {
      throw new Error("Invalid options passed to ReactOnRails.options: " + JSON.stringify(newOptions));
    }
  },

  /**
   * Allow directly calling the page loaded script in case the default events that trigger react
   * rendering are not sufficient, such as when loading JavaScript asynchronously with TurboLinks:
   * More details can be found here:
   * https://github.com/shakacode/react_on_rails/blob/master/docs/additional-reading/turbolinks.md
   */
  reactOnRailsPageLoaded: function reactOnRailsPageLoaded() {
    ClientStartup.reactOnRailsPageLoaded();
  },

  /**
   * Returns CSRF authenticity token inserted by Rails csrf_meta_tags
   * @returns String or null
   */
  authenticityToken: function authenticityToken() {
    return Authenticity_1.default.authenticityToken();
  },

  /**
   * Returns header with csrf authenticity token and XMLHttpRequest
   * @param {*} other headers
   * @returns {*} header
   */
  authenticityHeaders: function authenticityHeaders(otherHeaders) {
    if (otherHeaders === void 0) {
      otherHeaders = {};
    }

    return Authenticity_1.default.authenticityHeaders(otherHeaders);
  },
  // /////////////////////////////////////////////////////////////////////////////
  // INTERNALLY USED APIs
  // /////////////////////////////////////////////////////////////////////////////

  /**
   * Retrieve an option by key.
   * @param key
   * @returns option value
   */
  option: function option(key) {
    return this.options[key];
  },

  /**
   * Allows retrieval of the store generator by name. This is used internally by ReactOnRails after
   * a rails form loads to prepare stores.
   * @param name
   * @returns Redux Store generator function
   */
  getStoreGenerator: function getStoreGenerator(name) {
    return StoreRegistry_1.default.getStoreGenerator(name);
  },

  /**
   * Allows saving the store populated by Rails form props. Used internally by ReactOnRails.
   * @param name
   * @returns Redux Store, possibly hydrated
   */
  setStore: function setStore(name, store) {
    return StoreRegistry_1.default.setStore(name, store);
  },

  /**
   * Clears hydratedStores to avoid accidental usage of wrong store hydrated in previous/parallel
   * request.
   */
  clearHydratedStores: function clearHydratedStores() {
    StoreRegistry_1.default.clearHydratedStores();
  },

  /**
   * ReactOnRails.render("HelloWorldApp", {name: "Stranger"}, 'app');
   *
   * Does this:
   *   ReactDOM.render(React.createElement(HelloWorldApp, {name: "Stranger"}),
   *     document.getElementById('app'))
   *
   * @param name Name of your registered component
   * @param props Props to pass to your component
   * @param domNodeId
   * @param hydrate Pass truthy to update server rendered html. Default is falsy
   * @returns {virtualDomElement} Reference to your component's backing instance
   */
  render: function render(name, props, domNodeId, hydrate) {
    var componentObj = ComponentRegistry_1.default.get(name);
    var reactElement = createReactOutput_1.default({
      componentObj: componentObj,
      props: props,
      domNodeId: domNodeId
    });
    var render = hydrate ? react_dom_1.default.hydrate : react_dom_1.default.render; // eslint-disable-next-line react/no-render-return-value

    return render(reactElement, document.getElementById(domNodeId));
  },

  /**
   * Get the component that you registered
   * @param name
   * @returns {name, component, renderFunction, isRenderer}
   */
  getComponent: function getComponent(name) {
    return ComponentRegistry_1.default.get(name);
  },

  /**
   * Used by server rendering by Rails
   * @param options
   */
  serverRenderReactComponent: function serverRenderReactComponent(options) {
    return serverRenderReactComponent_1.default(options);
  },

  /**
   * Used by Rails to catch errors in rendering
   * @param options
   */
  handleError: function handleError(options) {
    return handleError_1.default(options);
  },

  /**
   * Used by Rails server rendering to replay console messages.
   */
  buildConsoleReplay: function buildConsoleReplay() {
    return buildConsoleReplay_1.default();
  },

  /**
   * Get an Object containing all registered components. Useful for debugging.
   * @returns {*}
   */
  registeredComponents: function registeredComponents() {
    return ComponentRegistry_1.default.components();
  },

  /**
   * Get an Object containing all registered store generators. Useful for debugging.
   * @returns {*}
   */
  storeGenerators: function storeGenerators() {
    return StoreRegistry_1.default.storeGenerators();
  },

  /**
   * Get an Object containing all hydrated stores. Useful for debugging.
   * @returns {*}
   */
  stores: function stores() {
    return StoreRegistry_1.default.stores();
  },
  resetOptions: function resetOptions() {
    this.options = Object.assign({}, DEFAULT_OPTIONS);
  }
};
ctx.ReactOnRails.resetOptions();
ClientStartup.clientStartup(ctx);
exports.default = ctx.ReactOnRails;

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/RenderUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/RenderUtils.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  wrapInScriptTags: function wrapInScriptTags(scriptId, scriptBody) {
    if (!scriptBody) {
      return '';
    }

    return "\n<script id=\"" + scriptId + "\">\n" + scriptBody + "\n</script>";
  }
};

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/StoreRegistry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/StoreRegistry.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var registeredStoreGenerators = new Map();
var hydratedStores = new Map();
exports.default = {
  /**
   * Register a store generator, a function that takes props and returns a store.
   * @param storeGenerators { name1: storeGenerator1, name2: storeGenerator2 }
   */
  register: function register(storeGenerators) {
    Object.keys(storeGenerators).forEach(function (name) {
      if (registeredStoreGenerators.has(name)) {
        console.warn('Called registerStore for store that is already registered', name);
      }

      var store = storeGenerators[name];

      if (!store) {
        throw new Error('Called ReactOnRails.registerStores with a null or undefined as a value ' + ("for the store generator with key " + name + "."));
      }

      registeredStoreGenerators.set(name, store);
    });
  },

  /**
   * Used by components to get the hydrated store which contains props.
   * @param name
   * @param throwIfMissing Defaults to true. Set to false to have this call return undefined if
   *        there is no store with the given name.
   * @returns Redux Store, possibly hydrated
   */
  getStore: function getStore(name, throwIfMissing) {
    if (throwIfMissing === void 0) {
      throwIfMissing = true;
    }

    if (hydratedStores.has(name)) {
      return hydratedStores.get(name);
    }

    var storeKeys = Array.from(hydratedStores.keys()).join(', ');

    if (storeKeys.length === 0) {
      var msg = "There are no stores hydrated and you are requesting the store " + name + ".\nThis can happen if you are server rendering and either:\n1. You do not call redux_store near the top of your controller action's view (not the layout)\n   and before any call to react_component.\n2. You do not render redux_store_hydration_data anywhere on your page.";
      throw new Error(msg);
    }

    if (throwIfMissing) {
      console.log('storeKeys', storeKeys);
      throw new Error("Could not find hydrated store with name '" + name + "'. " + ("Hydrated store names include [" + storeKeys + "]."));
    }

    return undefined;
  },

  /**
   * Internally used function to get the store creator that was passed to `register`.
   * @param name
   * @returns storeCreator with given name
   */
  getStoreGenerator: function getStoreGenerator(name) {
    if (registeredStoreGenerators.has(name)) {
      return registeredStoreGenerators.get(name);
    }

    var storeKeys = Array.from(registeredStoreGenerators.keys()).join(', ');
    throw new Error("Could not find store registered with name '" + name + "'. Registered store " + ("names include [ " + storeKeys + " ]. Maybe you forgot to register the store?"));
  },

  /**
   * Internally used function to set the hydrated store after a Rails page is loaded.
   * @param name
   * @param store (not the storeGenerator, but the hydrated store)
   */
  setStore: function setStore(name, store) {
    hydratedStores.set(name, store);
  },

  /**
   * Internally used function to completely clear hydratedStores Map.
   */
  clearHydratedStores: function clearHydratedStores() {
    hydratedStores.clear();
  },

  /**
   * Get a Map containing all registered store generators. Useful for debugging.
   * @returns Map where key is the component name and values are the store generators.
   */
  storeGenerators: function storeGenerators() {
    return registeredStoreGenerators;
  },

  /**
   * Get a Map containing all hydrated stores. Useful for debugging.
   * @returns Map where key is the component name and values are the hydrated stores.
   */
  stores: function stores() {
    return hydratedStores;
  }
};

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/buildConsoleReplay.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/buildConsoleReplay.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consoleReplay = void 0;

var RenderUtils_1 = __importDefault(__webpack_require__(/*! ./RenderUtils */ "./node_modules/react-on-rails/node_package/lib/RenderUtils.js"));

var scriptSanitizedVal_1 = __importDefault(__webpack_require__(/*! ./scriptSanitizedVal */ "./node_modules/react-on-rails/node_package/lib/scriptSanitizedVal.js"));

function consoleReplay() {
  // console.history is a global polyfill used in server rendering.
  // $FlowFixMe
  if (!(console.history instanceof Array)) {
    return '';
  }

  var lines = console.history.map(function (msg) {
    var stringifiedList = msg.arguments.map(function (arg) {
      var val;

      try {
        val = typeof arg === 'string' || arg instanceof String ? arg : JSON.stringify(arg);

        if (val === undefined) {
          val = 'undefined';
        }
      } catch (e) {
        val = e.message + ": " + arg;
      }

      return scriptSanitizedVal_1.default(val);
    });
    return "console." + msg.level + ".apply(console, " + JSON.stringify(stringifiedList) + ");";
  });
  return lines.join('\n');
}

exports.consoleReplay = consoleReplay;

function buildConsoleReplay() {
  return RenderUtils_1.default.wrapInScriptTags('consoleReplayLog', consoleReplay());
}

exports.default = buildConsoleReplay;

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/clientStartup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/clientStartup.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientStartup = exports.reactOnRailsPageLoaded = void 0;

var react_dom_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var createReactOutput_1 = __importDefault(__webpack_require__(/*! ./createReactOutput */ "./node_modules/react-on-rails/node_package/lib/createReactOutput.js"));

var isServerRenderResult_1 = __importDefault(__webpack_require__(/*! ./isServerRenderResult */ "./node_modules/react-on-rails/node_package/lib/isServerRenderResult.js"));

var REACT_ON_RAILS_STORE_ATTRIBUTE = 'data-js-react-on-rails-store';

function findContext() {
  if (typeof window.ReactOnRails !== 'undefined') {
    return window;
  } else if (typeof ReactOnRails !== 'undefined') {
    return global;
  }

  throw new Error("ReactOnRails is undefined in both global and window namespaces.\n  ");
}

function debugTurbolinks() {
  var msg = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    msg[_i] = arguments[_i];
  }

  if (!window) {
    return;
  }

  var context = findContext();

  if (context.ReactOnRails && context.ReactOnRails.option('traceTurbolinks')) {
    console.log.apply(console, __spreadArray(['TURBO:'], msg));
  }
}

function turbolinksInstalled() {
  return typeof Turbolinks !== 'undefined';
}

function turboInstalled() {
  var context = findContext();

  if (context.ReactOnRails) {
    return context.ReactOnRails.option('turbo') === true;
  }

  return false;
}

function reactOnRailsHtmlElements() {
  return document.getElementsByClassName('js-react-on-rails-component');
}

function forEachReactOnRailsComponentInitialize(fn, railsContext) {
  var els = reactOnRailsHtmlElements();

  for (var i = 0; i < els.length; i += 1) {
    fn(els[i], railsContext);
  }
}

function initializeStore(el, railsContext) {
  var context = findContext();
  var name = el.getAttribute(REACT_ON_RAILS_STORE_ATTRIBUTE) || "";
  var props = el.textContent !== null ? JSON.parse(el.textContent) : {};
  var storeGenerator = context.ReactOnRails.getStoreGenerator(name);
  var store = storeGenerator(props, railsContext);
  context.ReactOnRails.setStore(name, store);
}

function forEachStore(railsContext) {
  var els = document.querySelectorAll("[" + REACT_ON_RAILS_STORE_ATTRIBUTE + "]");

  for (var i = 0; i < els.length; i += 1) {
    initializeStore(els[i], railsContext);
  }
}

function turbolinksVersion5() {
  return typeof Turbolinks.controller !== 'undefined';
}

function turbolinksSupported() {
  return Turbolinks.supported;
}

function delegateToRenderer(componentObj, props, railsContext, domNodeId, trace) {
  var name = componentObj.name,
      component = componentObj.component,
      isRenderer = componentObj.isRenderer;

  if (isRenderer) {
    if (trace) {
      console.log("DELEGATING TO RENDERER " + name + " for dom node with id: " + domNodeId + " with props, railsContext:", props, railsContext);
    }

    component(props, railsContext, domNodeId);
    return true;
  }

  return false;
}

function domNodeIdForEl(el) {
  return el.getAttribute('data-dom-id') || "";
}
/**
 * Used for client rendering by ReactOnRails. Either calls ReactDOM.hydrate, ReactDOM.render, or
 * delegates to a renderer registered by the user.
 * @param el
 */


function render(el, railsContext) {
  var context = findContext(); // This must match lib/react_on_rails/helper.rb

  var name = el.getAttribute('data-component-name') || "";
  var domNodeId = domNodeIdForEl(el);
  var props = el.textContent !== null ? JSON.parse(el.textContent) : {};
  var trace = el.getAttribute('data-trace') === "true";

  try {
    var domNode = document.getElementById(domNodeId);

    if (domNode) {
      var componentObj = context.ReactOnRails.getComponent(name);

      if (delegateToRenderer(componentObj, props, railsContext, domNodeId, trace)) {
        return;
      } // Hydrate if available and was server rendered


      var shouldHydrate = !!react_dom_1.default.hydrate && !!domNode.innerHTML;
      var reactElementOrRouterResult = createReactOutput_1.default({
        componentObj: componentObj,
        props: props,
        domNodeId: domNodeId,
        trace: trace,
        railsContext: railsContext,
        shouldHydrate: shouldHydrate
      });

      if (isServerRenderResult_1.default(reactElementOrRouterResult)) {
        throw new Error("You returned a server side type of react-router error: " + JSON.stringify(reactElementOrRouterResult) + "\nYou should return a React.Component always for the client side entry point.");
      } else if (shouldHydrate) {
        react_dom_1.default.hydrate(reactElementOrRouterResult, domNode);
      } else {
        react_dom_1.default.render(reactElementOrRouterResult, domNode);
      }
    }
  } catch (e) {
    e.message = "ReactOnRails encountered an error while rendering component: " + name + ".\n" + ("Original message: " + e.message);
    throw e;
  }
}

function parseRailsContext() {
  var el = document.getElementById('js-react-on-rails-context');

  if (!el) {
    // The HTML page will not have an element with ID 'js-react-on-rails-context' if there are no
    // react on rails components
    return null;
  }

  if (!el.textContent) {
    throw new Error("The HTML element with ID 'js-react-on-rails-context' has no textContent");
  }

  return JSON.parse(el.textContent);
}

function reactOnRailsPageLoaded() {
  debugTurbolinks('reactOnRailsPageLoaded');
  var railsContext = parseRailsContext(); // If no react on rails components

  if (!railsContext) return;
  forEachStore(railsContext);
  forEachReactOnRailsComponentInitialize(render, railsContext);
}

exports.reactOnRailsPageLoaded = reactOnRailsPageLoaded;

function unmount(el) {
  var domNodeId = domNodeIdForEl(el);
  var domNode = document.getElementById(domNodeId);

  if (domNode === null) {
    return;
  }

  try {
    react_dom_1.default.unmountComponentAtNode(domNode);
  } catch (e) {
    console.info("Caught error calling unmountComponentAtNode: " + e.message + " for domNode", domNode, e);
  }
}

function reactOnRailsPageUnloaded() {
  debugTurbolinks('reactOnRailsPageUnloaded');
  var els = reactOnRailsHtmlElements();

  for (var i = 0; i < els.length; i += 1) {
    unmount(els[i]);
  }
}

function renderInit() {
  // Install listeners when running on the client (browser).
  // We must do this check for turbolinks AFTER the document is loaded because we load the
  // Webpack bundles first.
  if ((!turbolinksInstalled() || !turbolinksSupported()) && !turboInstalled()) {
    debugTurbolinks('NOT USING TURBOLINKS: calling reactOnRailsPageLoaded');
    reactOnRailsPageLoaded();
    return;
  }

  if (turboInstalled()) {
    debugTurbolinks('USING TURBO: document added event listeners ' + 'turbo:before-render and turbo:render.');
    document.addEventListener('turbo:before-render', reactOnRailsPageUnloaded);
    document.addEventListener('turbo:render', reactOnRailsPageLoaded);
    reactOnRailsPageLoaded();
  } else if (turbolinksVersion5()) {
    debugTurbolinks('USING TURBOLINKS 5: document added event listeners ' + 'turbolinks:before-render and turbolinks:render.');
    document.addEventListener('turbolinks:before-render', reactOnRailsPageUnloaded);
    document.addEventListener('turbolinks:render', reactOnRailsPageLoaded);
    reactOnRailsPageLoaded();
  } else {
    debugTurbolinks('USING TURBOLINKS 2: document added event listeners page:before-unload and ' + 'page:change.');
    document.addEventListener('page:before-unload', reactOnRailsPageUnloaded);
    document.addEventListener('page:change', reactOnRailsPageLoaded);
  }
}

function isWindow(context) {
  return context.document !== undefined;
}

function clientStartup(context) {
  // Check if server rendering
  if (!isWindow(context)) {
    return;
  }

  var document = context.document; // Tried with a file local variable, but the install handler gets called twice.
  // eslint-disable-next-line no-underscore-dangle

  if (context.__REACT_ON_RAILS_EVENT_HANDLERS_RAN_ONCE__) {
    return;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  context.__REACT_ON_RAILS_EVENT_HANDLERS_RAN_ONCE__ = true;
  debugTurbolinks('Adding DOMContentLoaded event to install event listeners.'); // So  long as the document is not loading, we can assume:
  // The document has finished loading and the document has been parsed
  // but sub-resources such as images, stylesheets and frames are still loading.
  // If lazy asynch loading is used, such as with loadable-components, then the init
  // function will install some handler that will properly know when to do hyrdation.

  if (document.readyState !== 'loading') {
    window.setTimeout(renderInit);
  } else {
    document.addEventListener('DOMContentLoaded', renderInit);
  }
}

exports.clientStartup = clientStartup;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get the context, be it window or global
 * @returns {boolean|Window|*|context}
 */

function context() {
  return typeof window !== 'undefined' && window || typeof global !== 'undefined' && global || this;
}

exports.default = context;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/createReactOutput.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/createReactOutput.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable react/prop-types */

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var isServerRenderResult_1 = __importDefault(__webpack_require__(/*! ./isServerRenderResult */ "./node_modules/react-on-rails/node_package/lib/isServerRenderResult.js"));
/**
 * Logic to either call the renderFunction or call React.createElement to get the
 * React.Component
 * @param options
 * @param options.componentObj
 * @param options.props
 * @param options.domNodeId
 * @param options.trace
 * @param options.location
 * @returns {ReactElement}
 */


function createReactOutput(_a) {
  var componentObj = _a.componentObj,
      props = _a.props,
      railsContext = _a.railsContext,
      domNodeId = _a.domNodeId,
      trace = _a.trace,
      shouldHydrate = _a.shouldHydrate;
  var name = componentObj.name,
      component = componentObj.component,
      renderFunction = componentObj.renderFunction;

  if (trace) {
    if (railsContext && railsContext.serverSide) {
      console.log("RENDERED " + name + " to dom node with id: " + domNodeId);
    } else if (shouldHydrate) {
      console.log("HYDRATED " + name + " in dom node with id: " + domNodeId + " using props, railsContext:", props, railsContext);
    } else {
      console.log("RENDERED " + name + " to dom node with id: " + domNodeId + " with props, railsContext:", props, railsContext);
    }
  }

  if (renderFunction) {
    // Let's invoke the function to get the result
    if (trace) {
      console.log(name + " is a renderFunction");
    }

    var renderFunctionResult = component(props, railsContext);

    if (isServerRenderResult_1.default(renderFunctionResult)) {
      // We just return at this point, because calling function knows how to handle this case and
      // we can't call React.createElement with this type of Object.
      return renderFunctionResult;
    }

    if (react_1.default.isValidElement(renderFunctionResult)) {
      // If already a ReactElement, then just return it.
      console.error("Warning: ReactOnRails: Your registered render-function (ReactOnRails.register) for " + name + "\nincorrectly returned a React Element (JSX). Instead, return a React Function Component by\nwrapping your JSX in a function. ReactOnRails v13 will throw error on this, as React Hooks do not\nwork if you return JSX. Update by wrapping the result JSX of " + name + " in a fat arrow function.");
      return renderFunctionResult;
    } // If a component, then wrap in an element


    var reactComponent = renderFunctionResult;
    return react_1.default.createElement(reactComponent, props);
  } // else


  return react_1.default.createElement(component, props);
}

exports.default = createReactOutput;

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/handleError.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/handleError.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var server_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom/server'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

function handleRenderFunctionIssue(options) {
  var e = options.e,
      name = options.name;
  var msg = '';

  if (name) {
    var lastLine = 'A Render-Function takes a single arg of props (and the location for react-router) ' + 'and returns a ReactElement.';
    var shouldBeRenderFunctionError = "ERROR: ReactOnRails is incorrectly detecting Render-Function to be false. The React\ncomponent '" + name + "' seems to be a Render-Function.\n" + lastLine;
    var reMatchShouldBeGeneratorError = /Can't add property context, object is not extensible/;

    if (reMatchShouldBeGeneratorError.test(e.message)) {
      msg += shouldBeRenderFunctionError + "\n\n";
      console.error(shouldBeRenderFunctionError);
    }

    shouldBeRenderFunctionError = "ERROR: ReactOnRails is incorrectly detecting renderFunction to be true, but the React\ncomponent '" + name + "' is not a Render-Function.\n" + lastLine;
    var reMatchShouldNotBeGeneratorError = /Cannot call a class as a function/;

    if (reMatchShouldNotBeGeneratorError.test(e.message)) {
      msg += shouldBeRenderFunctionError + "\n\n";
      console.error(shouldBeRenderFunctionError);
    }
  }

  return msg;
}

var handleError = function handleError(options) {
  var e = options.e,
      jsCode = options.jsCode,
      serverSide = options.serverSide;
  console.error('Exception in rendering!');
  var msg = handleRenderFunctionIssue(options);

  if (jsCode) {
    console.error("JS code was: " + jsCode);
  }

  if (e.fileName) {
    console.error("location: " + e.fileName + ":" + e.lineNumber);
  }

  console.error("message: " + e.message);
  console.error("stack: " + e.stack);

  if (serverSide) {
    msg += "Exception in rendering!\n" + (e.fileName ? "\nlocation: " + e.fileName + ":" + e.lineNumber : '') + "\nMessage: " + e.message + "\n\n" + e.stack;
    var reactElement = react_1.default.createElement('pre', null, msg);
    return server_1.default.renderToString(reactElement);
  }

  return "undefined";
};

exports.default = handleError;

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/isRenderFunction.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/isRenderFunction.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Used to determine we'll call be calling React.createElement on the component of if this is a
 * Render-Function used return a function that takes props to return a React element
 * @param component
 * @returns {boolean}
 */

function isRenderFunction(component) {
  // No for es5 or es6 React Component
  if (component.prototype && component.prototype.isReactComponent) {
    return false;
  }

  if (component.renderFunction) {
    return true;
  } // If zero or one args, then we know that this is a regular function that will
  // return a React component


  if (component.length >= 2) {
    return true;
  }

  return false;
}

exports.default = isRenderFunction;

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/isServerRenderResult.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/isServerRenderResult.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function isServerRenderResult(testValue) {
  return !!(testValue.renderedHtml || testValue.redirectLocation || testValue.routeError || testValue.error);
}

exports.default = isServerRenderResult;

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/scriptSanitizedVal.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/scriptSanitizedVal.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (val) {
  // Replace closing
  var re = /<\/\W*script/gi;
  return val.replace(re, '(/script');
};

/***/ }),

/***/ "./node_modules/react-on-rails/node_package/lib/serverRenderReactComponent.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-on-rails/node_package/lib/serverRenderReactComponent.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var server_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom/server'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var ComponentRegistry_1 = __importDefault(__webpack_require__(/*! ./ComponentRegistry */ "./node_modules/react-on-rails/node_package/lib/ComponentRegistry.js"));

var createReactOutput_1 = __importDefault(__webpack_require__(/*! ./createReactOutput */ "./node_modules/react-on-rails/node_package/lib/createReactOutput.js"));

var isServerRenderResult_1 = __importDefault(__webpack_require__(/*! ./isServerRenderResult */ "./node_modules/react-on-rails/node_package/lib/isServerRenderResult.js"));

var buildConsoleReplay_1 = __importDefault(__webpack_require__(/*! ./buildConsoleReplay */ "./node_modules/react-on-rails/node_package/lib/buildConsoleReplay.js"));

var handleError_1 = __importDefault(__webpack_require__(/*! ./handleError */ "./node_modules/react-on-rails/node_package/lib/handleError.js"));

function serverRenderReactComponent(options) {
  var name = options.name,
      domNodeId = options.domNodeId,
      trace = options.trace,
      props = options.props,
      railsContext = options.railsContext,
      throwJsErrors = options.throwJsErrors;
  var htmlResult = '';
  var hasErrors = false;
  var renderingError = null;

  try {
    var componentObj = ComponentRegistry_1.default.get(name);

    if (componentObj.isRenderer) {
      throw new Error("Detected a renderer while server rendering component '" + name + "'. See https://github.com/shakacode/react_on_rails#renderer-functions");
    }

    var reactElementOrRouterResult = createReactOutput_1.default({
      componentObj: componentObj,
      domNodeId: domNodeId,
      trace: trace,
      props: props,
      railsContext: railsContext
    });

    if (isServerRenderResult_1.default(reactElementOrRouterResult)) {
      // We let the client side handle any redirect
      // Set hasErrors in case we want to throw a Rails exception
      hasErrors = !!reactElementOrRouterResult.routeError;

      if (hasErrors) {
        console.error("React Router ERROR: " + JSON.stringify(reactElementOrRouterResult.routeError));
      }

      if (reactElementOrRouterResult.redirectLocation) {
        if (trace) {
          var redirectLocation = reactElementOrRouterResult.redirectLocation;
          var redirectPath = redirectLocation.pathname + redirectLocation.search;
          console.log("ROUTER REDIRECT: " + name + " to dom node with id: " + domNodeId + ", redirect to " + redirectPath);
        } // For redirects on server rendering, we can't stop Rails from returning the same result.
        // Possibly, someday, we could have the rails server redirect.

      } else {
        htmlResult = reactElementOrRouterResult.renderedHtml;
      }
    } else {
      try {
        htmlResult = server_1.default.renderToString(reactElementOrRouterResult);
      } catch (error) {
        console.error("Invalid call to renderToString. Possibly you have a renderFunction, a function that already\ncalls renderToString, that takes one parameter. You need to add an extra unused\nparameter to identify this function as a renderFunction and not a simple React \nFunction Component.");
        throw error;
      }
    }
  } catch (e) {
    if (throwJsErrors) {
      throw e;
    }

    hasErrors = true;
    htmlResult = handleError_1.default({
      e: e,
      name: name,
      serverSide: true
    });
    renderingError = e;
  }

  var consoleReplayScript = buildConsoleReplay_1.default();
  var result = {
    html: htmlResult,
    consoleReplayScript: consoleReplayScript,
    hasErrors: hasErrors
  };

  if (renderingError) {
    result.renderingError = {
      message: renderingError.message,
      stack: renderingError.stack
    };
  }

  return JSON.stringify(result);
}

exports.default = serverRenderReactComponent;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=hello-world-bundle-26c16ab46b6ef24e760c.js.map