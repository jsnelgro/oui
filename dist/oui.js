/*!
 * 
 * Oui.js v0.0.1
 * © 2016 Mark Lundin
 * Released under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("oui", [], factory);
	else if(typeof exports === 'object')
		exports["oui"] = factory();
	else
		root["oui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var oui=function oui(){};if(process.env.NODE_ENV!=='production'){oui=__webpack_require__(51).default;}oui.version='0.0.1';module.exports=oui;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {!function(global, factory) {
	     true ? module.exports = factory() : 'function' == typeof define && define.amd ? define(factory) : global.preact = factory();
	}(this, function() {
	    'use strict';
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	    }
	    function extend(obj, props) {
	        for (var i in props) if (hasOwnProperty.call(props, i)) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        var out = {};
	        for (var i in obj) out[i] = obj[i];
	        return out;
	    }
	    function memoize(fn, mem) {
	        mem = mem || {};
	        return function(k) {
	            return hasOwnProperty.call(mem, k) ? mem[k] : mem[k] = fn(k);
	        };
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function toArray(obj) {
	        var arr = [], i = obj.length;
	        for (;i--; ) arr[i] = obj[i];
	        return arr;
	    }
	    function styleObjToCss(s) {
	        var str = '';
	        for (var prop in s) {
	            var val = s[prop];
	            if (!empty(val)) {
	                if (str) str += ' ';
	                str += jsToCss(prop);
	                str += ': ';
	                str += val;
	                if ('number' == typeof val && !NON_DIMENSION_PROPS[prop]) str += 'px';
	                str += ';';
	            }
	        }
	        return str;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function normalize(obj, prop, fn) {
	        var v = obj[prop];
	        if (v && !isString(v)) obj[prop] = fn(v);
	    }
	    function optionsHook(name, a, b) {
	        return hook(options, name, a, b);
	    }
	    function hook(obj, name, a, b, c) {
	        if (obj[name]) return obj[name](a, b, c); else ;
	    }
	    function deepHook(obj, type) {
	        do hook(obj, type); while (obj = obj._component);
	    }
	    function h(nodeName, attributes) {
	        var len = arguments.length, attributeChildren = attributes && attributes.children, children = void 0, arr = void 0, lastSimple = void 0;
	        if (attributeChildren) {
	            delete attributes.children;
	            if (3 > len) return h(nodeName, attributes, attributeChildren);
	        }
	        for (var i = 2; len > i; i++) {
	            var _p = arguments[i];
	            if (!falsey(_p)) {
	                if (!children) children = [];
	                if (_p.join) arr = _p; else {
	                    arr = SHARED_TEMP_ARRAY;
	                    arr[0] = _p;
	                }
	                for (var j = 0; j < arr.length; j++) {
	                    var child = arr[j], simple = !(falsey(child) || child instanceof VNode);
	                    if (simple) child = String(child);
	                    if (simple && lastSimple) children[children.length - 1] += child; else if (!falsey(child)) children.push(child);
	                    lastSimple = simple;
	                }
	            } else ;
	        }
	        var p = new VNode(nodeName, attributes || void 0, children || void 0);
	        optionsHook('vnode', p);
	        return p;
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'), p0 = path[0], len = path.length;
	        return function(e) {
	            var _component$setState;
	            var t = this, s = component.state, obj = s, v = void 0, i = void 0;
	            if (isString(eventPath)) {
	                v = delve(e, eventPath);
	                if (empty(v) && (t = t._component)) v = delve(t, eventPath);
	            } else v = (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value;
	            if (isFunction(v)) v = v.call(t);
	            if (len > 1) {
	                for (i = 0; len - 1 > i; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        if (1 === items.push(component)) (options.debounceRendering || setImmediate)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var currentItems = items, p = void 0;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            for (;p = currentItems.pop(); ) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(_ref) {
	        var nodeName = _ref.nodeName;
	        return isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY) || EMPTY_BASE;
	    }
	    function ensureNodeData(node) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = {});
	    }
	    function getNodeType(node) {
	        return node.nodeType;
	    }
	    function appendChildren(parent, children) {
	        var len = children.length, many = len > 2, into = many ? document.createDocumentFragment() : parent;
	        for (var i = 0; len > i; i++) into.appendChild(children[i]);
	        if (many) parent.appendChild(into);
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function getAccessor(node, name, value, cache) {
	        if ('type' !== name && 'style' !== name && name in node) return node[name];
	        var attrs = node[ATTR_KEY];
	        if (cache !== !1 && attrs && hasOwnProperty.call(attrs, name)) return attrs[name];
	        if ('class' === name) return node.className;
	        if ('style' === name) return node.style.cssText; else return value;
	    }
	    function setAccessor(node, name, value) {
	        if ('class' === name) node.className = value || ''; else if ('style' === name) node.style.cssText = value || ''; else if ('dangerouslySetInnerHTML' === name) {
	            if (value && value.__html) node.innerHTML = value.__html;
	        } else if ('key' === name || name in node && 'type' !== name) {
	            node[name] = value;
	            if (falsey(value)) node.removeAttribute(name);
	        } else setComplexAccessor(node, name, value);
	        ensureNodeData(node)[name] = value;
	    }
	    function setComplexAccessor(node, name, value) {
	        if ('on' !== name.substring(0, 2)) {
	            var type = typeof value;
	            if (falsey(value)) node.removeAttribute(name); else if ('function' !== type && 'object' !== type) node.setAttribute(name, value);
	        } else {
	            var _type = normalizeEventName(name), l = node._listeners || (node._listeners = {}), fn = !l[_type] ? 'add' : !value ? 'remove' : null;
	            if (fn) node[fn + 'EventListener'](_type, eventProxy);
	            l[_type] = value;
	        }
	    }
	    function eventProxy(e) {
	        var fn = this._listeners[normalizeEventName(e.type)];
	        if (fn) return fn.call(this, optionsHook('event', e) || e); else ;
	    }
	    function getNodeAttributes(node) {
	        return node[ATTR_KEY] || getRawNodeAttributes(node) || EMPTY;
	    }
	    function getRawNodeAttributes(node) {
	        var list = node.attributes;
	        if (!list || !list.getNamedItem) return list; else return getAttributesAsObject(list);
	    }
	    function getAttributesAsObject(list) {
	        var attrs = void 0;
	        for (var i = list.length; i--; ) {
	            var item = list[i];
	            if (!attrs) attrs = {};
	            attrs[item.name] = item.value;
	        }
	        return attrs;
	    }
	    function isSameNodeType(node, vnode) {
	        if (isFunctionalComponent(vnode)) return !0;
	        var nodeName = vnode.nodeName;
	        if (isFunction(nodeName)) return node._componentConstructor === nodeName;
	        if (3 === getNodeType(node)) return isString(vnode); else return toLowerCase(node.nodeName) === nodeName;
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes), c = vnode.children;
	        if (c) props.children = c;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (hasOwnProperty.call(defaultProps, i) && !(i in props)) props[i] = defaultProps[i];
	        return props;
	    }
	    function collectNode(node) {
	        cleanNode(node);
	        var name = normalizeName(node.nodeName), list = nodes[name];
	        if (list) list.push(node); else nodes[name] = [ node ];
	    }
	    function createNode(nodeName) {
	        var name = normalizeName(nodeName), list = nodes[name], node = list && list.pop() || document.createElement(nodeName);
	        ensureNodeData(node);
	        return node;
	    }
	    function cleanNode(node) {
	        removeNode(node);
	        if (3 !== getNodeType(node)) {
	            if (!node[ATTR_KEY]) node[ATTR_KEY] = getRawNodeAttributes(node);
	            node._component = node._componentConstructor = null;
	        }
	    }
	    function diff(dom, vnode, context) {
	        var originalAttributes = vnode.attributes;
	        for (;isFunctionalComponent(vnode); ) vnode = buildFunctionalComponent(vnode, context);
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context);
	        if (isString(vnode)) {
	            if (dom) {
	                var type = getNodeType(dom);
	                if (3 === type) {
	                    dom[TEXT_CONTENT] = vnode;
	                    return dom;
	                } else if (1 === type) collectNode(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var out = dom, nodeName = vnode.nodeName || UNDEFINED_ELEMENT;
	        if (!dom) out = createNode(nodeName); else if (toLowerCase(dom.nodeName) !== nodeName) {
	            out = createNode(nodeName);
	            appendChildren(out, toArray(dom.childNodes));
	            recollectNodeTree(dom);
	        }
	        innerDiffNode(out, vnode, context);
	        diffAttributes(out, vnode);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        return out;
	    }
	    function innerDiffNode(dom, vnode, context) {
	        var children = void 0, keyed = void 0, keyedLen = 0, len = dom.childNodes.length, childrenLen = 0;
	        if (len) {
	            children = [];
	            for (var i = 0; len > i; i++) {
	                var child = dom.childNodes[i], key = child._component ? child._component.__key : getAccessor(child, 'key');
	                if (!empty(key)) {
	                    if (!keyed) keyed = {};
	                    keyed[key] = child;
	                    keyedLen++;
	                } else children[childrenLen++] = child;
	            }
	        }
	        var vchildren = vnode.children, vlen = vchildren && vchildren.length, min = 0;
	        if (vlen) for (var i = 0; vlen > i; i++) {
	            var vchild = vchildren[i], child = void 0;
	            if (keyedLen) {
	                var attrs = vchild.attributes, key = attrs && attrs.key;
	                if (!empty(key) && hasOwnProperty.call(keyed, key)) {
	                    child = keyed[key];
	                    keyed[key] = null;
	                    keyedLen--;
	                }
	            }
	            if (!child && childrenLen > min) for (var j = min; childrenLen > j; j++) {
	                var c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = null;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = diff(child, vchild, context);
	            if (dom.childNodes[i] !== child) {
	                var c = child.parentNode !== dom && child._component, next = dom.childNodes[i + 1];
	                if (c) deepHook(c, 'componentWillMount');
	                if (next) dom.insertBefore(child, next); else dom.appendChild(child);
	                if (c) deepHook(c, 'componentDidMount');
	            }
	        }
	        if (keyedLen) for (var i in keyed) if (hasOwnProperty.call(keyed, i) && keyed[i]) children[min = childrenLen++] = keyed[i];
	        if (childrenLen > min) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) {
	            var child = children[i];
	            if (child) recollectNodeTree(child, unmountOnly);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var attrs = node[ATTR_KEY];
	        if (attrs) hook(attrs, 'ref', null);
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (!unmountOnly) {
	                if (1 !== getNodeType(node)) {
	                    removeNode(node);
	                    return;
	                }
	                collectNode(node);
	            }
	            var c = node.childNodes;
	            if (c && c.length) removeOrphanedChildren(c, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, vnode) {
	        var old = getNodeAttributes(dom) || EMPTY, attrs = vnode.attributes || EMPTY, name = void 0, value = void 0;
	        for (name in old) if (empty(attrs[name])) setAccessor(dom, name, null);
	        if (attrs !== EMPTY) for (name in attrs) if (hasOwnProperty.call(attrs, name)) {
	            value = attrs[name];
	            if (!empty(value) && value != getAccessor(dom, name)) setAccessor(dom, name, value);
	        }
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var list = components[Ctor.name], len = list && list.length, c = void 0;
	        for (var i = 0; len > i; i++) {
	            c = list[i];
	            if (c.constructor === Ctor) {
	                list.splice(i, 1);
	                var inst = new Ctor(props, context);
	                inst.nextBase = c.base;
	                return inst;
	            }
	        }
	        return new Ctor(props, context);
	    }
	    function triggerComponentRender(component) {
	        if (!component._dirty) {
	            component._dirty = !0;
	            enqueueRender(component);
	        }
	    }
	    function setComponentProps(component, props, opts, context) {
	        var d = component._disableRendering;
	        component.__ref = props.ref;
	        component.__key = props.key;
	        delete props.ref;
	        delete props.key;
	        component._disableRendering = !0;
	        if (context) {
	            if (!component.prevContext) component.prevContext = component.context;
	            component.context = context;
	        }
	        if (component.base) hook(component, 'componentWillReceiveProps', props, component.context);
	        if (!component.prevProps) component.prevProps = component.props;
	        component.props = props;
	        component._disableRendering = d;
	        if (!opts || opts.render !== !1) if (opts && opts.renderSync || options.syncComponentUpdates !== !1) renderComponent(component); else triggerComponentRender(component);
	        hook(component, '__ref', component);
	    }
	    function renderComponent(component, opts) {
	        if (!component._disableRendering) {
	            var skip = void 0, rendered = void 0, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, initialBase = isUpdate || component.nextBase;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (hook(component, 'shouldComponentUpdate', props, state, context) === !1) skip = !0; else hook(component, 'componentWillUpdate', props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                rendered = hook(component, 'render', props, state, context);
	                var childComponent = rendered && rendered.nodeName, childContext = component.getChildContext ? component.getChildContext() : context, toUnmount = void 0, base = void 0;
	                if (isFunction(childComponent) && childComponent.prototype.render) {
	                    var inst = component._component;
	                    if (inst && inst.constructor !== childComponent) {
	                        toUnmount = inst;
	                        inst = null;
	                    }
	                    var childProps = getNodeProps(rendered);
	                    if (inst) setComponentProps(inst, childProps, SYNC_RENDER, childContext); else {
	                        inst = createComponent(childComponent, childProps, childContext);
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        if (isUpdate) deepHook(inst, 'componentWillMount');
	                        setComponentProps(inst, childProps, NO_RENDER, childContext);
	                        renderComponent(inst, DOM_RENDER);
	                        if (isUpdate) deepHook(inst, 'componentDidMount');
	                    }
	                    base = inst.base;
	                } else {
	                    var cbase = initialBase;
	                    toUnmount = component._component;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || opts && opts.build) base = diff(cbase, rendered || EMPTY_BASE, childContext);
	                }
	                if (initialBase && base !== initialBase) {
	                    var p = initialBase.parentNode;
	                    if (p && base !== p) p.replaceChild(base, initialBase);
	                }
	                if (toUnmount) unmountComponent(toUnmount, !0);
	                component.base = base;
	                if (base) {
	                    var componentRef = component, t = component;
	                    for (;t = t._parentComponent; ) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	                if (isUpdate) hook(component, 'componentDidUpdate', previousProps, previousState, previousContext);
	            }
	            var cb = component._renderCallbacks, fn = void 0;
	            if (cb) for (;fn = cb.pop(); ) fn.call(component);
	            return rendered;
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context) {
	        var c = dom && dom._component, oldDom = dom;
	        var isOwner = c && dom._componentConstructor === vnode.nodeName;
	        for (;c && !isOwner && (c = c._parentComponent); ) isOwner = c.constructor === vnode.nodeName;
	        if (isOwner) {
	            setComponentProps(c, getNodeProps(vnode), SYNC_RENDER, context);
	            dom = c.base;
	        } else {
	            if (c) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            dom = createComponentFromVNode(vnode, dom, context);
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function createComponentFromVNode(vnode, dom, context) {
	        var props = getNodeProps(vnode);
	        var component = createComponent(vnode.nodeName, props, context);
	        if (dom && !component.base) component.base = dom;
	        setComponentProps(component, props, NO_RENDER, context);
	        renderComponent(component, DOM_RENDER);
	        return component.base;
	    }
	    function unmountComponent(component, remove) {
	        hook(component, '__ref', null);
	        hook(component, 'componentWillUnmount');
	        var inner = component._component;
	        if (inner) {
	            unmountComponent(inner, remove);
	            remove = !1;
	        }
	        var base = component.base;
	        if (base) {
	            if (remove !== !1) removeNode(base);
	            removeOrphanedChildren(base.childNodes, !0);
	        }
	        if (remove) {
	            component._parentComponent = null;
	            collectComponent(component);
	        }
	        hook(component, 'componentDidUnmount');
	    }
	    function Component(props, context) {
	        this._dirty = this._disableRendering = !1;
	        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
	        this.context = context || {};
	        this.props = props;
	        this.state = hook(this, 'getInitialState') || {};
	    }
	    function render(vnode, parent, merge) {
	        var existing = merge && merge._component && merge._componentConstructor === vnode.nodeName, built = diff(merge, vnode), c = !existing && built._component;
	        if (c) deepHook(c, 'componentWillMount');
	        if (built.parentNode !== parent) parent.appendChild(built);
	        if (c) deepHook(c, 'componentDidMount');
	        return built;
	    }
	    var NO_RENDER = {
	        render: !1
	    };
	    var SYNC_RENDER = {
	        renderSync: !0
	    };
	    var DOM_RENDER = {
	        build: !0
	    };
	    var EMPTY = {};
	    var EMPTY_BASE = '';
	    var HAS_DOM = 'undefined' != typeof document;
	    var TEXT_CONTENT = !HAS_DOM || 'textContent' in document ? 'textContent' : 'nodeValue';
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol['for']('preactattr') : '__preactattr_';
	    var UNDEFINED_ELEMENT = 'undefined';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var isFunction = function(obj) {
	        return 'function' == typeof obj;
	    };
	    var isString = function(obj) {
	        return 'string' == typeof obj;
	    };
	    var hasOwnProperty = {}.hasOwnProperty;
	    var empty = function(x) {
	        return null == x;
	    };
	    var falsey = function(value) {
	        return value === !1 || null == value;
	    };
	    var jsToCss = memoize(function(s) {
	        return s.replace(/([A-Z])/g, '-$1').toLowerCase();
	    });
	    var toLowerCase = memoize(function(s) {
	        return s.toLowerCase();
	    });
	    var ch = void 0;
	    try {
	        ch = new MessageChannel();
	    } catch (e) {}
	    var setImmediate = ch ? function(f) {
	        ch.port1.onmessage = f;
	        ch.port2.postMessage('');
	    } : setTimeout;
	    var options = {
	        vnode: function(n) {
	            var attrs = n.attributes;
	            if (attrs && !isFunction(n.nodeName)) {
	                var p = attrs.className;
	                if (p) {
	                    attrs['class'] = p;
	                    delete attrs.className;
	                }
	                if (attrs['class']) normalize(attrs, 'class', hashToClassName);
	                if (attrs.style) normalize(attrs, 'style', styleObjToCss);
	            }
	        }
	    };
	    var SHARED_TEMP_ARRAY = [];
	    var items = [];
	    var itemsOffline = [];
	    var normalizeEventName = memoize(function(t) {
	        return t.replace(/^on/i, '').toLowerCase();
	    });
	    var nodes = {};
	    var normalizeName = memoize(function(name) {
	        return name.toUpperCase();
	    });
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {}), cacheKey = key + '|' + (eventPath || '');
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            triggerComponentRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this);
	        },
	        render: function() {
	            return null;
	        }
	    });
	    var preact = {
	        h: h,
	        Component: Component,
	        render: render,
	        rerender: rerender,
	        options: options,
	        hooks: options
	    };
	    return preact;
	});
	//# sourceMappingURL=preact.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).setImmediate))

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var base=exports.base={fontFamily:"Menlo, Inconcolata, Consolas",marginTop:'2px',marginBottom:'2px',fontSize:10,boxSizing:'border-box',color:'rgb(66,66,66)'}; // borderRadius:2
	var secondary=exports.secondary={color:'rgb(210,210,210)'};var highlight=exports.highlight={color:'rgb(255,82,82)'};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.PropTypes = mod.exports;
	  }
	})(this, function (exports, module) {

	  'use strict';

	  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	  var ReactElement = {};

	  ReactElement.isValidElement = function (object) {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  var ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };

	  var emptyFunction = {
	    thatReturns: function thatReturns(what) {
	      return function () {
	        return what;
	      };
	    }
	  };

	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  var ANONYMOUS = '<<anonymous>>';

	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  function createChainableTypeChecker(validate) {
	    function checkType(isRequired, props, propName, componentName, location, propFullName) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (props[propName] == null) {
	        var locationName = ReactPropTypeLocationNames[location];
	        if (isRequired) {
	          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        var locationName = ReactPropTypeLocationNames[location];

	        var preciseType = getPreciseType(propValue);

	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturns(null));
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var propType = getPropType(propValue);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!ReactElement.isValidElement(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	      });
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (propValue === expectedValues[i]) {
	          return null;
	        }
	      }

	      var locationName = ReactPropTypeLocationNames[location];
	      var valuesString = JSON.stringify(expectedValues);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	      });
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName) == null) {
	          return null;
	        }
	      }

	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || ReactElement.isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      return 'object';
	    }
	    return propType;
	  }

	  function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  module.exports = ReactPropTypes;
	});

	//# sourceMappingURL=index.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.hasAnnotation=exports.getAnnotation=exports.annotate=undefined;__webpack_require__(56); /*
	  Annotate
	  An Annotation defines meta-data about a property

	  Specifically, rendering a controller for a given property requires
	  additional information other than it's value. Some of this can be obtained
	  from it's property descriptor via `Object.getOwnPropertyDescriptor()` but
	  we may also need additional information.

	  This module provides a way to provide such additional information. Note that
	  we do not assume the format or structure of the data.

	  An example of a property metadata might be
	  {
	    description: 'This property is the background color',
	    controller: Slider,
	    max: 10,
	    min: 2
	  }

	  @annotate({ description, max, min })


	*/var DUI_KEY=Symbol('Oui, Oui');var annotate=exports.annotate=function annotate(value){return function(obj,prop){return Reflect.defineMetadata(DUI_KEY,value,obj,prop);};};var getAnnotation=exports.getAnnotation=function getAnnotation(obj,prop){return Reflect.getMetadata(DUI_KEY,obj,prop);};var hasAnnotation=exports.hasAnnotation=function hasAnnotation(obj,prop){return getAnnotation(obj,prop)!==null;};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(1)) :
		typeof define === 'function' && define.amd ? define(['preact'], factory) :
		(global.preactSvg = factory(global.preact));
	}(this, function (preact) { 'use strict';

		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.extends = Object.assign || function (target) {
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

		babelHelpers.inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		babelHelpers.objectWithoutProperties = function (obj, keys) {
		  var target = {};

		  for (var i in obj) {
		    if (keys.indexOf(i) >= 0) continue;
		    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
		    target[i] = obj[i];
		  }

		  return target;
		};

		babelHelpers.possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		babelHelpers;

		var DOM = typeof document !== 'undefined' && !!document.createElement;

		var SVG_ATTRS = ['viewBox'];

		var NS = {
			xlink: 'http://www.w3.org/1999/xlink'
		};

		var NS_ATTR = /^([a-zA-Z]+)(?:\:|([A-Z]))/;

		var PROP_TO_ATTR_MAP = {
			'className': 'class'
		};

		var EMPTY = {};

		var updateMode = false;

		if (DOM) {
			(function () {
				var div = document.createElement('div');

				var oldCreate = document.createElement;
				document.createElement = function (name) {
					if (updateMode || name === 'svg') {
						var el = document.createElementNS('http://www.w3.org/2000/svg', name);

						el.setAttribute = createAttributeShim('setAttribute');
						el.getAttribute = createAttributeShim('getAttribute');
						el.removeAttribute = createAttributeShim('removeAttribute');
						for (var key in el) {
							if (~SVG_ATTRS.indexOf(key) || !(key in div) || PROP_TO_ATTR_MAP.hasOwnProperty(key)) {
								overwriteProperty(el, key);
							}
						}
						return el;
					}
					return oldCreate.call(document, name);
				};
			})();
		}

		var PROPERTY_ERRORS = {};
		var hasPropertyErrors = false;

		function overwriteProperty(el, key) {
			var err = PROPERTY_ERRORS[key];
			if (err === false) {
				Object.defineProperty(el, key, contentPropertyDef(key));
			} else {
				attemptOverwriteProperty(el, key);
			}
		}

		function attemptOverwriteProperty(el, key) {
			try {
				Object.defineProperty(el, key, contentPropertyDef(key));
				PROPERTY_ERRORS[key] = false;
			} catch (e) {
				if (!PROPERTY_ERRORS[key]) {
					var err = el.nodeName + ': ' + e;
					PROPERTY_ERRORS[key] = err;
					if (!hasPropertyErrors && 'undefined' !== typeof console && console.warn) {
						hasPropertyErrors = true;
						console.warn('Error overwriting some SVG properties.', { errors: PROPERTY_ERRORS });
					}
				}
			}
		}

		var memoize = function (fn) {
			var mem = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			return function (k) {
				return mem.hasOwnProperty(k) ? mem[k] : mem[k] = fn(k);
			};
		};

		var contentPropertyDef = memoize(function (prop) {
			var attr = arguments.length <= 1 || arguments[1] === undefined ? PROP_TO_ATTR_MAP[prop] || prop : arguments[1];
			return {
				set: function (v) {
					if (v === null || v === undefined) this.removeAttribute(attr);else this.setAttribute(attr, v);
				},
				get: function () {
					return this.getAttribute(attr);
				}
			};
		});

		var createAttributeShim = memoize(function (method) {
			return function (name, value) {
				var proto = this.constructor.prototype,
				    p = name.match(NS_ATTR);
				if (p && NS.hasOwnProperty(p[1])) {
					name = name.replace(NS_ATTR, '$2').toLowerCase();
					var ns = NS[p[1]];
					return proto[method + 'NS'].call(this, ns, name, value);
				} else {
					return proto[method].call(this, name, value);
				}
			};
		});

		var SVG = function (_Component) {
			babelHelpers.inherits(SVG, _Component);

			function SVG() {
				babelHelpers.classCallCheck(this, SVG);
				return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
			}

			SVG.prototype.componentWillUpdate = function componentWillUpdate() {
				updateMode = true;
			};

			SVG.prototype.componentDidUpdate = function componentDidUpdate() {
				updateMode = false;
			};

			SVG.prototype.render = function render(_ref) {
				var children = _ref.children;
				var props = babelHelpers.objectWithoutProperties(_ref, ['children']);

				if (!this.hasRendered) {
					this.hasRendered = updateMode = true;

					this.setState(EMPTY, setStateUpdateProxy(this));
				}

				return preact.h(
					'svg',
					babelHelpers.extends({ version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }, props),
					children
				);
			};

			return SVG;
		}(preact.Component);

		function setStateUpdateProxy(component) {
			return function () {
				component.componentDidUpdate();
				component = null;
			};
		}

		return SVG;

	}));
	//# sourceMappingURL=preact-svg.js.map

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var PI2=exports.PI2=2.0*Math.PI;var HALF_PI=exports.HALF_PI=Math.PI*0.5;var DEG2RAD=exports.DEG2RAD=Math.PI/180.0;var RAD2DEG=exports.RAD2DEG=180.0/Math.PI;var EPS=exports.EPS=10e-6; //Constants
	/*
	 * Lineary interpolates between a->b, using n as a weight
	 */var mix=exports.mix=function mix(n,a,b){return a*(1-n)+b*n;}; /*
	 * Linearly maps n from a->b to x->y
	 */var map=exports.map=function map(n,a,b,x,y){return x+(n-a)*(y-x)/(b-a);}; /*
	 * Linearly maps n from a->b to 0-1
	 */var normalize=function normalize(n,a,b){return math.map(n,a,b,0,1);}; /*
	 * Clamp n within range a->b
	 */var clamp=exports.clamp=function clamp(n,a,b){return n<a?a:n>b?b:n;}; /*
	 * Returns a pseudo-random floating point number within the range a->b, if b is not supplied it
	 * returns within the range 0-a
	*/var random=exports.random=function random(a,b){return b===undefined?Math.random()*a:Math.random()*(b-a)+a;}; // export default {
	//     mix, map, normalize, clamp, random,
	//     PI2, HALF_PI, DEG2RAD, RAD2DEG, EPS }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /*
	    This higher order component modifies the default `onChange( change )` handle by
	    passing back the `change` as a change object `{ [id]:change }` that indicates
	    the slot. This makes it easy to reconcile what changed in the ui without having
	    to have unneccesary references directly in components.
	*/ /** @jsx React.h */exports.default=function(Comp){var WrappedComponent=function(_Comp){_inherits(WrappedComponent,_Comp);function WrappedComponent(){_classCallCheck(this,WrappedComponent);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(WrappedComponent).call(this));_this.onChildChange=function(change){return _this.props.onChange(_defineProperty({},_this.props.id,change));};return _this;}_createClass(WrappedComponent,[{key:'render',value:function render(){return _preact2.default.h(Comp,_extends({},this.props,{'class':'oui-control',onChange:this.onChildChange}));}}]);return WrappedComponent;}(Comp); // WrappedComponent.name = 'Wrapped'+Comp.name
	WrappedComponent.propTypes={onChange:_propTypes2.default.func.isRequired,id:_propTypes2.default.string.isRequired,value:Comp.propTypes.value};return WrappedComponent;};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(condition,message){if(condition){if(typeof console!=='undefined'){console.warn('Warning: '+message);}}};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _numericstepper=__webpack_require__(38);var _numericstepper2=_interopRequireDefault(_numericstepper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_numericstepper2.default;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true}); /*
	    This is a simple debounce/throttle function that uses `requestAnimationFrame`
	    for timing instead of setTimeout or equivalent, as such it's better suited
	    for updates that involve a repaint, which tbh is probably most things
	*/exports.default=function(fn){var rafID=void 0,t=void 0; /*
	        Create a debounced wrapper
	    */var debounced=function debounced(a){ // console.log( performance.now() - t)
	fn(a);cancelAnimationFrame(rafID);rafID=null;}; /*
	        Return a function that only executes when rafID has fired
	    */return function(e){ //t = performance.now()
	if(!rafID){ // fn( e )
	if(e&&e.persist)e.persist();requestAnimationFrame(function(_){rafID=requestAnimationFrame(debounced.bind(undefined,e));});}};};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _shallowEqual=__webpack_require__(53);var _shallowEqual2=_interopRequireDefault(_shallowEqual);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};} /**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */var shallowCompare=function shallowCompare(instance,nextProps,nextState){return !(0,_shallowEqual2.default)(instance.props,nextProps)||!(0,_shallowEqual2.default)(instance.state,nextState);};exports.default=shallowCompare;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	/*
	 * DEPENDENCIES
	 */

	var convert = __webpack_require__(55);


	/*
	 * CONSTRUCTOR
	 */

	function Colr () {
	  if ((this instanceof Colr) === false) { return new Colr(); }
	  this._ = {};
	}


	/*
	 * STATIC METHODS
	 */

	Colr.fromHex = function (hex) {
	  return (new Colr()).fromHex(hex);
	};

	Colr.fromGrayscale = function (value) {
	  return (new Colr()).fromGrayscale(value);
	};

	Colr.fromRgb = function (r, g, b) {
	  return (new Colr()).fromRgb(r, g, b);
	};

	Colr.fromRgbArray = function (arr) {
	  return (new Colr()).fromRgb(arr[0], arr[1], arr[2]);
	};

	Colr.fromRgbObject = function (obj) {
	  return (new Colr()).fromRgb(obj.r, obj.g, obj.b);
	};
	Colr.fromHsl = function (h, s, l) {
	  return (new Colr()).fromHsl(h, s, l);
	};

	Colr.fromHslArray = function (arr) {
	  return (new Colr()).fromHsl(arr[0], arr[1], arr[2]);
	};

	Colr.fromHslObject = function (obj) {
	  return (new Colr()).fromHsl(obj.h, obj.s, obj.l);
	};

	Colr.fromHsv = function (h, s, v) {
	  return (new Colr()).fromHsv(h, s, v);
	};

	Colr.fromHsvArray = function (arr) {
	  return (new Colr()).fromHsv(arr[0], arr[1], arr[2]);
	};

	Colr.fromHsvObject = function (obj) {
	  return (new Colr()).fromHsv(obj.h, obj.s, obj.v);
	};


	/*
	 * IMPORTERS
	 */

	// HEX

	Colr.prototype.fromHex = function (input) {
	  var value = convert.hex.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};

	// GRAYSCALE

	Colr.prototype.fromGrayscale = function (input) {
	  input = clampByte(input);
	  var value = convert.grayscale.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};

	// RGB

	Colr.prototype.fromRgb = function (r, g, b) {
	  if (typeof(r) !== 'number' || typeof(g) !== 'number' || typeof(b) !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  var value = clampRgb(r, g, b);
	  this._ = { rgb: value };
	  return this;
	};

	Colr.prototype.fromRgbArray = function (arr) {
	  return this.fromRgb(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromRgbObject = function (obj) {
	  return this.fromRgb(obj.r, obj.g, obj.b);
	};

	// HSL

	Colr.prototype.fromHsl = function (h, s, l) {
	  if (typeof(h) !== 'number' || typeof(s) !== 'number' || typeof(l) !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsl: clampHsx(h, s, l) };
	  return this;
	};

	Colr.prototype.fromHslArray = function (arr) {
	  return this.fromHsl(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromHslObject = function (obj) {
	  return this.fromHsl(obj.h, obj.s, obj.l);
	};

	// HSV

	Colr.prototype.fromHsv = function (h, s, v) {
	  if (typeof(h) !== 'number' || typeof(s) !== 'number' || typeof(v) !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsv: clampHsx(h, s, v) };
	  return this;
	};

	Colr.prototype.fromHsvArray = function (arr) {
	  return this.fromHsv(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromHsvObject = function (obj) {
	  return this.fromHsv(obj.h, obj.s, obj.v);
	};


	/*
	 * EXPORTERS
	 */

	// HEX

	Colr.prototype.toHex = function () {
	  var cached = this._.hex;
	  if (cached !== undefined) { return cached; }

	  var input;
	  var cachedFrom = this._.rgb;

	  if (cachedFrom !== undefined) { input = cachedFrom; }
	  else { input = this.toRawRgbArray(); }

	  input[0] = Math.round(input[0]);
	  input[1] = Math.round(input[1]);
	  input[2] = Math.round(input[2]);

	  var value = convert.rgb.hex(input);
	  this._.hex = value;

	  return value;
	};

	// GRAYSCALE

	Colr.prototype.toGrayscale = function () {
	  var cached = this._.grayscale;
	  if (cached !== undefined) { return cached; }

	  var input;
	  var cachedFrom = this._.rgb;

	  if (cachedFrom !== undefined) { input = cachedFrom; }
	  else { input = this.toRawRgbArray(); }

	  var value = convert.rgb.grayscale(input);
	  this._.grayscale = value;
	  return value;
	};

	// RGB

	Colr.prototype.toRawRgbArray = function () {
	  var cached = this._.rgb;
	  if (cached !== undefined) { return cached; }

	  var value;

	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.rgb(value);
	  } else if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.rgb(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.rgb = value;
	  return value;
	};

	Colr.prototype.toRawRgbObject = function () {
	  var arr = this.toRawRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};

	Colr.prototype.toRgbArray = function () {
	  var arr = this.toRawRgbArray();
	  return [ Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2]) ];
	};

	Colr.prototype.toRgbObject = function () {
	  var arr = this.toRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};

	// HSL

	Colr.prototype.toRawHslArray = function () {
	  var cached = this._.hsl;
	  if (cached !== undefined) { return cached; }

	  var value;

	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.hsl(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsl(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.hsl = value;
	  return value;
	};

	Colr.prototype.toRawHslObject = function () {
	  var arr = this.toRawHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};

	Colr.prototype.toHslArray = function () {
	  var arr = this.toRawHslArray();
	  return [ Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2]) ];
	};

	Colr.prototype.toHslObject = function () {
	  var arr = this.toHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};

	// HSV

	Colr.prototype.toRawHsvArray = function () {
	  var cached = this._.hsv;
	  if (cached !== undefined) { return cached; }

	  var value;

	  if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.hsv(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsv(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.hsv = value;
	  return value;
	};

	Colr.prototype.toRawHsvObject = function () {
	  var arr = this.toRawHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};

	Colr.prototype.toHsvArray = function () {
	  var arr = this.toRawHsvArray();
	  return [ Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2]) ];
	};

	Colr.prototype.toHsvObject = function () {
	  var arr = this.toHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};


	/*
	 * MODIFIERS
	 */

	Colr.prototype.lighten = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] + amount);
	  this._ = { hsl: hsl };
	  return this;
	};

	Colr.prototype.darken = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] - amount);
	  this._ = { hsl: hsl };
	  return this;
	};

	/*
	 * MISC
	 */

	Colr.prototype.clone = function () {
	  var colr = new Colr();
	  colr._.hex = this._.hex;
	  colr._.grayscale = this._.grayscale;

	  if (this._.rgb !== undefined) {
	    colr._.rgb = this._.rgb.slice(0);
	  }
	  if (this._.hsv !== undefined) {
	    colr._.hsv = this._.hsv.slice(0);
	  }
	  if (this._.hsl !== undefined) {
	    colr._.hsl = this._.hsl.slice(0);
	  }

	  return colr;
	};

	/*
	 * UTILS
	 */

	function clampPercentage (val) {
	  return Math.max(Math.min(val, 100), 0);
	}

	function clampByte (byte) {
	  return Math.max(Math.min(byte, 255), 0);
	}

	function clampRgb (r, g, b) {
	  return [
	    Math.max(Math.min(r, 255), 0),
	    Math.max(Math.min(g, 255), 0),
	    Math.max(Math.min(b, 255), 0),
	  ];
	}

	function clampHsx (h, s, x) {
	  return [
	    Math.max(Math.min(h, 360), 0),
	    Math.max(Math.min(s, 100), 0),
	    Math.max(Math.min(x, 100), 0),
	  ];
	}


	module.exports = Colr;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(21).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).setImmediate, __webpack_require__(13).clearImmediate))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.button=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _button=__webpack_require__(23);var _button2=_interopRequireDefault(_button);var _annotate=__webpack_require__(4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_button2.default;var button=exports.button=function button(options){return (0,_annotate.annotate)(_extends({},options,{control:_button2.default}));};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var rgbObject=exports.rgbObject=function rgbObject(color){return 'r' in color&&typeof color.r==='number'&&'g' in color&&typeof color.g==='number'&&'b' in color&&typeof color.b==='number';};var rgbArray=exports.rgbArray=function rgbArray(color){return color instanceof Array&&color.length>=3;};var hslObject=exports.hslObject=function hslObject(color){return 'h' in color&&typeof color.h==='number'&&'s' in color&&typeof color.s==='number'&&'l' in color&&typeof color.l==='number';};var hsvObject=exports.hsvObject=function hsvObject(color){return 'h' in color&&typeof color.h==='number'&&'s' in color&&typeof color.s==='number'&&'v' in color&&typeof color.v==='number';};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _slider=__webpack_require__(41);var _slider2=_interopRequireDefault(_slider);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_slider2.default;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}; /** @jsx React.h */var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _preactSvg=__webpack_require__(5);var _preactSvg2=_interopRequireDefault(_preactSvg);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(props){return _preact2.default.h(_preactSvg2.default,{fill:'currentColor',fit:'true',height:'1em',width:'1em',viewBox:'0 0 40 40',preserveAspectRatio:'xMidYMid meet',style:_extends({verticalAlign:'middle'},props.style)},_preact2.default.h('g',null,_preact2.default.h('path',{d:'m20 13.4l10 10-2.3 2.3-7.7-7.7-7.7 7.7-2.3-2.3z'})));};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}; /** @jsx React.h */var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _preactSvg=__webpack_require__(5);var _preactSvg2=_interopRequireDefault(_preactSvg);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(props){return _preact2.default.h(_preactSvg2.default,{fill:'currentColor',fit:'true',height:'1em',width:'1em',viewBox:'0 0 40 40',preserveAspectRatio:'xMidYMid meet',style:_extends({verticalAlign:'middle'},props.style)},_preact2.default.h('g',null,_preact2.default.h('path',{d:'m27.7 14.3l2.3 2.3-10 10-10-10 2.3-2.3 7.7 7.7z'})));};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _renderTree=__webpack_require__(20);var _renderTree2=_interopRequireDefault(_renderTree);var _panel=__webpack_require__(39);var _panel2=_interopRequireDefault(_panel);var _dom=__webpack_require__(50);var _dom2=_interopRequireDefault(_dom);var _deepMerge=__webpack_require__(49);var _deepMerge2=_interopRequireDefault(_deepMerge);var _warn=__webpack_require__(8);var _warn2=_interopRequireDefault(_warn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};} // proxy render() since React returns a Component reference.
	/*
	    Oui is mostly a stateless library. UI is declared using plain js objects and
	    oui simply maps them to controllers. This workflow serves the functional
	    community quite well, however many people prefer a more idiomatic imperative
	    api without having to maintain state themselves.

	    This module covers those scenarios where you just want to fire up the ui,
	    without having to worry about merging in UI changes.

	    Changes are deeply merged into the api object and the UI is automatically
	    re-rendered.
	*/ /** @jsx React.h */function prender(vnode,parent,callback){var prev=parent._preactCompatRendered;if(prev&&prev.parentNode!==parent)prev=null;var out=(0,_preact.render)(vnode,parent,prev);parent._preactCompatRendered=out;if(typeof callback==='function')callback();return out&&out._component;}function unmountComponentAtNode(container){var existing=container._preactCompatRendered;if(existing&&existing.parentNode===container){(0,_preact.render)(h(EmptyComponent),container,existing);return true;}return false;}exports.default=function(opts){var container=null;var render=function render(api){var callback=arguments.length<=1||arguments[1]===undefined?function(_){return _;}:arguments[1];if(!document.contains(_dom2.default)){document.body.appendChild(_dom2.default);}if(!api){unmountComponentAtNode(container);_dom2.default.removeChild(container);container=null;}else if(container===null){container=document.createElement('div');container.style.margin='0.25em';container.style.flexBasis='auto';_dom2.default.appendChild(container);}if(api){var onChange=function onChange(change){var isFrozen=Object.isFrozen(api);(0,_warn2.default)(Object.isFrozen(api),'The `api` object is frozen an cannot be mutated.');if(!isFrozen){render((0,_deepMerge2.default)(api,change),callback);callback(api);}};var Element=_preact2.default.h(_panel2.default,opts,(0,_renderTree2.default)(api,onChange));prender(Element,container);}};return render;};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*
	  This is where we reconcile the object and decide what should and should not
	  end up in the renderTree. Essentially it is a mapping between an object literal
	  representation and a renderable graph
	*/ /*
	  This specifies an component to use. There is an explicit agreement
	  that this property should be controlled by a given controler.

	  This is actually great when you know the available components. It's
	  transparent to the user what should occur.

	  This is not so great for who want to declare annotation for a given property
	  without prior knowledge of what controllers are available. In this instance,
	  the author may simply want to define a description, some value constraints
	  and behaviour, but not neccesarily specify how it should be used.

	  In these instances only the public properties of an object should define it's
	  interface.

	  ##Component Matching
	  Given N controllers and M properties, it takes 0(NM) to match all properties.

	  If matching is not automatic, and properties must explicityly declare their
	  interface such as type:{r,g,b}, or @implements([InterfaceA, InterfaceB]) then
	  we have a contract between a property and it's interface.

	  For example if `propA` implements `interfaceA` and `interfaceA` can be controlled
	  by ComponentB, then we have a match. propA decalares it's interface and thats
	  all. Plus, as a prop can implement multiple interfaces, then we may have potentially
	  more than one component.

	  In this manner, given a given prop can implement X interfaces,a component can
	  be matched in O(1).

	  However javascript does not define interface types, so how could we define this
	  ```
	    let interface = ['x', 'y', 'z']

	    @implements([interace])
	    rotation: { x, y, z }
	  ```

	  Primitives get autojacked, objects get jacked to default folder directory unless
	  they match a Controller

	  1) An interface may be a React propType:
	    {
	      requiredObject: PropTypes.object.isRequired,
	      requiredString: PropTypes.string.isRequired,
	    }

	    This can actually be validated, but


	import { colorpicker } from 'custom-comps'
	{
	  // requires explicit knowledge of controller types
	  @color( 'This is a slider', min, max )
	  prop:{ r, g, b },

	}
	```
	*/ /*
	  Should infer an interface, an agreement of api functionality.
	  This property has this interface and implements this api, therefore
	  you can safely assume it works in this kind of way, and can be conrolled
	  with this type of controller
	*/ /*
	```
	{
	  // requires explicit knowledge of controller types
	  @annotate( 'This is a slider', min, max, 'colorpicker' )
	  prop:{ r, g, b },

	}
	```
	*/ /** @jsx React.h */var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _annotate=__webpack_require__(4);var _primitiveComponents=__webpack_require__(52);var _primitiveComponents2=_interopRequireDefault(_primitiveComponents);var _validation=__webpack_require__(54);var _warn=__webpack_require__(8);var _warn2=_interopRequireDefault(_warn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(obj,onChange){var annotation=void 0,Component=void 0,components=[]; /*
	        Iterate through enumerable properties of `obj`
	    */for(var prop in obj){var Element=void 0,_Component=void 0,value=obj[prop]; /*
	            Null properties are discarded regardless of type annotation
	        */if(value===null)continue; /*
	            If there's any annotation associated with the property collect them
	            and pass them along to the Component instance
	        */annotation=(0,_annotate.getAnnotation)(obj,prop)||{}; /*
	            Users can associate a property with a specific Components by including
	            the `control` annotation
	        */_Component=annotation.control; /*
	            If the property has a type annotation, validate the property against
	            the controls propTypes.
	        */if(_Component){(0,_validation.validateProp)(obj,prop,_Component);}else if(!_Component&&_primitiveComponents2.default.has(typeof value==='undefined'?'undefined':_typeof(value))){ /*
	                However if no Component has been declared and the value is one of the
	                primtive types, use one of the default Components
	            */_Component=_primitiveComponents2.default.get(typeof value==='undefined'?'undefined':_typeof(value));} /*
	            Create the Element based on the provided annotaions and the required Component
	        */if(_Component){components.push(_preact2.default.h(_Component,_extends({key:prop,id:prop,label:prop},annotation,{onChange:onChange,value:value})));}}return components;};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 22 */
3,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}; /** @jsx React.h */var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(22);var _proptypes2=_interopRequireDefault(_proptypes);var _styles=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var defaultStyle={cursor:'pointer',outline:'none',border:'none',padding:'1em',borderRadius:2,verticalAlign:'middle',textAlign:'center',lineHeight:'50%',':hover':{backgroundColor:_styles.highlight.color,color:'white'}}; /**
	    The Button, arguably most basic of all components. You hover, you click, you rollout.
	    Pretty self explanatory. Documentation included for completeness
	*/var Button=function Button(props){return _preact2.default.h('button',_extends({},props,{style:_extends({},_styles.base,defaultStyle,props.style),onClick:props.value}),props.label);};Button.defaultProps={label:'Button'};Button.propTypes={ /*
	        function to call on click
	    */value:_proptypes2.default.func.isRequired, /**
	     * A text label
	     */label:_proptypes2.default.string, /**
	     * Optional component styling
	     */style:_proptypes2.default.object};exports.default=Button;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _proptypes=__webpack_require__(22);var _proptypes2=_interopRequireDefault(_proptypes);var _styles=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */ /**
	 	Another stupidly simple component, it effectively wraps the native checkbox.
		Documentation included for completeness
	 */var Checkbox=function(_React$Component){_inherits(Checkbox,_React$Component);function Checkbox(){_classCallCheck(this,Checkbox);return _possibleConstructorReturn(this,Object.getPrototypeOf(Checkbox).apply(this,arguments));}_createClass(Checkbox,[{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var _onChange=_props.onChange;return _preact2.default.h('div',{style:_extends({},_styles.base,defaultStyle,{alignItems:'center'}),onClick:function onClick(evt){return _onChange(!value);}},_preact2.default.h('label',{style:_styles.base},label),_preact2.default.h('input',{checked:value,style:alignRight,type:'checkbox',onChange:function onChange(evt){return _onChange(evt.target.checked);}}));}}]);return Checkbox;}(_preact2.default.Component); // Checkbox = radium( Checkbox )
	Checkbox.propTypes={ /**
		 * A text label
		 */label:_proptypes2.default.string, /**
		 * Determines whether the element is checked or not.
		 */value:_proptypes2.default.bool, /**
		 * A callback triggered when the checkbox is toggled
		 */onChange:_proptypes2.default.func};Checkbox.defaultProps={label:'Checkbox',value:false,onChange:function onChange(a){return a;}};var defaultStyle={display:'flex'};var alignRight={marginLeft:'auto'};exports.default=Checkbox;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _checkbox=__webpack_require__(24);var _checkbox2=_interopRequireDefault(_checkbox);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_checkbox2.default;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.hsv2Hsv=exports.rgbArr2Hsv=exports.rgb2Hsv=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}; /*
	    A set of validators for common color formats such as;
	    {r, g, b}, {h, s, v}, {h, s, l} and [ r, g, b ]
	*/var _validators=__webpack_require__(15);var _colr=__webpack_require__(12);var _colr2=_interopRequireDefault(_colr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var withAlpha=function withAlpha(color,a){return a!==undefined?_extends({a:a},color):color;};var normalizeRGB=function normalizeRGB(c){return {r:c.r*255,g:c.g*255,b:c.b*255};};var deNormalizeRGB=function deNormalizeRGB(c){return {r:c.r/255,g:c.g/255,b:c.b/255};};var rgb2Hsv=exports.rgb2Hsv=function rgb2Hsv(c){return withAlpha(_colr2.default.fromRgbObject(normalizeRGB(c)).toRawHsvObject(),c.a);};var rgbArr2Hsv=exports.rgbArr2Hsv=function rgbArr2Hsv(c){return withAlpha(_colr2.default.fromRgbArray(c.map(function(channel){return channel*255;})).toRawHsvObject(),c[3]);};var hsv2Hsv=exports.hsv2Hsv=function hsv2Hsv(c){return c;};rgb2Hsv.invert=function(c){return withAlpha(deNormalizeRGB(_colr2.default.fromHsvObject(c).toRawRgbObject()),c.a);};rgbArr2Hsv.invert=function(c){return _colr2.default.fromHsvObject(c).toRawRgbArray().map(function(channel){return channel/255;}).concat([c.a]);};hsv2Hsv.invert=function(c){return c;};exports.default=function(value){var converter=hsv2Hsv;if((0,_validators.rgbObject)(value))converter=rgb2Hsv;else if((0,_validators.rgbArray)(value))converter=rgbArr2Hsv;return converter;};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _hsvColorpicker=__webpack_require__(29);var _hsvColorpicker2=_interopRequireDefault(_hsvColorpicker);var _colr=__webpack_require__(12);var _colr2=_interopRequireDefault(_colr);var _palette=__webpack_require__(31);var _palette2=_interopRequireDefault(_palette);var _styles=__webpack_require__(2);var _colorConverter=__webpack_require__(26);var _colorConverter2=_interopRequireDefault(_colorConverter);var _validators=__webpack_require__(15);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */ // // import FaAdd from 'react-icons/lib/md/add';
	//
	/**

	A collapsible color picker with colour palette. One is assigned by you, the
	developer, the other is defined by the end user which persists across page refreshes.
	This means that in addition to any pallete you provide, the user can also add and save
	their own colours, much in the same way as photoshop.

	To save the current color click the `+` icon to save it to the users palette.
	Shift click to remove it.

	The users colour palette is saved to [localStorage](localStorage), this means
	each domain will have it's own unique user pallete, meaning `localhost` will differ
	from `staging.com`.

	*/var ColorPicker=function(_Component){_inherits(ColorPicker,_Component);function ColorPicker(){_classCallCheck(this,ColorPicker);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(ColorPicker).call(this));_this.state={colors:[]};_this.getSystemColors=function(_){return JSON.parse(localStorage.getItem('oui.colorpicker'))||[];};_this.setSystemColors=function(colors){return localStorage.setItem('oui.colorpicker',JSON.stringify(colors));};_this.onColorChange=function(hsv){var color=(0,_colorConverter2.default)(_this.props.value).invert(hsv);_this.props.onChange(color);};return _this;}_createClass(ColorPicker,[{key:'onAddColorClick',value:function onAddColorClick(color){var colors=this.getSystemColors();colors.push(color);this.setSystemColors(colors);this.forceUpdate();}},{key:'onRemoveColorClick',value:function onRemoveColorClick(color,index){var colors=this.getSystemColors();colors.splice(index,1);this.setSystemColors(colors);this.forceUpdate();}},{key:'componentWillMount',value:function componentWillMount(){this.setState({open:this.props.open});}},{key:'render',value:function render(){var _this2=this;var _props=this.props;var value=_props.value;var label=_props.label;var onChange=_props.onChange;var style=_props.style;var palette=_props.palette;var _state=this.state;var colors=_state.colors;var open=_state.open;var toHsv=(0,_colorConverter2.default)(value);var hsvColor=toHsv(value);return _preact2.default.h('div',{style:_extends({},_styles.base,style,{height:'auto'})},_preact2.default.h('div',{style:{display:'flex',alignItems:'baseline'},onClick:function onClick(v){return _this2.setState({open:!open});}},_preact2.default.h('label',null,label),_preact2.default.h('span',{style:_extends({},colorDropletStyle,{marginLeft:'auto',backgroundColor:_colr2.default.fromHsvObject(hsvColor).toHex()})})),open?_preact2.default.h('div',null,_preact2.default.h(_hsvColorpicker2.default,{style:style,value:hsvColor,onChange:this.onColorChange}),_preact2.default.h(_palette2.default,{key:'user-palette',values:palette.map(toHsv),onSelect:this.onColorChange}),_preact2.default.h(_palette2.default,{key:'system-palette',values:this.getSystemColors(),onSelect:this.onColorChange,onDeselect:this.onRemoveColorClick.bind(this)}),_preact2.default.h('div',{onClick:function onClick(e){return _this2.onAddColorClick(toHsv(value));}})):null);}}]);return ColorPicker;}(_preact.Component);ColorPicker.displayName='ColorPicker';var ValuePropTypeError=function ValuePropTypeError(propName,componentName){return new Error('Invalid prop `'+propName+'` supplied to'+' `'+componentName+'`. Validation failed.');};var rgbObjectPropType=function rgbObjectPropType(props,propName,componentName){if(!(0,_validators.rgbObject)(props[propName])){return ValuePropTypeError(propName,componentName);}};var rgbArrayPropType=function rgbArrayPropType(props,propName,componentName){if(!(0,_validators.rgbArray)(props[propName])){return ValuePropTypeError(propName,componentName);}};var hsvObjectPropType=function hsvObjectPropType(props,propName,componentName){if(!(0,_validators.hsvObject)(props[propName])){return ValuePropTypeError(propName,componentName);}};ColorPicker.propTypes={ /**
	     * The text label to display
	     */label:_propTypes2.default.string, /**
	     *  If true, the color picker will be initially open
	     */open:_propTypes2.default.bool, /**
	     *  An color object
	     */value:_propTypes2.default.oneOfType([rgbObjectPropType,rgbArrayPropType,hsvObjectPropType]), /**
	     * An array of colors used as a palette
	     */palette:_propTypes2.default.oneOfType([_propTypes2.default.arrayOf(rgbObjectPropType),_propTypes2.default.arrayOf(rgbArrayPropType),_propTypes2.default.arrayOf(hsvObjectPropType)]), /**
	     * Optional component styling
	     */style:_propTypes2.default.object, /**
	     *  A function triggered when the color changes
	     */onChange:_propTypes2.default.func};ColorPicker.defaultProps={open:false,label:'ColorPicker',value:{h:1,s:50,v:50},palette:[],onChange:function onChange(a){return a;}};var addButton={':hover':_styles.secondary}; // marginLeft: '0.3em',
	// marginRight: '0.3em'
	var colorDropletStyle={borderRadius:"50%",width:'1em',height:'1em',float:'right'};exports.default=ColorPicker;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /*
	    This HOC wraps the HSV ColorPicker in a stateful way to prevent loss of
	    information in degenerate color conversions.

	    Mapping { h, s, v } => { r, g, b } and back again, will lose information if
	    { s, v } === 0

	*/ /** @jsx React.h */var isDegenerate=function isDegenerate(_ref){var h=_ref.h;var s=_ref.s;var v=_ref.v;return s===0;};exports.default=function(Comp){return function(_React$Component){_inherits(RGB2HSV,_React$Component);function RGB2HSV(){_classCallCheck(this,RGB2HSV);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(RGB2HSV).call(this));_this.state={value:null};_this.conditionalChange=function(value){if(isDegenerate(value)){_this.setState({value:value});}else {_this.setState({value:null});_this.props.onChange(value);}};return _this;}_createClass(RGB2HSV,[{key:'render',value:function render(){var _this2=this;return _preact2.default.h(Comp,_extends({},this.props,{value:this.state.value||this.props.value,onChange:function onChange(change){return _this2.conditionalChange(change);}}));}}]);return RGB2HSV;}(_preact2.default.Component);};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _preactSvg=__webpack_require__(5);var _preactSvg2=_interopRequireDefault(_preactSvg);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _catchDegenerateHsv=__webpack_require__(28);var _catchDegenerateHsv2=_interopRequireDefault(_catchDegenerateHsv);var _slider=__webpack_require__(16);var _slider2=_interopRequireDefault(_slider);var _numericstepper=__webpack_require__(9);var _numericstepper2=_interopRequireDefault(_numericstepper);var _math=__webpack_require__(6);var _throttle=__webpack_require__(10);var _throttle2=_interopRequireDefault(_throttle);var _styles=__webpack_require__(2);var _shallowCompare=__webpack_require__(11);var _shallowCompare2=_interopRequireDefault(_shallowCompare);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */var HSVColorPicker=function(_React$Component){_inherits(HSVColorPicker,_React$Component);function HSVColorPicker(){_classCallCheck(this,HSVColorPicker);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(HSVColorPicker).call(this));_this.state={drag:false,boundingRect:null};var computeHsvaFromMouseEvent=function computeHsvaFromMouseEvent(e,bounds){var x=e.clientX===undefined?e.touches[0].clientX:e.clientX,y=e.clientY===undefined?e.touches[0].clientY:e.clientY;var value=_this.props.value;var h=value.h,s=(x-bounds.left)/bounds.width*100,v=(bounds.height-(y-bounds.top))/bounds.height*100,a=_this.props.value.a;return a===undefined?{h:h,s:s,v:v}:{h:h,s:s,v:v,a:a};};_this.onMouseDown=function(e){e.preventDefault(); /*
	                For performance reasons we pre calculate the bounding rect on
	                mouse down, this means we don't need to do this on every mouse move
	                event and therefore we avoid any layout thrashing.

	                The caveat is that any sizing changes that occur between mousedown
	                will cause mean the cached boundingRect is invalid and causes incorrect
	                results. However because of performance gains, this is acceptable
	                behaviour as changes to size are expected to be rare enough
	            */var rect=e.currentTarget.getBoundingClientRect();var hsv=computeHsvaFromMouseEvent(e,rect);_this.setState({drag:true,boundingRect:rect});_this.props.onChange(hsv);};_this.onMouseMove=(0,_throttle2.default)(function(e){e.preventDefault();if(_this.state.drag)_this.props.onChange(computeHsvaFromMouseEvent(e,_this.state.boundingRect));});_this.onMouseUp=function(e){_this.setState({drag:false});};_this.onHueChange=function(h){var _this$props$value=_this.props.value;var s=_this$props$value.s;var v=_this$props$value.v;var a=_this$props$value.a; //
	// if( isDegenerate( this.props.value ) ){
	//     this.setState({ value:{ h, s, v, a }})
	// }else{
	//     this.setState({value:null})
	_this.props.onChange({h:h,s:s,v:v,a:a}); // }
	};_this.onSaturationChange=function(s){var _this$props$value2=_this.props.value;var h=_this$props$value2.h;var v=_this$props$value2.v;var a=_this$props$value2.a;_this.props.onChange({h:h,s:s,v:v,a:a});};_this.onValueChange=function(v){var _this$props$value3=_this.props.value;var h=_this$props$value3.h;var s=_this$props$value3.s;var a=_this$props$value3.a;_this.props.onChange({h:h,s:s,v:v,a:a});};_this.onAlphaChange=function(a){var _this$props$value4=_this.props.value;var h=_this$props$value4.h;var s=_this$props$value4.s;var v=_this$props$value4.v;_this.props.onChange({h:h,s:s,v:v,a:a});};return _this;}_createClass(HSVColorPicker,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){var _props$value=this.props.value;var h=_props$value.h;var s=_props$value.s;var v=_props$value.v;var a=_props$value.a;var color=nextProps.value;return (h!==color.h||s!==color.s||v!==color.v||a!==color.a)&&(0,_shallowCompare2.default)(this,nextProps,nextState);}},{key:'render',value:function render(){var _props=this.props;var label=_props.label;var onChange=_props.onChange;var value=_props.value;var style=_props.style;var h=value.h;var s=value.s;var v=value.v;var a=value.a; // Preact does not pick up Components defaultProps
	style=style||HSVColorPicker.defaultProps.style; // Used to prevent collisions between fill() refs
	var uuid=Math.floor(Math.random()*999999999999999);return _preact2.default.h('div',null,_preact2.default.h('div',{style:_extends({},_styles.base,style)},_preact2.default.h(_preactSvg2.default,{width:'100%',height:'100%',version:'1.1',xmlns:'http://www.w3.org/2000/svg',style:defaultStyle,onMouseDown:this.onMouseDown,onMouseMove:this.state.drag?this.onMouseMove:null,onMouseUp:this.onMouseUp,onTouchStart:this.onMouseDown,onTouchMove:this.state.drag?this.onMouseMove:null,onTouchEnd:this.onMouseUp},_preact2.default.h('defs',null,_preact2.default.h('linearGradient',{id:"horizontal-gradient"+uuid},_preact2.default.h('stop',{offset:'0%','stop-color':'white'}),_preact2.default.h('stop',{offset:'100%','stop-color':"hsl("+h+",100%,50%)"})),_preact2.default.h('linearGradient',{id:"vertical-gradient"+uuid,x1:'0',x2:'0',y1:'0',y2:'1'},_preact2.default.h('stop',{offset:'0%','stop-color':'black','stop-opacity':'0'}),_preact2.default.h('stop',{offset:'100%','stop-color':'black'})),_preact2.default.h('linearGradient',{id:'alpha-gradient',x1:'0',x2:'1',y1:'0',y2:'0'},_preact2.default.h('stop',{offset:'0%','stop-color':"hsl("+h+",100%,50%)",'stop-opacity':'0'}),_preact2.default.h('stop',{offset:'100%','stop-color':"hsl("+h+",100%,50%)",'stop-opacity':'100'})),_preact2.default.h('linearGradient',{id:'hsv-gradient'},stops)),_preact2.default.h('rect',{width:'100%',height:'100%',style:rect,fill:'url(#horizontal-gradient'+uuid+')'}),_preact2.default.h('rect',{width:'100%',height:'100%',style:rect,fill:'url(#vertical-gradient'+uuid+')'}),_preact2.default.h('circle',{fill:'none',stroke:'white','stroke-width':'1.5',r:'0.3em',cx:s+'%',cy:100-v+'%'}))),_preact2.default.h(_slider2.default,{includeStepper:false,label:'',step:1,min:1,max:360,value:h,style:hueSlider,onChange:this.onHueChange}),a!==undefined?_preact2.default.h(_slider2.default,{includeStepper:false,label:'alpha',step:0.001,min:0,max:1,value:a,style:alphaSlider,onChange:this.onAlphaChange}):null,_preact2.default.h('div',{style:_extends({},_styles.base,stepperStyle)},_preact2.default.h(_numericstepper2.default,{key:'h',style:componentLabels,step:1,min:1,max:360,value:Math.round(h),onChange:this.onHueChange,label:'H'}),_preact2.default.h(_numericstepper2.default,{key:'s',style:componentLabels,step:1,min:1,max:100,value:Math.round(s),onChange:this.onSaturationChange,label:'S'}),_preact2.default.h(_numericstepper2.default,{key:'v',style:componentLabels,step:1,min:1,max:100,value:Math.round(v),onChange:this.onValueChange,label:'V'})));}}]);return HSVColorPicker;}(_preact2.default.Component);HSVColorPicker.defaultProps={label:'HSVColorPicker',style:{width:'100%',height:150},value:{h:0,s:80,l:50}};HSVColorPicker.propTypes={ /**
	     *  A text label
	     */label:_propTypes2.default.string, /**
	     * The default color of the component
	     */value:_propTypes2.default.shape({h:_propTypes2.default.number.isRequired,s:_propTypes2.default.number.isRequired,v:_propTypes2.default.number.isRequired}).isRequired, /**
	     * Optional component styling
	     */style:_propTypes2.default.object};var defaultStyle={cursor:'default',display:'block'};var hueSlider={backgroundBar:{fill:'url(#hsv-gradient)'},bar:{fill:'none'},thumb:{fill:'white'},padding:'1em'};var alphaSlider={backgroundBar:{fill:'url(#alpha-gradient)'},bar:{fill:'none'},thumb:{fill:'white'},padding:'1em'};var stepperStyle={ // marginLeft: '0.3em',
	// marginRight: '0.3em'
	};var componentLabels={display:'inline'};var colorDrop={borderRadius:"50%",width:'1em',height:'1em',float:'right'};var rect={rx:_styles.base.borderRadius,ry:_styles.base.borderRadius}; /*
	    Creates an array of svg `<stop>` elements representing a full linear gradient
	    from hue 0 -> 360 in a given number of steps
	*/var createLinearGradientOfSVGStops=function createLinearGradientOfSVGStops(steps){var l=0,i=100/steps,stops=[];while(l++<steps){stops.push(_preact2.default.h('stop',{offset:String(i*l)+"%",key:l,'stop-color':"hsl( "+l*360/steps+", 100%, 50% )"}));}return stops;}; /*
	    Pre calculate an array of `<stops>` to use as the slider gradient
	*/var stops=createLinearGradientOfSVGStops(100);exports.default=(0,_catchDegenerateHsv2.default)(HSVColorPicker);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.color=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _colorpicker=__webpack_require__(27);var _colorpicker2=_interopRequireDefault(_colorpicker);var _annotate=__webpack_require__(4);var _withChangeObject=__webpack_require__(7);var _withChangeObject2=_interopRequireDefault(_withChangeObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_colorpicker2.default;var color=exports.color=function color(options){return (0,_annotate.annotate)(_extends({},options,{control:(0,_withChangeObject2.default)(_colorpicker2.default)}));};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}; /** @jsx React.h */var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _colr=__webpack_require__(12);var _colr2=_interopRequireDefault(_colr);var _button=__webpack_require__(14);var _button2=_interopRequireDefault(_button);var _styles=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} // import MdRemove from 'react-icons/lib/md/remove';
	/**
	 * The ColorButton is simply a coloured button used as
	 * square glyph in the colour palette
	 */var ColorButton=function ColorButton(props){var value=props.value;var onClick=props.onClick;var children=props.children;var color=_colr2.default.fromHsvObject(value).toHex();var style={backgroundColor:color,width:'1em',height:'1em', // marginLeft: '0.3em',
	marginBottom:'0.5em',marginRight:'0.5em',padding:'0.5em',display:'inline-block',':hover':{backgroundColor:color}};return _preact2.default.h(_button2.default,_extends({label:''},props,{style:style}),children);};var Palette=function(_React$Component){_inherits(Palette,_React$Component);function Palette(){_classCallCheck(this,Palette);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Palette).call(this));_this.state={hover:null};return _this;}_createClass(Palette,[{key:'render',value:function render(){var _this2=this;var _props=this.props;var values=_props.values;var onSelect=_props.onSelect;var onDeselect=_props.onDeselect;var hover=this.state.hover; //
	var areColoursRemoveable=onDeselect!==undefined; // If we have no colors then don't bother showing anything
	if(!values||values.length===0)return null;return _preact2.default.h('div',null,values.map(function(color,i){return _preact2.default.h(ColorButton,{key:i,value:color,onMouseOver:function onMouseOver(e){return areColoursRemoveable&&e.shiftKey?_this2.setState({hover:i}):null;},onMouseOut:areColoursRemoveable?function(e){return _this2.setState({hover:null});}:null,onClick:function onClick(e){return e.shiftKey?onDeselect(color,i):onSelect(color);}},i===hover?_preact2.default.h('div',null):null);}));}}]);return Palette;}(_preact2.default.Component);Palette.defaultProps={ /**
	     * An array of colors
	     */values:[],onSelect:function onSelect(a){return a;}};Palette.propTypes={values:_propTypes2.default.arrayOf(_propTypes2.default.shape({h:_propTypes2.default.number.isRequired,s:_propTypes2.default.number.isRequired,v:_propTypes2.default.number.isRequired})).isRequired,onSelect:_propTypes2.default.func,onDeselect:_propTypes2.default.func, /**
	     * Optional component styling
	     */style:_propTypes2.default.object};var style={margin:'0.5em'};exports.default=Palette;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _styles=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */var defaultStyle={float:'right',":focus":{outline:'none'}}; /**
	    Another simple component. The Combobox provides a basic wrapper around the
	    native form element with support for an array of strings, an array
	    of key value tuples, or an object.
	*/var ComboBox=function(_React$Component){_inherits(ComboBox,_React$Component);function ComboBox(){_classCallCheck(this,ComboBox);return _possibleConstructorReturn(this,Object.getPrototypeOf(ComboBox).apply(this,arguments));}_createClass(ComboBox,[{key:'render',value:function render(){var _props=this.props;var label=_props.label;var options=_props.options;var value=_props.value;var _onChange=_props.onChange;var isArray=Array.isArray(options);var valueSelected=false;var optionsElems=[],arrOptions=[];for(var i in options){var element=void 0;arrOptions.push(options[i]);if(options[i]===value&&!valueSelected){valueSelected=true;element=_preact2.default.h('option',{key:i,value:options[i],selected:true},isArray?options[i]:i);}else {element=_preact2.default.h('option',{key:i,value:options[i]},isArray?options[i]:i);}optionsElems.push(element);}return _preact2.default.h('div',{style:_styles.base},_preact2.default.h('label',null,label),_preact2.default.h('select',{onChange:function onChange(e){return _onChange(arrOptions[e.target.selectedIndex]);},style:defaultStyle},optionsElems));}}]);return ComboBox;}(_preact2.default.Component);ComboBox.defaultProps={ /**
		 * A text label
		 */label:'ComboBox', /**
		 * An array of options to populate the combobox
		 */options:[], /**
		 * A callback triggered when the component updates
		 */onChange:function onChange(a){return a;}};ComboBox.propTypes={label:_propTypes2.default.any,options:_propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,_propTypes2.default.objectOf(_propTypes2.default.any).isRequired]),value:_propTypes2.default.any.isRequired,onChange:_propTypes2.default.func};exports.default=ComboBox;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.combobox=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _combobox=__webpack_require__(32);var _combobox2=_interopRequireDefault(_combobox);var _annotate=__webpack_require__(4);var _withChangeObject=__webpack_require__(7);var _withChangeObject2=_interopRequireDefault(_withChangeObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_combobox2.default;var combobox=exports.combobox=function combobox(options){return (0,_annotate.annotate)(_extends({},options,{control:(0,_withChangeObject2.default)(_combobox2.default)}));};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _styles=__webpack_require__(2);var _expandLess=__webpack_require__(17);var _expandLess2=_interopRequireDefault(_expandLess);var _expandMore=__webpack_require__(18);var _expandMore2=_interopRequireDefault(_expandMore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */ // import radium from 'radium'
	// import Tree from "../../render-tree"
	/*
	    The Folder is a container component that can be toggled opened and closed.
	    To render it's children, it accepts an array or object of react elements.
	*/var Folder=function(_Component){_inherits(Folder,_Component);function Folder(){_classCallCheck(this,Folder);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Folder).call(this));_this.state={open:false};_this.toggleOpen=function(_){return _this.setState({open:!_this.state.open});};return _this;}_createClass(Folder,[{key:'render',value:function render(){var _props=this.props;var label=_props.label;var value=_props.value;var style=_props.style;var open=this.state.open;var Chevron=open?_expandMore2.default:_expandLess2.default;return _preact2.default.h('div',{style:_styles.base},_preact2.default.h('div',{onClick:this.toggleOpen,style:{display:'flex',alignItems:'center'}},_preact2.default.h('label',null,label),_preact2.default.h(Chevron,{style:{marginLeft:'auto'}})),open?_preact2.default.h('div',{style:{padding:'1em',backgroundColor:'rgba( 1, 1, 1, 0.04 )',borderRadius:2}},value()):null);}}]);return Folder;}(_preact.Component); // Folder = radium( Folder )
	Folder.defaultProps={label:'Folder',onChange:function onChange(a){return a;}};Folder.propTypes={ // value : PropTypes.oneOfType([
	//     PropTypes.object,
	//     PropTypes.array,
	// ]).isRequired,
	value:_propTypes2.default.func.isRequired,onChange:_propTypes2.default.func,label:_propTypes2.default.string,style:_propTypes2.default.object};var floatRight={ // float: 'right'
	};exports.default=Folder;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _folder=__webpack_require__(34);var _folder2=_interopRequireDefault(_folder);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_folder2.default;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _preactSvg=__webpack_require__(5);var _preactSvg2=_interopRequireDefault(_preactSvg);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _styles=__webpack_require__(2);var _math=__webpack_require__(6);var _warning=__webpack_require__(44);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else {return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */var defaultStyle={nonScalingStroke:{vectorEffect:'non-scaling-stroke',shapeRendering:'geometricPrecision'},rect:{fill:'none',strokeWidth:1,stroke:_styles.secondary.color}}; /**
	This is a read only component that visualises an array of numbers as a line graph.
	entries are plotted along the X axis with their value the Y axis. The domain of
	the graph can beset using the `min` and `max` properties, however if none are
	supplied, they're calculated using the inherent minimum and maximum values from
	the suplied data.

	Handy for plotting functions, visualising sound information and graphing general data
	*/var Graph=function(_React$Component){_inherits(Graph,_React$Component);function Graph(){_classCallCheck(this,Graph);return _possibleConstructorReturn(this,Object.getPrototypeOf(Graph).apply(this,arguments));}_createClass(Graph,[{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var style=_props.style;var min=_props.min;var max=_props.max;var fill=_props.fill;(0,_warning2.default)(value.length<=1,"warning: The `graph` component expects and array of more than 1 number. Any less will result in an empty graph."); /**
	         *  If no domain is supplied, calculate based on the bounds
	         *  of the `value` data
	         */min=min!==undefined?min:Math.min.apply(Math,_toConsumableArray(value));max=max!==undefined?max:Math.max.apply(Math,_toConsumableArray(value)); /*
	            The data is rendered using a SVG Polyine which expects an array of `x`
	            `y` values. Here we fill in the missing `y` values
	        */var value2D=[],length=value.length,n=void 0,interval=100/(length-1);for(var i=0;i<length;i++){n=value[i];value2D.push(String(i*interval));value2D.push(String((0,_math.map)(n,min,max,100,0)));} /*
	            If the graph is to be filled in, we need to create additional values at
	            the start and end of the sequence.
	        */if(fill){value2D=['0','100'].concat(value2D,['100','100']);} /*
	            If our domain is degenerate, then don't bother rendering the polyline
	        */return _preact2.default.h('div',{style:_styles.base},label,_preact2.default.h('div',{style:style},_preact2.default.h(_preactSvg2.default,{style:_extends({},_styles.base,{display:'block'}),width:'100%',height:'100%',viewBox:'0 0 100 100',preserveAspectRatio:'none'},_preact2.default.h('rect',{style:_extends({},defaultStyle.rect,defaultStyle.nonScalingStroke),width:'100%',height:'100%'}),min<max?_preact2.default.h('polyline',{style:defaultStyle.nonScalingStroke,fill:fill?_styles.highlight.color:'none',stroke:_styles.highlight.color,points:value2D}):null)));}}]);return Graph;}(_preact2.default.Component);var arrayLikeStructures=[_propTypes2.default.arrayOf(_propTypes2.default.number),_propTypes2.default.instanceOf(Int8Array),_propTypes2.default.instanceOf(Uint8Array),_propTypes2.default.instanceOf(Uint8ClampedArray),_propTypes2.default.instanceOf(Int16Array),_propTypes2.default.instanceOf(Uint16Array),_propTypes2.default.instanceOf(Int32Array),_propTypes2.default.instanceOf(Uint32Array),_propTypes2.default.instanceOf(Float32Array),_propTypes2.default.instanceOf(Float64Array)];Graph.propTypes={ /**
		 * A text label
		 */label:_propTypes2.default.string, /**
	     * An array of numerical data
	     */value:_propTypes2.default.oneOfType(arrayLikeStructures).isRequired, /**
	     * Defines the minimum range of the graph.
	     */min:_propTypes2.default.number, /**
	     * Defines the maximum range of the graph.
	     */max:_propTypes2.default.number, /**
	     * If true, the graph will be a solid color
	     */fill:_propTypes2.default.bool, /**
	     * Optional component styling
	     */style:_propTypes2.default.object};Graph.defaultProps={fill:false,label:'Graph',value:[],style:{width:'100%',height:150}};exports.default=Graph;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.graph=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _graph=__webpack_require__(36);var _graph2=_interopRequireDefault(_graph);var _annotate=__webpack_require__(4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_graph2.default;var graph=exports.graph=function graph(options){return (0,_annotate.annotate)(_extends({},options,{control:_graph2.default}));};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _math=__webpack_require__(6);var _styles=__webpack_require__(2);var _shallowCompare=__webpack_require__(11);var _shallowCompare2=_interopRequireDefault(_shallowCompare);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */ // import radium from 'radium'
	/**
	    This component is an alternative way to control a number. It's generally used
	    for unbounded numerical ranges, when a minimum or maximum isn't unneccesary,
	    although you can optionally supply either.
	*/var NumericStepper=function(_React$Component){_inherits(NumericStepper,_React$Component);function NumericStepper(){_classCallCheck(this,NumericStepper);return _possibleConstructorReturn(this,Object.getPrototypeOf(NumericStepper).apply(this,arguments));}_createClass(NumericStepper,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){return (0,_shallowCompare2.default)(this,nextProps,nextState);}},{key:'render',value:function render(){var _this2=this;var _props=this.props;var label=_props.label;var min=_props.min;var max=_props.max;var step=_props.step;var style=_props.style;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);};var value=validate(this.props.value);var onChange=function onChange(e){e.preventDefault();var value=parseFloat(e.currentTarget.value);if(!isNaN(value))_this2.props.onChange(validate(value));};return _preact2.default.h('div',{style:_extends({},_styles.base,{display:'flex',alignItems:'baseline'},style)},_preact2.default.h('label',null,label),_preact2.default.h('style',null,'\n                input[type=number] {\n                    -moz-appearance:textfield;\n                }\n\n                input::-webkit-inner-spin-button,\n                input::-webkit-outer-spin-button{\n                    margin: 0;\n                    -webkit-appearance: none;\n                }\n            '),_preact2.default.h('input',_extends({type:'number'},this.props,{style:defaultStyle,value:value,onInput:onChange,onChange:onChange,ref:function ref(_ref){return _this2.domRef=_ref;}})));}}]);return NumericStepper;}(_preact2.default.Component); // NumericStepper = radium( NumericStepper )
	NumericStepper.propTypes={ /**
	     *  A text label
	     */label:_propTypes2.default.string, /**
	     *  The value of the slider
	     */value:_propTypes2.default.number.isRequired, /**
	     *  Specifies the minimum value for the component
	     */min:_propTypes2.default.number, /**
	     *  Specifies the maximum value for the component
	     */max:_propTypes2.default.number, /**
	     * Specifies the intervals step
	     */step:_propTypes2.default.number, /**
		 * A callback triggered when the component updates
		 */onChange:_propTypes2.default.func, /**
	     * Optional component styling
	     */style:_propTypes2.default.object};NumericStepper.defaultProps={label:'NumericStepper',min:0,max:100,style:{width:'100%'},step:0.1,onChange:function onChange(a){return a;}};var defaultStyle={fontFamily:'inherit',borderWidth:1,borderStyle:'solid',borderColor:_styles.secondary.color,borderRadius:2,backgroundColor:'transparent',outline:'none',textAlign:'center',width:30,fontSize:_styles.base.fontSize, // lineHeight: '15  px',
	color:_styles.base.color, // float:'right',
	marginLeft:'auto',":focus":{borderColor:_styles.highlight.color},":hover":{borderColor:_styles.highlight.color}};exports.default=NumericStepper;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _panel=__webpack_require__(40);var _panel2=_interopRequireDefault(_panel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_panel2.default;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _styles=__webpack_require__(2);var _expandLess=__webpack_require__(17);var _expandLess2=_interopRequireDefault(_expandLess);var _expandMore=__webpack_require__(18);var _expandMore2=_interopRequireDefault(_expandMore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */var Panel=function(_React$Component){_inherits(Panel,_React$Component);function Panel(){_classCallCheck(this,Panel);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Panel).call(this));_this.state={open:true};_this.toggleOpen=function(_){return _this.setState({open:!_this.state.open});};return _this;}_createClass(Panel,[{key:'render',value:function render(){var _props=this.props;var children=_props.children;var label=_props.label;var open=this.state.open;var Chevron=open?_expandMore2.default:_expandLess2.default;return _preact2.default.h('div',{style:_extends({},_styles.base,style),'class':'oui-panel'},_preact2.default.h('header',{style:{lineHeight:'11px'},onClick:this.toggleOpen},_preact2.default.h('div',{style:{display:'flex'}},_preact2.default.h('label',null,label),_preact2.default.h(Chevron,{style:{marginLeft:'auto'}})),open?_preact2.default.h('hr',{style:lineStyle}):null),open?_preact2.default.h('div',{style:{overflowY:'scroll',maxHeight:'90%'}},children):null);}}]);return Panel;}(_preact2.default.Component);Panel.defaultProps={label:'Panel'};var lineStyle={borderWidth:'0px 0px 1px 0px',borderTopStyle:'solid',borderRightStyle:'solid',borderLeftStyle:'solid',borderTopColor:_styles.secondary.color,borderRightColor:_styles.secondary.color,borderLeftColor:_styles.secondary.color,borderBottomColor:_styles.secondary.color};var style={boxSizing:'border-box',lineHeight:'2em',display:'flex',flexDirection:'column',width:275,background:'rgb( 250, 250, 250 )',borderRadius:2,padding:'1em',margin:0};exports.default=Panel;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _preactSvg=__webpack_require__(5);var _preactSvg2=_interopRequireDefault(_preactSvg);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _numericstepper=__webpack_require__(9);var _numericstepper2=_interopRequireDefault(_numericstepper);var _shallowCompare=__webpack_require__(11);var _shallowCompare2=_interopRequireDefault(_shallowCompare);var _math=__webpack_require__(6);var _throttle=__webpack_require__(10);var _throttle2=_interopRequireDefault(_throttle);var _styles=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */ // import radium from 'radium'
	/**
	    A classic numerical slider, useful for representing numbers within a bounded
	    range. It also contains a `NumericalStepper` for displaying the text value
	    and entering values directly.
	*/var Slider=function(_React$Component){_inherits(Slider,_React$Component);function Slider(){_classCallCheck(this,Slider);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Slider).call(this));_this.state={drag:false,rect:null};_this.validate=function(value){var _this$props=_this.props;var onChange=_this$props.onChange;var min=_this$props.min;var max=_this$props.max;var step=_this$props.step;value=(0,_math.clamp)(value,min,max);value=Math.round(value*(1/step))/(1/step);return value;};_this.onNumericStepperChange=function(value){_this.props.onChange(_this.validate(value));}; /*
	            Compute the numerical value from a touch/mouse event
	        */var computeValuefromMouseEvent=function computeValuefromMouseEvent(e,bounds){return (0,_math.map)(e.clientX===undefined?e.touches[0].clientX:e.clientX,bounds.left,bounds.right,_this.props.min,_this.props.max);}; /*
	            Computes the value on mouse/touch down and triggers an `onChange`
	        */_this.onMouseDown=function(e){e.preventDefault();var _this$props2=_this.props;var value=_this$props2.value;var min=_this$props2.min;var max=_this$props2.max;var step=_this$props2.step;var onChange=_this$props2.onChange;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);}; /*
	                For performance reasons we pre calculate the bounding rect on
	                mouse down, this means we don't need to do this on every mouse move
	                event and therefore we avoid any layout thrashing.

	                The caveat is that any sizing changes that occur between mousedown
	                will cause mean the cached boundingRect is invalid and causes incorrect
	                results. However because of performance gains, this is acceptable
	                behaviour as changes to size are expected to be rare enough
	            */var rect=e.currentTarget.getBoundingClientRect();_this.setState({drag:true,rect:rect});onChange(validate(computeValuefromMouseEvent(e,rect)));}; /*
	            On mouse/touch move, trigger an onChange event
	        */_this.onMouseMove=(0,_throttle2.default)(function(e){var _this$props3=_this.props;var value=_this$props3.value;var min=_this$props3.min;var max=_this$props3.max;var step=_this$props3.step;var onChange=_this$props3.onChange;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);};onChange(validate(computeValuefromMouseEvent(e,_this.state.rect)));});_this.onTouchMove=(0,_throttle2.default)(function(e){e.preventDefault();var _this$props4=_this.props;var value=_this$props4.value;var min=_this$props4.min;var max=_this$props4.max;var step=_this$props4.step;var onChange=_this$props4.onChange;var validate=function validate(v){return Math.round((0,_math.clamp)(v,min,max)*(1/step))/(1/step);};onChange(validate(computeValuefromMouseEvent(e,_this.state.rect)));}); /*
	            changes the dragging state
	        */_this.onMouseUp=function(e){_this.setState({drag:false});};return _this;}_createClass(Slider,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){return (0,_shallowCompare2.default)(this,nextProps,nextState);}},{key:'componentDidUpdate',value:function componentDidUpdate(props,state){if(this.state.drag&&!state.drag){document.addEventListener('mousemove',this.onMouseMove);document.addEventListener('mouseup',this.onMouseUp);document.addEventListener('touchmove',this.onTouchMove);document.addEventListener('touchend',this.onMouseUp);}else if(!this.state.drag&&state.drag){document.removeEventListener('mousemove',this.onMouseMove);document.removeEventListener('mouseup',this.onMouseUp);document.removeEventListener('touchmove',this.onTouchMove);document.removeEventListener('touchend',this.onMouseUp);}}},{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var min=_props.min;var max=_props.max;var step=_props.step;var onChange=_props.onChange;var includeStepper=_props.includeStepper;var style=_props.style;var stepperProps={value:value,label:label,min:min,max:max,step:step,onChange:onChange};var offsetPercentage=(0,_math.map)((0,_math.clamp)(value,min,max),min,max,0,100)+'%';value=this.validate(value);return _preact2.default.h('div',{style:_styles.base},includeStepper?_preact2.default.h(_numericstepper2.default,_extends({},stepperProps,{onChange:this.onNumericStepperChange})):null,_preact2.default.h(_preactSvg2.default,{width:'100%',height:'1em',style:defaultStyle,onMouseDown:this.onMouseDown,onTouchStart:this.onMouseDown},_preact2.default.h('rect',{width:'100%',height:'100%',style:_extends({},defaultStyle,backgroundBar,style.backgroundBar)}),_preact2.default.h('rect',_defineProperty({width:'100%',height:'100%',style:_extends({},defaultStyle,bar,style.bar)},'width',offsetPercentage)),_preact2.default.h('circle',{cy:'50%',cx:offsetPercentage,r:'0.5em',style:_extends({},defaultStyle,thumb,style.thumb)})));}}]);return Slider;}(_preact2.default.Component); // Slider = radium( Slider )
	Slider.propTypes={ /**
	     *  A text label
	     */label:_propTypes2.default.string, /**
	     *  The value of the slider
	     */value:_propTypes2.default.number.isRequired, /**
	     *  Specifies the minimum value for the component
	     */min:_propTypes2.default.number, /**
	     *  Specifies the maximum value for the component
	     */max:_propTypes2.default.number, /**
	     * Specifies the intervals step
	     */step:_propTypes2.default.number, /**
		 * A callback triggered when the component updates
		 */onChange:_propTypes2.default.func, /**
	     *  If false, the numeric stepper is not displayed
	     */includeStepper:_propTypes2.default.bool, /**
	     * Optional component styling
	     */style:_propTypes2.default.object};Slider.defaultProps={label:'Slider',includeStepper:true,min:0,max:100,step:1,onChange:function onChange(a){return a;},style:{width:'100%'}};var defaultStyle={display:'block',overflow:'visible',cursor:'default',stroke:'none',rx:2,ry:2};var thumb={fill:'none'};var backgroundBar={fill:_styles.secondary.color};var bar={fill:_styles.highlight.color};exports.default=Slider;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _textinput=__webpack_require__(43);var _textinput2=_interopRequireDefault(_textinput);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_textinput2.default;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _styles=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */ // import radium from 'radium'
	/**

		A simple wrapper around a editable text field. It pretty much does what you'd
		expect it to.

	*/var TextInput=function(_React$Component){_inherits(TextInput,_React$Component);function TextInput(){_classCallCheck(this,TextInput);return _possibleConstructorReturn(this,Object.getPrototypeOf(TextInput).apply(this,arguments));}_createClass(TextInput,[{key:'render',value:function render(){var _props=this.props;var value=_props.value;var label=_props.label;var onChange=_props.onChange;var style=_props.style;return _preact2.default.h('div',{style:_extends({},_styles.base,style,{display:'flex'})},_preact2.default.h('label',null,label),_preact2.default.h('input',{type:'text',value:value,style:_extends({},defaultStyle),onInput:function onInput(evt){return onChange(evt.target.value);}}));}}]);return TextInput;}(_preact2.default.Component); // TextInput = radium( TextInput )
	TextInput.propTypes={ /**
		 * The default value for the text input field
		 */value:_propTypes2.default.string, /**
		 * A function called when the text field changes
		 */onChange:_propTypes2.default.func, /**
		 * A text label for the input field
		 */label:_propTypes2.default.string, /**
	     * Optional component styling
	     */style:_propTypes2.default.object};TextInput.defaultProps={value:'',style:{width:'100%'},label:'Text Input',onChange:function onChange(a){return a;}};var defaultStyle={fontFamily:'inherit',fontSize:'inherit',color:'inherit',borderTop:'none',borderLeft:'none',borderRight:'none',borderRadius:'none',marginLeft:'auto',textAlign:'right',borderBottom:'1px solid '+_styles.secondary.color,backgroundColor:'transparent',":focus":{outline:'none',borderBottom:'1px solid '+_styles.highlight.color},":hover":{borderBottom:'1px solid '+_styles.highlight.color}};exports.default=TextInput;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(condition,message){ /*
	        TODO

	        Probably need to to something more intelligent here than simply logging an
	        error. Something like only raising if a `production` variable is set,
	        or not throwing more than needed. Keep the console nice and clean :)
	    */if(condition){if(typeof console!=='undefined'){console.warn(message);}}};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _renderTree=__webpack_require__(20);var _renderTree2=_interopRequireDefault(_renderTree);var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /*
	    The `core-controllers` Folder component generates it's children using a function
	    passed in it's props. This is only called when it's open meaning that the whole
	    render tree is lazily instantiated, and only as much as neccesary.

	    This Component wraps the `core-controllers/Folder` by providing the default
	    `render-tree` function to generate the render list. Doing this in it's own
	    component rather than directly on the Folder component itself means we can
	    normalize the api in 'render-tree'
	*/ /** @jsx React.h */exports.default=function(FolderComponent){ // let style = {
	//     paddingBottom: '0.5em',
	//     paddingTop: '0.5em',
	//     borderBottom: '1px solid rgb( 230, 230, 230 )'
	// }
	var WrappedComponent=function(_FolderComponent){_inherits(WrappedComponent,_FolderComponent);function WrappedComponent(){_classCallCheck(this,WrappedComponent);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(WrappedComponent).call(this));_this.tree=function(_){return (0,_renderTree2.default)(_this.props.value,_this.props.onChange);};return _this;}_createClass(WrappedComponent,[{key:'render',value:function render(){return _preact2.default.h(FolderComponent,_extends({},this.props,{value:this.tree}));}}]);return WrappedComponent;}(FolderComponent);WrappedComponent.propTypes={value:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array]).isRequired,onChange:_propTypes2.default.func,label:_propTypes2.default.string,style:_propTypes2.default.object};return WrappedComponent;};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.xypad=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _xypad=__webpack_require__(47);var _xypad2=_interopRequireDefault(_xypad);var _annotate=__webpack_require__(4);var _withChangeObject=__webpack_require__(7);var _withChangeObject2=_interopRequireDefault(_withChangeObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_xypad2.default;var xypad=exports.xypad=function xypad(options){return (0,_annotate.annotate)(_extends({},options,{control:(0,_withChangeObject2.default)(_xypad2.default)}));};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);var _preactSvg=__webpack_require__(5);var _preactSvg2=_interopRequireDefault(_preactSvg);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _numericstepper=__webpack_require__(9);var _numericstepper2=_interopRequireDefault(_numericstepper);var _math=__webpack_require__(6);var _throttle=__webpack_require__(10);var _throttle2=_interopRequireDefault(_throttle);var _styles=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /** @jsx React.h */ /**

	    This component provides a generic way of controlling 2d numerical quantities such as
	    vectors. It's a staple of traditional A/V style applications as a way to
	    play with multiple inputs via one interaction. Useful for positional values.
	    In this case the values signature is `{x:Number, y:Number}`.

	*/var XYPad=function(_React$Component){_inherits(XYPad,_React$Component);function XYPad(){_classCallCheck(this,XYPad);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(XYPad).call(this));_this.state={drag:false,open:true};var computeXYfromMouseEvent=function computeXYfromMouseEvent(e,bounds){return {x:(0,_math.map)(e.clientX===undefined?e.touches[0].clientX:e.clientX,bounds.left,bounds.right,_this.props.min.x,_this.props.max.x),y:(0,_math.map)(e.clientY===undefined?e.touches[0].clientY:e.clientY,bounds.top,bounds.bottom,_this.props.min.y,_this.props.max.y)};};_this.onMouseDown=function(e){ /*
	                For performance reasons we pre calculate the bounding rect on
	                mouse down, this means we don't need to do this on every mouse move
	                event and therefore we avoid any layout thrashing.

	                The caveat is that any sizing changes that occur between mousedown
	                will cause mean the cached boundingRect is invalid and causes incorrect
	                results. However because of performance gains, this is acceptable
	                behaviour as changes to size are expected to be rare enough
	            */var rect=e.currentTarget.getBoundingClientRect();_this.setState({drag:true,rect:rect});_this.props.onChange(computeXYfromMouseEvent(e,rect));};_this.onMouseMove=(0,_throttle2.default)(function(e){if(_this.state.drag)_this.props.onChange(computeXYfromMouseEvent(e,_this.state.rect));});_this.onTouchMove=function(e){e.preventDefault();if(_this.state.drag)_this.props.onChange(computeXYfromMouseEvent(e,_this.state.rect));};_this.onMouseUp=function(e){_this.setState({drag:false});};_this.onXChange=function(x){return _this.props.onChange(_extends({},_this.props.value,{x:x}));};_this.onYChange=function(y){return _this.props.onChange(_extends({},_this.props.value,{y:y}));};return _this;} /*
	        We're deliberatley not performing any comparison here. This is because
	        the props passed in would have to be a copy of the original value, which
	        currently isn't the case
	    */ // shouldComponentUpdate( nextProps, nextState ){}
	_createClass(XYPad,[{key:'render',value:function render(){var _this2=this;var _props=this.props;var value=_props.value;var label=_props.label;var onChange=_props.onChange;var style=_props.style;var open=this.state.open;var x=value.x;var y=value.y;var min=_extends({},this.props.min,XYPad.min),max=_extends({},this.props.max,XYPad.max);var xVis=(0,_math.map)(x,min.x,max.x,0,100)+'%',yVis=(0,_math.map)(y,min.y,max.y,0,100)+'%';console.log(_preactSvg2.default);return _preact2.default.h('div',{style:_extends({},_styles.base,{height:'auto'})},_preact2.default.h('div',{style:{display:'flex',alignItems:'center'}},_preact2.default.h('label',{onClick:function onClick(v){return _this2.setState({open:!open});}},label),_preact2.default.h('div',{style:{display:'flex',marginLeft:'auto'}},_preact2.default.h(_numericstepper2.default,{style:componentLabels,min:min.x,max:max.x,value:x,onChange:this.onXChange,label:'X'}),_preact2.default.h(_numericstepper2.default,{style:componentLabels,min:min.y,max:max.y,value:y,onChange:this.onYChange,label:'Y'}))),open?_preact2.default.h(_preactSvg2.default,{width:'100%',height:'100%',xmlns:'http://www.w3.org/2000/svg',style:_extends({},defaultStyle,style),ref:function ref(_ref){return _this2.domRef=_ref;},onMouseDown:this.onMouseDown,onMouseMove:this.state.drag?this.onMouseMove:null,onMouseUp:this.onMouseUp,onTouchStart:this.onMouseDown,onTouchMove:this.onTouchMove,onTouchEnd:this.onMouseUp},_preact2.default.h('rect',{fill:'none',stroke:_styles.secondary.color,'stroke-width':'1',width:'100%',height:'100%'}),_preact2.default.h('line',{x1:xVis,x2:xVis,y1:0,y2:'100%',style:_extends({},defaultStyle,style,crisp)}),_preact2.default.h('line',{x1:0,x2:'100%',y1:yVis,y2:yVis,style:_extends({},defaultStyle,style,crisp)}),_preact2.default.h('circle',{r:3,cx:xVis,cy:yVis,style:circle})):null);}}]);return XYPad;}(_preact2.default.Component);XYPad.propTypes={ /**
	     * A text label
	     */label:_propTypes2.default.string, /**
	     *  The initial value of the component
	     */value:_propTypes2.default.shape({x:_propTypes2.default.number.isRequired,y:_propTypes2.default.number.isRequired}).isRequired, /**
	     *  The minimum bounding range
	     */min:_propTypes2.default.shape({x:_propTypes2.default.number,y:_propTypes2.default.number}), /**
	     *  The maximum bounding range
	     */max:_propTypes2.default.shape({x:_propTypes2.default.number,y:_propTypes2.default.number}), /**
	     *  Called when the component updates
	     */onChange:_propTypes2.default.func, /**
	     * Optional component styling
	     */style:_propTypes2.default.object};XYPad.defaultProps={label:'XYPad',style:{width:'100%',height:150},min:{x:0,y:0},max:{x:100,y:100},onChange:function onChange(a){return a;}};var defaultStyle={display:'block',cursor:'default',stroke:_styles.secondary.color,strokeWidth:1};var crisp={shapeRendering:'crispEdges'};var circle={fill:_styles.secondary.color,stroke:'none'};var componentLabels={display:'inline'};exports.default=XYPad;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _imperativeApi=__webpack_require__(19);var _imperativeApi2=_interopRequireDefault(_imperativeApi);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _add=function _add(obj,propName,target){return Object.defineProperty(target,propName,{get:function get(_){return obj[propName];},set:function set(v){return obj[propName]=v;},enumerable:true,configurable:true});};var _addFolder=function _addFolder(target){return {add:function add(obj,propName){return _add(obj,propName,target);},addFolder:function addFolder(propName){return _addFolder(target[propName]={});}};};exports.default=function(opts){var api={};var p=(0,_imperativeApi2.default)(opts);var draw=function draw(_){p(api);requestAnimationFrame(draw);};draw();return _addFolder(api);};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*
	    This module deeply mutatively merges properties of change `b` into `a`
	*/var _warn=__webpack_require__(8);var _warn2=_interopRequireDefault(_warn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var isWritable=function isWritable(obj,prop){var propDesc=Object.getOwnPropertyDescriptor(obj,prop);return propDesc?propDesc.writable===true||propDesc.set!==undefined:true;};var deepmerge=function deepmerge(a,b){var isFrozen=Object.isFrozen(a)||!Object.isExtensible(a);(0,_warn2.default)(isFrozen,'The merge target is frozen and cannot be mutated');if(isFrozen)return a;var breakOn=Array.isArray(a)&&b.length;var index=0;for(var prop in b){if(_typeof(a[prop])==='object'){var _isFrozen=Object.isFrozen(a[prop]);(0,_warn2.default)(_isFrozen,'The property `'+prop+'` is frozen and cannot be mutated.');if(!_isFrozen)deepmerge(a[prop],b[prop]);}else {var writable=isWritable(a,prop);(0,_warn2.default)(!writable,'The property `'+prop+'` is not writable and cannot be mutated.');if(writable)a[prop]=b[prop];}if(breakOn===++index)a.splice(breakOn);}return a;};exports.default=deepmerge;

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var element=document.createElement('div');element.style.position='absolute';element.style.left='0';element.style.top='0';element.style.padding='0.25em';element.style.display='flex';element.style.flexDirection='column';element.style.flexWrap='wrap';element.style.alignItems='flex-start';element.style.alignContent='flex-start';exports.default=element;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _imperativeApi=__webpack_require__(19);var _imperativeApi2=_interopRequireDefault(_imperativeApi);var _annotate=__webpack_require__(4);var _datoui=__webpack_require__(48);var _datoui2=_interopRequireDefault(_datoui);var _colorpicker=__webpack_require__(30);var _combobox=__webpack_require__(33);var _graph=__webpack_require__(37);var _xypad=__webpack_require__(46);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var oui=(0,_imperativeApi2.default)({label:'Master'});exports.default={oui:oui,panel:_imperativeApi2.default,datoui:_datoui2.default,annotate:_annotate.annotate,color:_colorpicker.color,combobox:_combobox.combobox,graph:_graph.graph,xypad:_xypad.xypad};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _slider=__webpack_require__(16);var _slider2=_interopRequireDefault(_slider);var _checkbox=__webpack_require__(25);var _checkbox2=_interopRequireDefault(_checkbox);var _textinput=__webpack_require__(42);var _textinput2=_interopRequireDefault(_textinput);var _folder=__webpack_require__(35);var _folder2=_interopRequireDefault(_folder);var _button=__webpack_require__(14);var _button2=_interopRequireDefault(_button);var _withChangeObject=__webpack_require__(7);var _withChangeObject2=_interopRequireDefault(_withChangeObject);var _withTree=__webpack_require__(45);var _withTree2=_interopRequireDefault(_withTree);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=new Map([['function',_button2.default],['number',(0,_withChangeObject2.default)(_slider2.default)],['string',(0,_withChangeObject2.default)(_textinput2.default)],['boolean',(0,_withChangeObject2.default)(_checkbox2.default)],['object',(0,_withChangeObject2.default)((0,_withTree2.default)(_folder2.default))]]);

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var hasOwnProperty=Object.prototype.hasOwnProperty; /**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */function is(x,y){ // SameValue algorithm
	if(x===y){ // Steps 1-5, 7-10
	// Steps 6.b-6.e: +0 != -0
	return x!==0||1/x===1/y;}else { // Step 6.a: NaN == NaN
	return x!==x&&y!==y;}} /**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */function shallowEqual(objA,objB){if(is(objA,objB)){return true;}if((typeof objA==='undefined'?'undefined':_typeof(objA))!=='object'||objA===null||(typeof objB==='undefined'?'undefined':_typeof(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;} // Test for A's keys different from B.
	for(var i=0;i<keysA.length;i++){if(!hasOwnProperty.call(objB,keysA[i])||!is(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}exports.default=shallowEqual;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.isValidControl=exports.validateProp=undefined;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*
	    Validates an object against a components `propTypes`
	*/var _warn=__webpack_require__(8);var _warn2=_interopRequireDefault(_warn);var _preact=__webpack_require__(1);var _preact2=_interopRequireDefault(_preact);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var validateProp=exports.validateProp=function validateProp(prop,propName,Comp){var name=Comp.displayName||Comp.name;var err=Comp.propTypes.value(prop,propName,name,'prop');(0,_warn2.default)(err,err?err.message:'');}; /*
	    Validates a control.

	    *At minimum, all controls _must_ accept a `value` property and declare a `propType`
	    object containing a `value` field. `onChange` and `label` are optional.*
	*/var isValidControl=exports.isValidControl=function isValidControl(Control){return _preact2.default.isValidElement(_preact2.default.createElement(Control,null))&&Control.propTypes&&_typeof(Control.propTypes)==='object'&&typeof Control.propTypes.value==='function';};

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  grayscale: {
	    rgb: grayscale2rgb
	  },
	  hex: {
	    rgb: hex2rgb,
	  },
	  rgb: {
	    hsl: rgb2hsl,
	    hsv: rgb2hsv,
	    hex: rgb2hex,
	    grayscale: rgb2grayscale
	  },
	  hsl: {
	    rgb: hsl2rgb,
	    hsv: hsl2hsv,
	  },
	  hsv: {
	    rgb: hsv2rgb,
	    hsl: hsv2hsl,
	  },
	};

	// convert a charcode to a hex val
	function hexVal (c) {
	  return (
	    c < 58 ? c - 48 : // 0 - 9
	    c < 71 ? c - 55 : // A - F
	    c - 87            // a - f
	  );
	}

	function hex2rgb (hex) {
	  var i = hex[0] === '#' ? 1 : 0;
	  var len = hex.length;

	  if (len - i < 3) {
	    throw new Error('hex input must be at least three chars long');
	  }

	  var r, g, b;

	  var h1 = hexVal(hex.charCodeAt(0+i));
	  var h2 = hexVal(hex.charCodeAt(1+i));
	  var h3 = hexVal(hex.charCodeAt(2+i));

	  if (len - i >= 6) {
	    r = (h1 << 4) + h2;
	    g = (h3 << 4) + hexVal(hex.charCodeAt(3+i));
	    b = (hexVal(hex.charCodeAt(4+i)) << 4) + hexVal(hex.charCodeAt(5+i));
	  } else {
	    r = (h1 << 4) + h1;
	    g = (h2 << 4) + h2;
	    b = (h3 << 4) + h3;
	  }

	  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
	    throw new Error('hex input is invalid');
	  }

	  return [r, g, b];
	}


	function rgb2hex (rgb) {
	  return '#' + (
	    '000000' +
	    ((rgb[0] << 16) +
	     (rgb[1] << 8) +
	      rgb[2]
	    ).toString(16)
	  ).slice(-6);
	}

	function rgb2hsl (rgb) {
	  var r = rgb[0] / 255;
	  var g = rgb[1] / 255;
	  var b = rgb[2] / 255;

	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, l;

	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }

	  h = Math.min(h * 60, 360);

	  if (h < 0) {
	    h += 360;
	  }

	  l = (min + max) / 2;

	  if (max === min) {
	    s = 0;
	  } else if (l <= 0.5) {
	    s = delta / (max + min);
	  } else {
	    s = delta / (2 - max - min);
	  }

	  return [h, s * 100, l * 100];
	}

	function rgb2hsv(rgb) {
	  var r = rgb[0];
	  var g = rgb[1];
	  var b = rgb[2];
	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, v;

	  if (max === 0) {
	    s = 0;
	  } else {
	    s = delta / max * 100;
	  }

	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }

	  h = Math.min(h * 60, 360);

	  if (h < 0) {
	    h += 360;
	  }

	  v = (max / 255) * 100;

	  return [h, s, v];
	}

	function hsl2rgb (hsl) {
	  var h = hsl[0] / 360;
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;

	  var r, g, b;

	  if (s === 0) { // monochrome
	    r = g = b = l;

	  } else {
	    var q = l < 0.5 ? l * (s + 1) : l + s - l * s;
	    var p = 2 * l - q;
	    var t;

	    // red
	    t = h + 1/3;
	    if      (t < 0) { t += 1; }
	    else if (t > 1) { t -= 1; }
	    if      (t < 1/6)  { r = p + (q - p) * t * 6; }
	    else if (t < 1/2 ) { r = q; }
	    else if (t < 2/3 ) { r = p + (q - p) * (2/3 - t) * 6; }
	    else               { r = p; }

	    // green
	    t = h;
	    if      (t < 0) { t += 1; }
	    else if (t > 1) { t -= 1; }
	    if      (t < 1/6)  { g = p + (q - p) * t * 6; }
	    else if (t < 1/2 ) { g = q; }
	    else if (t < 2/3 ) { g = p + (q - p) * (2/3 - t) * 6; }
	    else               { g = p; }

	    // blue
	    t = h - 1/3;
	    if      (t < 0) { t += 1; }
	    else if (t > 1) { t -= 1; }
	    if      (t < 1/6)  { b = p + (q - p) * t * 6; }
	    else if (t < 1/2 ) { b = q; }
	    else if (t < 2/3 ) { b = p + (q - p) * (2/3 - t) * 6; }
	    else               { b = p; }
	  }

	  return [r * 255, g * 255, b * 255];
	}

	function hsl2hsv(hsl) {
	  var h = hsl[0];
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;
	  var sv, v;

	  if (s === 0) {
	    return [h, 0, l * 100];
	  }

	  if (l === 0) {
	    return [h, 0, 0];
	  }

	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}

	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60;
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;

	  var hi = Math.floor(h) % 6;

	  var f = h - Math.floor(h);
	  var p = 255 * v * (1 - s);
	  var q = 255 * v * (1 - (s * f));
	  var t = 255 * v * (1 - (s * (1 - f)));
	      v = 255 * v;

	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}

	function hsv2hsl(hsv) {
	  var h = hsv[0];
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;
	  var sl, l;

	  if (s === 0) {
	    return [h, 0, v * 100];
	  }

	  if (v === 0) {
	    return [h, 0, 0];
	  }

	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}

	function grayscale2rgb (value) {
	  return [value, value, value];
	}

	function rgb2grayscale (rgb) {
	  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Reflect"] = factory();
		else
			root["Reflect"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		function __export(m) {
		    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
		}
		var Reflect = __webpack_require__(1);
		window.Reflect = Reflect;
		__export(__webpack_require__(1));


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var get_proto_of_type_1 = __webpack_require__(2);
		var to_property_key_1 = __webpack_require__(3);
		var is_constructor_1 = __webpack_require__(5);
		var is_undefined_1 = __webpack_require__(6);
		var is_array_1 = __webpack_require__(7);
		var is_object_1 = __webpack_require__(8);
		var metadata_1 = __webpack_require__(9);
		var ordinary_own_metadata_keys_1 = __webpack_require__(18);
		var get_or_create_metadata_map_1 = __webpack_require__(19);
		var ordinary_metadata_keys_1 = __webpack_require__(21);
		/**
		 * Applies a set of decorators to a property of a target object.
		 * @param decorators An array of decorators.
		 * @param target The target object.
		 * @param targetKey (Optional) The property key to decorate.
		 * @param targetDescriptor (Optional) The property descriptor for the target key
		 * @remarks Decorators are applied in reverse order.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     C = Reflect.decorate(decoratorsArray, C);
		 *
		 *     // property (on constructor)
		 *     Reflect.decorate(decoratorsArray, C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     Reflect.decorate(decoratorsArray, C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     Object.defineProperty(C, "staticMethod",
		 *         Reflect.decorate(decoratorsArray, C, "staticMethod",
		 *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
		 *
		 *     // method (on prototype)
		 *     Object.defineProperty(C.prototype, "method",
		 *         Reflect.decorate(decoratorsArray, C.prototype, "method",
		 *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
		 *
		 */
		function decorate(decorators, target, targetKey, targetDescriptor) {
		    if (!is_undefined_1.isUndefined(targetDescriptor)) {
		        if (!is_array_1.isArray(decorators)) {
		            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
		        }
		        else if (!is_object_1.isObject(target)) {
		            throw new TypeError('target ' + target + ' is not an object');
		        }
		        else if (is_undefined_1.isUndefined(targetKey)) {
		            throw new TypeError('target key ' + targetKey + 'is undefined');
		        }
		        else if (!is_object_1.isObject(targetDescriptor)) {
		            throw new TypeError('targetDescriptor ' + targetDescriptor + ' is not an object');
		        }
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		        return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        if (!is_array_1.isArray(decorators)) {
		            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
		        }
		        else if (!is_object_1.isObject(target)) {
		            throw new TypeError('target ' + target + ' is not an object');
		        }
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		        return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
		    }
		    else {
		        if (!is_array_1.isArray(decorators)) {
		            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
		        }
		        else if (!is_constructor_1.isConstructor(target)) {
		            throw new TypeError('target ' + target + ' is not a constructor');
		        }
		        return DecorateConstructor(decorators, target);
		    }
		}
		exports.decorate = decorate;
		/**
		 * A default metadata decorator factory that can be used on a class, class member, or parameter.
		 * @param metadataKey The key for the metadata entry.
		 * @param metadataValue The value for the metadata entry.
		 * @returns A decorator function.
		 * @remarks
		 * If `metadataKey` is already defined for the target and target key, the
		 * metadataValue for that key will be overwritten.
		 * @example
		 *
		 *     // constructor
		 *     @Reflect.metadata(key, value)
		 *     class C {
		 *     }
		 *
		 *     // property (on constructor, TypeScript only)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         static staticProperty;
		 *     }
		 *
		 *     // property (on prototype, TypeScript only)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         property;
		 *     }
		 *
		 *     // method (on constructor)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         static staticMethod() { }
		 *     }
		 *
		 *     // method (on prototype)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         method() { }
		 *     }
		 *
		 */
		function metadata(metadataKey, metadataValue) {
		    function decorator(target, targetKey) {
		        if (!is_undefined_1.isUndefined(targetKey)) {
		            if (!is_object_1.isObject(target)) {
		                throw new TypeError('target ' + target + ' is not an object');
		            }
		            targetKey = to_property_key_1.toPropertyKey(targetKey);
		            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
		        }
		        else {
		            if (!is_constructor_1.isConstructor(target)) {
		                throw new TypeError('target ' + target + ' is not a constructor');
		            }
		            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
		        }
		    }
		    return decorator;
		}
		exports.metadata = metadata;
		/**
		 * Define a unique metadata entry on the target.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param metadataValue A value that contains attached metadata.
		 * @param target The target object on which to define metadata.
		 * @param targetKey (Optional) The property key for the target.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     Reflect.defineMetadata("custom:annotation", options, C);
		 *
		 *     // property (on constructor)
		 *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
		 *
		 *     // decorator factory as metadata-producing annotation.
		 *     function MyAnnotation(options): Decorator {
		 *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
		 *     }
		 *
		 */
		function defineMetadata(metadataKey, metadataValue, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
		}
		exports.defineMetadata = defineMetadata;
		/**
		 * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.hasMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function hasMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryHasMetadata(metadataKey, target, targetKey);
		}
		exports.hasMetadata = hasMetadata;
		/**
		 * Gets a value indicating whether the target object has the provided metadata key defined.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function hasOwnMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
		}
		exports.hasOwnMetadata = hasOwnMetadata;
		/**
		 * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function getMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryGetMetadata(metadataKey, target, targetKey);
		}
		exports.getMetadata = getMetadata;
		/**
		 * Gets the metadata value for the provided metadata key on the target object.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getOwnMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function getOwnMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
		}
		exports.getOwnMetadata = getOwnMetadata;
		/**
		 * Gets the metadata keys defined on the target object or its prototype chain.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns An array of unique metadata keys.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getMetadataKeys(C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getMetadataKeys(C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getMetadataKeys(C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getMetadataKeys(C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getMetadataKeys(C.prototype, "method");
		 *
		 */
		function getMetadataKeys(target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return ordinary_metadata_keys_1.ordinaryMetadataKeys(target, targetKey);
		}
		exports.getMetadataKeys = getMetadataKeys;
		/**
		 * Gets the unique metadata keys defined on the target object.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns An array of unique metadata keys.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getOwnMetadataKeys(C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
		 *
		 */
		function getOwnMetadataKeys(target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return ordinary_own_metadata_keys_1.ordinaryOwnMetadataKeys(target, targetKey);
		}
		exports.getOwnMetadataKeys = getOwnMetadataKeys;
		/**
		 * Deletes the metadata entry from the target object with the provided key.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns `true` if the metadata entry was found and deleted; otherwise, false.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.deleteMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function deleteMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(target, targetKey, /*create*/ false);
		    if (is_undefined_1.isUndefined(metadataMap)) {
		        return false;
		    }
		    if (!metadataMap.delete(metadataKey)) {
		        return false;
		    }
		    if (metadataMap.size > 0) {
		        return true;
		    }
		    var targetMetadata = metadata_1.__Metadata__.get(target);
		    targetMetadata.delete(targetKey);
		    if (targetMetadata.size > 0) {
		        return true;
		    }
		    metadata_1.__Metadata__.delete(target);
		    return true;
		}
		exports.deleteMetadata = deleteMetadata;
		function DecorateConstructor(decorators, target) {
		    for (var i = decorators.length - 1; i >= 0; --i) {
		        var decorator = decorators[i];
		        var decorated = decorator(target);
		        if (!is_undefined_1.isUndefined(decorated)) {
		            if (!is_constructor_1.isConstructor(decorated)) {
		                throw new TypeError('target ' + target + ' is not a constructor');
		            }
		            target = decorated;
		        }
		    }
		    return target;
		}
		function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
		    for (var i = decorators.length - 1; i >= 0; --i) {
		        var decorator = decorators[i];
		        var decorated = decorator(target, propertyKey, descriptor);
		        if (!is_undefined_1.isUndefined(decorated)) {
		            if (!is_object_1.isObject(decorated)) {
		                throw new TypeError('decorated ' + decorated + ' is not an object');
		            }
		            descriptor = decorated;
		        }
		    }
		    return descriptor;
		}
		function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
		    for (var i = decorators.length - 1; i >= 0; --i) {
		        var decorator = decorators[i];
		        decorator(target, propertyKey);
		    }
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
		function OrdinaryHasMetadata(MetadataKey, O, P) {
		    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
		    if (hasOwn) {
		        return true;
		    }
		    var parent = get_proto_of_type_1.getProtoOfType(O);
		    if (parent !== null) {
		        return OrdinaryHasMetadata(MetadataKey, parent, P);
		    }
		    return false;
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
		function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ false);
		    if (metadataMap === undefined) {
		        return false;
		    }
		    return Boolean(metadataMap.has(MetadataKey));
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
		function OrdinaryGetMetadata(MetadataKey, O, P) {
		    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
		    if (hasOwn) {
		        return OrdinaryGetOwnMetadata(MetadataKey, O, P);
		    }
		    var parent = get_proto_of_type_1.getProtoOfType(O);
		    if (parent !== null) {
		        return OrdinaryGetMetadata(MetadataKey, parent, P);
		    }
		    return undefined;
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
		function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ false);
		    if (metadataMap === undefined) {
		        return undefined;
		    }
		    return metadataMap.get(MetadataKey);
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
		function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ true);
		    metadataMap.set(MetadataKey, MetadataValue);
		}


	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		"use strict";
		var functionPrototype = Function.prototype;
		function getProtoOfType(O) {
		    var proto = Object.getPrototypeOf(O);
		    if (typeof O !== "function" || O === functionPrototype) {
		        return proto;
		    }
		    // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
		    // Try to determine the superclass constructor. Compatible implementations
		    // must either set __proto__ on a subclass constructor to the superclass constructor,
		    // or ensure each class has a valid `constructor` property on its prototype that
		    // points back to the constructor.
		    // If this is not the same as Function.[[Prototype]], then this is definately inherited.
		    // This is the case when in ES6 or when using __proto__ in a compatible browser.
		    if (proto !== functionPrototype) {
		        return proto;
		    }
		    // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
		    var prototype = O.prototype;
		    var prototypeProto = prototype && Object.getPrototypeOf(prototype);
		    if (prototypeProto == null || prototypeProto === Object.prototype) {
		        return proto;
		    }
		    // if the constructor was not a function, then we cannot determine the heritage.
		    var constructor = prototypeProto.constructor;
		    if (typeof constructor !== "function") {
		        return proto;
		    }
		    // if we have some kind of self-reference, then we cannot determine the heritage.
		    if (constructor === O) {
		        return proto;
		    }
		    // we have a pretty good guess at the heritage.
		    return constructor;
		}
		exports.getProtoOfType = getProtoOfType;


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var is_symbol_1 = __webpack_require__(4);
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
		function toPropertyKey(value) {
		    if (is_symbol_1.isSymbol(value)) {
		        return value;
		    }
		    return String(value);
		}
		exports.toPropertyKey = toPropertyKey;


	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
		function isSymbol(x) {
		    return typeof x === "symbol";
		}
		exports.isSymbol = isSymbol;


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
		function isConstructor(x) {
		    return typeof x === "function";
		}
		exports.isConstructor = isConstructor;


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
		function isUndefined(x) {
		    return x === undefined;
		}
		exports.isUndefined = isUndefined;


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
		function isArray(x) {
		    return Array.isArray(x);
		}
		exports.isArray = isArray;


	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
		function isObject(x) {
		    return typeof x === "object" ? x !== null : typeof x === "function";
		}
		exports.isObject = isObject;


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var weakmap_1 = __webpack_require__(10);
		var _WeakMap = typeof WeakMap === "function" ? WeakMap : weakmap_1.createWeakMapPolyfill();
		// TODO: fix the typescript types
		// export const __Metadata__ = new _WeakMap<Object, Map<string | symbol, Map<any, any>>>();
		exports.__Metadata__ = new _WeakMap();


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var create_unique_key_1 = __webpack_require__(11);
		var get_or_create_weakmap_1 = __webpack_require__(17);
		exports.rootKey = create_unique_key_1.createUniqueKey();
		var WeakMap = (function () {
		    function WeakMap() {
		        this._key = create_unique_key_1.createUniqueKey();
		    }
		    Object.defineProperty(WeakMap.prototype, "length", {
		        get: function () {
		            return 0;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    WeakMap.prototype.has = function (target) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
		        if (table) {
		            return this._key in table;
		        }
		        return false;
		    };
		    WeakMap.prototype.get = function (target) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
		        if (table) {
		            return table[this._key];
		        }
		        return undefined;
		    };
		    WeakMap.prototype.set = function (target, value) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ true);
		        table[this._key] = value;
		        return this;
		    };
		    WeakMap.prototype.delete = function (target) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
		        if (table && this._key in table) {
		            return delete table[this._key];
		        }
		        return false;
		    };
		    WeakMap.prototype.clear = function () {
		        // NOTE: not a real clear, just makes the previous data unreachable
		        this._key = create_unique_key_1.createUniqueKey();
		    };
		    return WeakMap;
		}());
		exports.WeakMap = WeakMap;
		function createWeakMapPolyfill() {
		    return WeakMap;
		}
		exports.createWeakMapPolyfill = createWeakMapPolyfill;


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var helper_constants_1 = __webpack_require__(12);
		var has_own_1 = __webpack_require__(13);
		var create_uuid_1 = __webpack_require__(14);
		exports.keys = {};
		function createUniqueKey() {
		    var key;
		    do {
		        key = helper_constants_1.WEAKMAP_PREFIX + create_uuid_1.createUUID();
		    } while (has_own_1.hasOwn.call(exports.keys, key));
		    exports.keys[key] = true;
		    return key;
		}
		exports.createUniqueKey = createUniqueKey;


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		"use strict";
		exports.UUID_SIZE = 16;
		exports.WEAKMAP_PREFIX = "@@WeakMap@@";


	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		"use strict";
		exports.hasOwn = Object.prototype.hasOwnProperty;


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var helper_constants_1 = __webpack_require__(12);
		var gen_randombytes_1 = __webpack_require__(15);
		function createUUID() {
		    var data = gen_randombytes_1.genRandomBytes(helper_constants_1.UUID_SIZE);
		    // mark as random - RFC 4122 § 4.4
		    data[6] = data[6] & 0x4f | 0x40;
		    data[8] = data[8] & 0xbf | 0x80;
		    var result = "";
		    for (var offset = 0; offset < helper_constants_1.UUID_SIZE; ++offset) {
		        var byte = data[offset];
		        if (offset === 4 || offset === 6 || offset === 8) {
		            result += "-";
		        }
		        if (byte < 16) {
		            result += "0";
		        }
		        result += byte.toString(16).toLowerCase();
		    }
		    return result;
		}
		exports.createUUID = createUUID;


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var fill_randombytes_1 = __webpack_require__(16);
		function genRandomBytes(size) {
		    var data;
		    if (typeof Uint8Array === "function") {
		        data = new Uint8Array(size);
		        if (typeof window.crypto !== "undefined") {
		            window.crypto.getRandomValues(data);
		        }
		        else if (typeof window.msCrypto !== "undefined") {
		            window.msCrypto.getRandomValues(data);
		        }
		        else {
		            fill_randombytes_1.fillRandomBytes(data, size);
		        }
		    }
		    else {
		        data = new Array(size);
		        fill_randombytes_1.fillRandomBytes(data, size);
		    }
		    return data;
		}
		exports.genRandomBytes = genRandomBytes;


	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		"use strict";
		function fillRandomBytes(buffer, size) {
		    for (var i = 0; i < size; ++i) {
		        buffer[i] = Math.random() * 255 | 0;
		    }
		    return buffer;
		}
		exports.fillRandomBytes = fillRandomBytes;


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var has_own_1 = __webpack_require__(13);
		function getOrCreateWeakMapTable(rootKey, target, create) {
		    if (!has_own_1.hasOwn.call(target, rootKey)) {
		        if (!create) {
		            return undefined;
		        }
		        Object.defineProperty(target, rootKey, {
		            value: Object.create(null)
		        });
		    }
		    return target[rootKey];
		}
		exports.getOrCreateWeakMapTable = getOrCreateWeakMapTable;


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var get_or_create_metadata_map_1 = __webpack_require__(19);
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
		function ordinaryOwnMetadataKeys(target, targetKey) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(target, targetKey, /*create*/ false);
		    var keys = [];
		    if (metadataMap) {
		        metadataMap.forEach(function (_, key) { return keys.push(key); });
		    }
		    return keys;
		}
		exports.ordinaryOwnMetadataKeys = ordinaryOwnMetadataKeys;


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var metadata_1 = __webpack_require__(9);
		var map_1 = __webpack_require__(20);
		var _Map = typeof Map === "function" ? Map : map_1.createMapPolyfill();
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
		function getOrCreateMetadataMap(target, targetKey, create) {
		    var targetMetadata = metadata_1.__Metadata__.get(target);
		    if (!targetMetadata) {
		        if (!create) {
		            return undefined;
		        }
		        // TODO: fix the typescript types
		        // targetMetadata = new _Map<string | symbol, _Map<any, any>>();
		        targetMetadata = new _Map();
		        metadata_1.__Metadata__.set(target, targetMetadata);
		    }
		    var keyMetadata = targetMetadata.get(targetKey);
		    if (!keyMetadata) {
		        if (!create) {
		            return undefined;
		        }
		        // TODO: fix the typescript types
		        // keyMetadata = new _Map<any, any>();
		        keyMetadata = new _Map();
		        targetMetadata.set(targetKey, keyMetadata);
		    }
		    return keyMetadata;
		}
		exports.getOrCreateMetadataMap = getOrCreateMetadataMap;


	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		"use strict";
		// naive Map shim
		exports.cacheSentinel = {};
		var Map = (function () {
		    function Map() {
		        this._keys = [];
		        this._values = [];
		        this._cache = exports.cacheSentinel;
		    }
		    Object.defineProperty(Map.prototype, "length", {
		        get: function () {
		            return 0;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(Map.prototype, "size", {
		        get: function () {
		            return this._keys.length;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Map.prototype.has = function (key) {
		        if (key === this._cache) {
		            return true;
		        }
		        if (this._find(key) >= 0) {
		            this._cache = key;
		            return true;
		        }
		        return false;
		    };
		    Map.prototype.get = function (key) {
		        var index = this._find(key);
		        if (index >= 0) {
		            this._cache = key;
		            return this._values[index];
		        }
		        return undefined;
		    };
		    Map.prototype.set = function (key, value) {
		        this.delete(key);
		        this._keys.push(key);
		        this._values.push(value);
		        this._cache = key;
		        return this;
		    };
		    Map.prototype.delete = function (key) {
		        var index = this._find(key);
		        if (index >= 0) {
		            this._keys.splice(index, 1);
		            this._values.splice(index, 1);
		            this._cache = exports.cacheSentinel;
		            return true;
		        }
		        return false;
		    };
		    Map.prototype.clear = function () {
		        this._keys.length = 0;
		        this._values.length = 0;
		        this._cache = exports.cacheSentinel;
		    };
		    Map.prototype.forEach = function (callback, thisArg) {
		        var size = this.size;
		        for (var i = 0; i < size; ++i) {
		            var key = this._keys[i];
		            var value = this._values[i];
		            this._cache = key;
		            callback.call(this, value, key, this);
		        }
		    };
		    Map.prototype._find = function (key) {
		        var keys = this._keys;
		        var size = keys.length;
		        for (var i = 0; i < size; ++i) {
		            if (keys[i] === key) {
		                return i;
		            }
		        }
		        return -1;
		    };
		    return Map;
		}());
		exports.Map = Map;
		function createMapPolyfill() {
		    return Map;
		}
		exports.createMapPolyfill = createMapPolyfill;


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var ordinary_own_metadata_keys_1 = __webpack_require__(18);
		var get_proto_of_type_1 = __webpack_require__(2);
		var set_1 = __webpack_require__(22);
		var _Set = typeof Set === "function" ? Set : set_1.createSetPolyfill();
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
		function ordinaryMetadataKeys(O, P) {
		    var ownKeys = ordinary_own_metadata_keys_1.ordinaryOwnMetadataKeys(O, P);
		    var parent = get_proto_of_type_1.getProtoOfType(O);
		    if (parent === null) {
		        return ownKeys;
		    }
		    var parentKeys = ordinaryMetadataKeys(parent, P);
		    if (parentKeys.length <= 0) {
		        return ownKeys;
		    }
		    if (ownKeys.length <= 0) {
		        return parentKeys;
		    }
		    var set = new _Set();
		    var keys = [];
		    for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
		        var key = ownKeys_1[_i];
		        var hasKey = set.has(key);
		        if (!hasKey) {
		            set.add(key);
		            keys.push(key);
		        }
		    }
		    for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
		        var key = parentKeys_1[_a];
		        var hasKey = set.has(key);
		        if (!hasKey) {
		            set.add(key);
		            keys.push(key);
		        }
		    }
		    return keys;
		}
		exports.ordinaryMetadataKeys = ordinaryMetadataKeys;


	/***/ },
	/* 22 */
	/***/ function(module, exports) {

		"use strict";
		// var _Map: MapConstructor = (typeof Map !== "undefined") ? createMapPolyfill() : Map;
		exports.cacheSentinel = {};
		var Set = (function () {
		    function Set() {
		        this._map = new Map();
		    }
		    Object.defineProperty(Set.prototype, "length", {
		        get: function () {
		            return 0;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(Set.prototype, "size", {
		        get: function () {
		            return this._map.size;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Set.prototype.has = function (value) {
		        return this._map.has(value);
		    };
		    Set.prototype.add = function (value) {
		        this._map.set(value, value);
		        return this;
		    };
		    Set.prototype.delete = function (value) {
		        return this._map.delete(value);
		    };
		    Set.prototype.clear = function () {
		        this._map.clear();
		    };
		    Set.prototype.forEach = function (callback, thisArg) {
		        this._map.forEach(callback, thisArg);
		    };
		    return Set;
		}());
		exports.Set = Set;
		function createSetPolyfill() {
		    return Set;
		}
		exports.createSetPolyfill = createSetPolyfill;


	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=browser.js.map

/***/ }
/******/ ])))
});
;