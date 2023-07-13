exports.id = 350;
exports.ids = [350];
exports.modules = {

/***/ 6805:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 78301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 83751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 54765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 76195:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 40408, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 20053, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18314));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15835));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 70706))

/***/ }),

/***/ 34914:
/***/ (() => {



/***/ }),

/***/ 70706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2318);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28686);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function NavBar() {
    const NavItems = [
        {
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                className: "px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",
                children: "首页"
            }),
            key: "0"
        },
        // {
        //   label: (
        //     <Link
        //       href="#"
        //       className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400"
        //     >
        //       资讯
        //     </Link>
        //   ),
        //   key: "1",
        // },
        {
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/about",
                className: "px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",
                children: "关于"
            }),
            key: "3"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-1/2 text-left py-4 flex justify-end items-start",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden md:block",
                children: NavItems.map((m)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                        children: m.label
                    }, m.key))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "block md:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__/* .Dropdown */ .Lt, {
                    arrow: true,
                    menu: {
                        items: NavItems
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: (e)=>e.preventDefault(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg__WEBPACK_IMPORTED_MODULE_3__/* .MenuSvg */ .qZ, {})
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 28686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lm": () => (/* binding */ TelSvg),
/* harmony export */   "Ne": () => (/* binding */ WxSvg),
/* harmony export */   "qZ": () => (/* binding */ MenuSvg),
/* harmony export */   "y9": () => (/* binding */ QQSvg)
/* harmony export */ });
/* unused harmony exports VerticalWavySvg, BigCommaSvg, HorizontalWavySvg */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const VerticalWavySvg = ()=>/*#__PURE__*/ _jsxs("svg", {
        className: "absolute top-0 left-0 w-28 h-28 -mt-10 -ml-8 opacity-5",
        viewBox: "0 0 95.333 95.332",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793 c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045 s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076 c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002 c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019 c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23 c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16 c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312 c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"
            })
        ]
    });
const BigCommaSvg = ()=>/*#__PURE__*/ _jsx("svg", {
        className: "inline-block w-32 h-32 -mb-8",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 125",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"
        })
    });
const QQSvg = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "inline-block w-6",
        fill: "#5D5D5D",
        viewBox: "0 0 1024 1024",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z",
            "p-id": "8103"
        })
    });
const WxSvg = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "inline-block w-6",
        fill: "#5D5D5D",
        viewBox: "0 0 1024 1024",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z",
            "p-id": "6964"
        })
    });
const MenuSvg = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "text-gray-600 h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 12h16M4 18h16"
        })
    });
const HorizontalWavySvg = (props)=>{
    const { className ="" , ...restProps } = props;
    return /*#__PURE__*/ _jsx("svg", {
        className: `inline-block w-32 h-32 -mb-12 -mt-8 lg:mt-0 lg:mb-0 lg:transform lg:rotate-90 lg:-ml-8 ${className}`,
        viewBox: "0 0 100 125",
        x: "0px",
        y: "0px",
        ...restProps,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"
        })
    });
};
const TelSvg = (props)=>{
    const { className ="w-8 md:w-12" , fill ="#040000" , ...restProps } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: `inline-block ${className}`,
        fill: fill,
        viewBox: "0 0 1024 1024",
        ...restProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M177.39776 202.05056c-27.52 34.28864-88.48896 197.5808 172.83072 464.89088 275.3536 281.77408 452.95616 221.47072 483.52256 189.72672l-184.07424-183.80288c-25.73312 25.65632-58.84928 2.8416-122.42944-48.88064-42.01472-34.24256-90.48576-80.29184-132.45952-132.22912-29.45536-36.37248-55.5008-74.60864-28.61056-101.49376L177.39776 202.05056z",
                "p-id": "3184"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M900.31104 790.87104c11.92448-11.93984 10.73152-30.11072-0.11776-41.00608l0-0.16384c0 0-143.62624-143.10912-143.69792-143.19104-11.37152-11.34592-29.54752-11.12064-40.86272 0.08192l-52.0704 52.0704 184.56576 184.27904c0 0 52.13696-51.93216 52.0704-51.96288L900.31104 790.87104z",
                "p-id": "3185"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M432.53248 323.98848c11.92448-11.96544 10.81344-30.08512 0-40.9088l0-0.18432c0 0-147.77344-147.28704-147.85024-147.31776-11.37152-11.41248-29.58336-11.14112-40.84736 0.03072L191.79008 187.70432l188.63616 188.37504c0 0 52.10624-51.86048 52.10624-51.95264L432.53248 323.98848z",
                "p-id": "3186"
            })
        ]
    });
};


/***/ }),

/***/ 8666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(91648);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(62208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/img/police-badge.png
/* harmony default export */ const police_badge = ({"src":"/_next/static/media/police-badge.6ddb281d.png","height":20,"width":20,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AQAAAAAAAAAArpdxbQHg5G0IGBEA+xAVlU5hhZEAAAAAAU0AAABkoHl0+8zTiyrGtAACKCsA2TE9AAAQEG7Y8gqTAf/cdSmSqADQONfIBhHq4P38AfcA9jY8A8gXKfhraSs0Ae6tVIe83CN4Cd7b/SoEyAMLGBkA1fYi/e4dIANLLPaJAeSjVJfyCBton4n+/T7MuQMMJQoAuecx/V2mCgMWBO6QAeO/fnr/5tSF5/4V/e/6+gL8/gIABwEH/iwT5QMCHiZ1Af//3RLnxo/UA/HhGQoRDAD+/P4A+/j7APoKG+QZOlcqAf//xgTt06519+PiYQH6+xj/AQL+AxET4wsfHJwMH0eUL2Zx1TAqvaQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/img/jsm-logo.png
/* harmony default export */ const jsm_logo = ({"src":"/_next/static/media/jsm-logo.45ef78fe.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAqUlEQVR42g3Ouw7CMAxAUSdxklKpOwsSAyDg9+FboHsHqJigryS1Y7Le5R7Vti0ieqvRaAAgziHxSlSi2VTovTOIkrNl1madZkHn0CqAZWFiU9dagZVceUTrLEzj535zxzPOI/2+/nJ1h6MGpWLf425P71fouun5EBHIGVOIsqmr00mJ2KZhIlBQIsa4Nttt5Z02pswzc4gpTAGLbBhmiqnwAGAlDomI+A+FLWMsU2HU7QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(42585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(35985);
;// CONCATENATED MODULE: ./src/ui/navBar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`E:\myProject\jsm-faas\code\src\ui\navBar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const navBar = (proxy.default);

;// CONCATENATED MODULE: ./src/app/layout.tsx








const metadata = {
    title: "成都金双茂印刷设计",
    description: "全成都最具有性价比的印刷设计一站式服务平台",
    keywords: [
        "成都印刷",
        "包装加工",
        "印刷设计",
        "名片"
    ],
    formatDetection: {
        telephone: "yes"
    }
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "zh-CN",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "canonical",
                    href: "https://jsmyssj.cn"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    className: "min-h-screen",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "w-full bg-white md:pt-0 px-6 shadow-lg z-20 border-b border-gray-400 sticky top-0",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container mx-auto flex justify-between items-center text-sm md:text-md",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                        className: "w-full text-center md:p-0 flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "rounded-[50%] overflow-hidden",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: jsm_logo,
                                                    alt: "logo",
                                                    priority: true,
                                                    width: 50,
                                                    height: 50
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: "py-3 w-full text-lg text-center md:text-left md:w-auto text-gray-600 no-underline flex justify-start items-center",
                                                children: "成都金双茂印刷设计"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(navBar, {})
                                ]
                            })
                        }),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                            className: "w-full bg-white px-6 border-t",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container mx-auto max-w-4xl py-3 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex gap-1 items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                //   src="https://cdn.bazijun.top/img/police_beian.png"
                                                src: police_badge,
                                                alt: "警徽",
                                                className: "dark:invert",
                                                width: 16,
                                                height: 16
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "http://beian.miit.gov.cn/",
                                                className: "hover:underline",
                                                children: "蜀ICP备2023012930号"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "md:p-0 text-center md:text-right text-xs",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:13908178322",
                                            className: "text-black no-underline hover:underline ml-4",
                                            children: "联系我们：13908178322"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 61723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading_Loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./src/ui/dotLoading.tsx

function Loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "loading-wrap",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "balls",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-[#00FEFF]"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-[#FEFE00]"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-[#FF00FC]"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/loading.tsx


function loading_Loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center w-screen h-screen",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Loading, {})
    });
}


/***/ }),

/***/ 51664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lm": () => (/* binding */ TelSvg),
/* harmony export */   "ae": () => (/* binding */ VerticalWavySvg),
/* harmony export */   "sc": () => (/* binding */ HorizontalWavySvg),
/* harmony export */   "yf": () => (/* binding */ BigCommaSvg)
/* harmony export */ });
/* unused harmony exports QQSvg, WxSvg, MenuSvg */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const VerticalWavySvg = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: "absolute top-0 left-0 w-28 h-28 -mt-10 -ml-8 opacity-5",
        viewBox: "0 0 95.333 95.332",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793 c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045 s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076 c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002 c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019 c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23 c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16 c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312 c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"
            })
        ]
    });
const BigCommaSvg = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "inline-block w-32 h-32 -mb-8",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 125",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"
        })
    });
const QQSvg = ()=>/*#__PURE__*/ _jsx("svg", {
        className: "inline-block w-6",
        fill: "#5D5D5D",
        viewBox: "0 0 1024 1024",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z",
            "p-id": "8103"
        })
    });
const WxSvg = ()=>/*#__PURE__*/ _jsx("svg", {
        className: "inline-block w-6",
        fill: "#5D5D5D",
        viewBox: "0 0 1024 1024",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z",
            "p-id": "6964"
        })
    });
const MenuSvg = ()=>/*#__PURE__*/ _jsx("svg", {
        className: "text-gray-600 h-6 w-6",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 12h16M4 18h16"
        })
    });
const HorizontalWavySvg = (props)=>{
    const { className ="" , ...restProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: `inline-block w-32 h-32 -mb-12 -mt-8 lg:mt-0 lg:mb-0 lg:transform lg:rotate-90 lg:-ml-8 ${className}`,
        viewBox: "0 0 100 125",
        x: "0px",
        y: "0px",
        ...restProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"
        })
    });
};
const TelSvg = (props)=>{
    const { className ="w-8 md:w-12" , fill ="#040000" , ...restProps } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: `inline-block ${className}`,
        fill: fill,
        viewBox: "0 0 1024 1024",
        ...restProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M177.39776 202.05056c-27.52 34.28864-88.48896 197.5808 172.83072 464.89088 275.3536 281.77408 452.95616 221.47072 483.52256 189.72672l-184.07424-183.80288c-25.73312 25.65632-58.84928 2.8416-122.42944-48.88064-42.01472-34.24256-90.48576-80.29184-132.45952-132.22912-29.45536-36.37248-55.5008-74.60864-28.61056-101.49376L177.39776 202.05056z",
                "p-id": "3184"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M900.31104 790.87104c11.92448-11.93984 10.73152-30.11072-0.11776-41.00608l0-0.16384c0 0-143.62624-143.10912-143.69792-143.19104-11.37152-11.34592-29.54752-11.12064-40.86272 0.08192l-52.0704 52.0704 184.56576 184.27904c0 0 52.13696-51.93216 52.0704-51.96288L900.31104 790.87104z",
                "p-id": "3185"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M432.53248 323.98848c11.92448-11.96544 10.81344-30.08512 0-40.9088l0-0.18432c0 0-147.77344-147.28704-147.85024-147.31776-11.37152-11.41248-29.58336-11.14112-40.84736 0.03072L191.79008 187.70432l188.63616 188.37504c0 0 52.10624-51.86048 52.10624-51.95264L432.53248 323.98848z",
                "p-id": "3186"
            })
        ]
    });
};


/***/ }),

/***/ 15835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/jsm-logo.45ef78fe.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAqUlEQVR42g3Ouw7CMAxAUSdxklKpOwsSAyDg9+FboHsHqJigryS1Y7Le5R7Vti0ieqvRaAAgziHxSlSi2VTovTOIkrNl1madZkHn0CqAZWFiU9dagZVceUTrLEzj535zxzPOI/2+/nJ1h6MGpWLf425P71fouun5EBHIGVOIsqmr00mJ2KZhIlBQIsa4Nttt5Z02pswzc4gpTAGLbBhmiqnwAGAlDomI+A+FLWMsU2HU7QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 18314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/police-badge.6ddb281d.png","height":20,"width":20,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AQAAAAAAAAAArpdxbQHg5G0IGBEA+xAVlU5hhZEAAAAAAU0AAABkoHl0+8zTiyrGtAACKCsA2TE9AAAQEG7Y8gqTAf/cdSmSqADQONfIBhHq4P38AfcA9jY8A8gXKfhraSs0Ae6tVIe83CN4Cd7b/SoEyAMLGBkA1fYi/e4dIANLLPaJAeSjVJfyCBton4n+/T7MuQMMJQoAuecx/V2mCgMWBO6QAeO/fnr/5tSF5/4V/e/6+gL8/gIABwEH/iwT5QMCHiZ1Af//3RLnxo/UA/HhGQoRDAD+/P4A+/j7APoKG+QZOlcqAf//xgTt06519+PiYQH6+xj/AQL+AxET4wsfHJwMH0eUL2Zx1TAqvaQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 10003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/printing-machine.0660d8c2.png","height":800,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAh0lEQVR42mPIzUrLy8nMyUrPzEjJTE9OTwOhtNRkhu6O1t6utoaa0uhQl5SEiNy0hLSkuBB/L4bYEL/utub169ctXrxo1erVfS3NyxbMW7l8GUN6QrSrvc2uXbuOHTu+et3G9Rs3bNq0cceOHQxpqUlJ8VElhbktzY21FaULFy+ds2BRbX0jALZMPDA61Q8/AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 73737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/printing-machine.0660d8c2.png","height":800,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAh0lEQVR42mPIzUrLy8nMyUrPzEjJTE9OTwOhtNRkhu6O1t6utoaa0uhQl5SEiNy0hLSkuBB/L4bYEL/utub169ctXrxo1erVfS3NyxbMW7l8GUN6QrSrvc2uXbuOHTu+et3G9Rs3bNq0cceOHQxpqUlJ8VElhbktzY21FaULFy+ds2BRbX0jALZMPDA61Q8/AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 41764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;