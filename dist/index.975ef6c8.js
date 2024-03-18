// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
// Étape 7 : Routage et initialisation de l'application SPA
var _artistsCoverJs = require("./elements/artists-cover.js");
var _songItemJs = require("./elements/song-item.js");
var _helpersJs = require("./helpers.js");
var _artistsJs = require("./sections/artists.js");
var _songsJs = require("./sections/songs.js");
// Logique de routage basée sur l'URL pour décider quelle section afficher
const routeur = ()=>{
    const hash = window.location.hash || "#home";
    const hashs = hash.split("-");
    (0, _helpersJs.activateLink)(hashs[0]);
    switch(hashs[0]){
        case "#artists":
            if (hashs[1]) {
                (0, _helpersJs.displaySection)("list");
                (0, _songsJs.displayArtistSongs)(hashs[1]);
            } else {
                (0, _helpersJs.displaySection)("artists");
                (0, _artistsJs.displayArtists)();
            }
            break;
        case "#player":
            (0, _helpersJs.displaySection)("player");
            break;
        case "#home":
            (0, _helpersJs.displaySection)("home");
            break;
        case "#search":
            (0, _helpersJs.displaySection)("list");
            (0, _songsJs.displaySearchSongs)(hashs[1]);
            break;
    }
};
window.addEventListener("hashchange", routeur);
// Appel initial pour configurer la vue basée sur l'URL actuelle
routeur();

},{"./elements/artists-cover.js":"1UAVc","./elements/song-item.js":"2U4Q3","./helpers.js":"ecN5O","./sections/artists.js":"7tyNw","./sections/songs.js":"10tUP"}],"1UAVc":[function(require,module,exports) {
// Étape 5 : Définition d'un élément web personnalisé pour représenter un artiste
class ArtistCover extends HTMLElement {
    connectedCallback() {
        const newContent = document.querySelector("#artist-list-item-template");
        // Clone le contenu du template pour créer une nouvelle instance de cet élément.
        // `true` indique que le clonage doit inclure aussi les descendants du nœud, donc toute la structure interne du template.
        const newElement = newContent.content.cloneNode(true);
        // Définit le lien (href) de l'élément <a> dans le nouvel élément cloné en utilisant l'attribut 'href' de l'élément personnalisé.
        newElement.querySelector("a").href = this.getAttribute("href");
        newElement.querySelector("img").src = this.getAttribute("cover");
        newElement.querySelector("div").innerText = this.getAttribute("name");
        // Remplace les enfants actuels de l'élément personnalisé par le nouvel élément cloné.
        // Cela permet d'afficher le contenu correct de l'artiste dans le DOM.
        this.replaceChildren(newElement);
    }
}
// Enregistre l'élément personnalisé 'artist-cover' auprès du navigateur, en associant la classe ArtistCover à ce nom.
// Cela permet d'utiliser l'élément <artist-cover> dans le HTML.
customElements.define("artist-cover", ArtistCover);

},{}],"2U4Q3":[function(require,module,exports) {
// Étape 5 (suite) : Définition d'un élément web personnalisé pour représenter une chanson
const playClick = new CustomEvent("play_click");
class SongItem extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<a href="#">
    <div class="list-item-title">${this.getAttribute("title")}</div>
    <div class="list-item-actions">
      <button type="button" class="icon-button favorite-button ">
        <span class="material-icons">favorite</span>
      </button>
      <button type="button" class="icon-button play-button">
        <span class="material-icons">play_arrow</span>
      </button>
    </div>
  </a>`;
        this.querySelector(".play-button").addEventListener("click", (e)=>{
            e.preventDefault();
            this.dispatchEvent(playClick);
        });
    }
}
customElements.define("song-item", SongItem);

},{}],"ecN5O":[function(require,module,exports) {
// Étape 4 : Fonctions d'aide pour manipuler l'affichage des sections et activer les liens de navigation
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displaySection", ()=>displaySection);
parcelHelpers.export(exports, "activateLink", ()=>activateLink);
const displaySection = (id)=>{
    // Logique pour afficher la section demandée
    const activeSection = document.querySelector("section.active");
    activeSection.classList.remove("active");
    const newSection = document.querySelector(`#${id}-section`);
    newSection.classList.add("active");
};
const activateLink = (id)=>{
    // Logique pour activer le lien de navigation correspondant
    const activeLink = document.querySelector(`nav a.active`);
    activeLink.classList.remove("active");
    const link = document.querySelector(`nav a[href="${id}"]`);
    link.classList.add("active");
};
// Helpers pour l'affichage de la recherche
const searchButton = document.querySelector("#search-trigger");
const searchInput = document.querySelector("#search-input");
searchButton.addEventListener("click", ()=>{
    searchInput.classList.add("active");
});
searchInput.addEventListener("input", (e)=>{
    window.location.hash = `#search-${encodeURIComponent(searchInput.value)}`;
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7tyNw":[function(require,module,exports) {
// Étape 6 : Logique pour afficher les artistes en utilisant les données de l'API
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayArtists", ()=>displayArtists);
var _apiJs = require("../api.js");
const artistList = document.querySelector(".artist-list");
// Logique d'affichage des artistes...
const displayArtists = ()=>(0, _apiJs.loadArtists)().then((artists)=>{
        artistList.replaceChildren();
        artists.forEach((artist)=>{
            const newElement = document.createElement("artist-cover");
            newElement.setAttribute("href", `#artists-${artist.id}`);
            newElement.setAttribute("name", artist.name);
            newElement.setAttribute("cover", artist.image_url);
            artistList.appendChild(newElement);
        });
    });

},{"../api.js":"8Zgej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Zgej":[function(require,module,exports) {
// Étape 3 : Fournit des fonctions pour la communication avec l'API backend
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadArtists", ()=>loadArtists);
parcelHelpers.export(exports, "loadSongs", ()=>loadSongs);
parcelHelpers.export(exports, "loadSearchSongs", ()=>loadSearchSongs);
const BASE_URL = "https://webmob-ui-22-spotlified.herokuapp.com";
function loadJson(url) {
    return fetch(url).then((response)=>{
        return response.json();
    });
}
function loadArtists() {
    const url = `${BASE_URL}/api/artists`;
    return loadJson(url);
}
function loadSongs(id) {
    const url = `${BASE_URL}/api/artists/${id}/songs`;
    return loadJson(url);
}
function loadSearchSongs(query) {
    const url = `${BASE_URL}/api/songs/search/${query}`;
    return loadJson(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"10tUP":[function(require,module,exports) {
// Étape 6 (suite) : Logique pour afficher les chansons d'un artiste sélectionné
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayArtistSongs", ()=>displayArtistSongs);
parcelHelpers.export(exports, "displaySearchSongs", ()=>displaySearchSongs);
var _apiJs = require("../api.js");
var _playerJs = require("./player.js");
var _playerJsDefault = parcelHelpers.interopDefault(_playerJs);
const listSectionTitle = document.querySelector("#list-section h4");
const songList = document.querySelector(".list");
// Logique d'affichage des chansons...
const displaySongArray = (songs)=>{
    songList.innerHTML = "";
    songs.forEach((song)=>{
        const newElement = document.createElement("song-item");
        newElement.setAttribute("title", song.title);
        newElement.addEventListener("play_click", ()=>{
            (0, _playerJsDefault.default)(song, songs);
        });
        songList.appendChild(newElement);
    });
};
const displayArtistSongs = (id)=>{
    (0, _apiJs.loadSongs)(id).then((songs)=>{
        listSectionTitle.innerHTML = `Artistes > ${songs[0].artist.name}`;
        displaySongArray(songs);
    });
};
const displaySearchSongs = (query)=>{
    loadSearchSongs(query).then((songs)=>{
        listSectionTitle.innerHTML = `Recherche`;
        displaySongArray(songs);
    });
};

},{"../api.js":"8Zgej","./player.js":"m0Ody","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"m0Ody":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatTimestamp = require("../lib/formatTimestamp");
var _formatTimestampDefault = parcelHelpers.interopDefault(_formatTimestamp);
////////// Constantes des différents tags HTML
// Tag audio
const audioPlayer = document.querySelector("#audio-player");
// Song infos
const playerThumbnail = document.querySelector("#player-thumbnail-image");
const playerSongTitle = document.querySelector("#player-infos-song-title");
const playerArtistName = document.querySelector("#player-infos-artist-name");
// Controls
const playerPrev = document.querySelector("#player-control-previous");
const playerPlay = document.querySelector("#player-control-play");
const playerPlayIcon = document.querySelector("#player-control-play .material-icons");
const playerNext = document.querySelector("#player-control-next");
// Progress
const playerTimeCurrent = document.querySelector("#player-time-current");
const playerTimeDuration = document.querySelector("#player-time-duration");
const playerProgress = document.querySelector("#player-progress-bar");
// Logo
const logo = document.querySelector("#logo");
////////// Logique
// contiendra la liste des chansons en cours de lecture, afin de pouvoir se déplacer entre les chansons
let currentSongList = [];
// La chanson en cours de lecture
let currentSong = null;
// Lire une chanson sur laquelle on clique
const playSong = (song, songs)=>{
    // On enregistre la chanson en cours de lecture
    currentSong = song;
    // si un tableau est transmis, on le met à jour. Cela nous permet d'utiliser juste playSong(song) à l'interne,
    // sans devoir le repasser à chaque fois (depuis previous/next, par exemple)
    if (songs) currentSongList = songs;
    // On donne l'url au player et démarre la lecture
    audioPlayer.src = song.audio_url;
    audioPlayer.play();
    // Remplacement des différentes informations au sein des tags
    playerSongTitle.innerHTML = song.title;
    playerArtistName.innerHTML = song.artist.name;
    playerThumbnail.src = song.artist.image_url;
};
// Lis la chanson suivante, d'après la chanson en cours
const playNextSong = ()=>{
    let newIndex = currentSongList.indexOf(currentSong) + 1;
    // On s'assure qu'on n'arrive jamais en dehors du tableau et on reboucle sur le début
    if (newIndex == currentSongList.length) newIndex = 0;
    playSong(currentSongList[newIndex]);
};
// Lis la chanson précédente, d'après la chanson en cours
const playPreviousSong = ()=>{
    let newIndex = currentSongList.indexOf(currentSong) - 1;
    if (newIndex == -1) newIndex = currentSongList.length - 1;
    playSong(currentSongList[newIndex]);
};
// On écoute le clique sur le bouton play et on transmets l'instruction au player
playerPlay.addEventListener("click", ()=>{
    if (audioPlayer.paused) audioPlayer.play();
    else audioPlayer.pause();
});
// Bouton précédent
playerPrev.addEventListener("click", playPreviousSong);
// Bouton suivant
playerNext.addEventListener("click", playNextSong);
// Lorsque l'on click sur la barre de progression, on change sa valeur et elle émet donc un événement "change" pour
// avertir de son changement. Comme on a défini la valeur max comme étant la durée totale de la chanson, toute valeur
// transmise est forcément incluse dans cet interval. On peut alors la passer au player sans problème
playerProgress.addEventListener("change", (event)=>{
    audioPlayer.currentTime = event.currentTarget.value;
});
// Lorsque nous faison ".src = " sur le player, celui-ci va télécharger la chanson en arrière plan et calculer
// sa longueur. Lorsque c'est fait, il émet un event "durationchange" pour nous informer qu'il connait maintenant
// sa durée (en secondes!) et que l'on peut se servir de cette information
audioPlayer.addEventListener("durationchange", ()=>{
    // On défini la valeur maximum du slider de la chanson comme étant sa durée en secondes
    playerProgress.max = audioPlayer.duration;
    // On affiche la durée totale, grâce à la fonction de formattage du temps
    playerTimeDuration.innerText = (0, _formatTimestampDefault.default)(audioPlayer.duration);
});
// Lorsque la chanson est en cours de lecture, l'événement "timeupdate" sera envoyé plusieurs fois par seconde
// pour avertir de l'avancée dans la lecture. C'est cet événement qui nous permet de bouger la barre de progression
// au fur et à mesure que la chanson se lit.
audioPlayer.addEventListener("timeupdate", ()=>{
    // On récupère la valeur "currentTime" qui est la position dans la chanson au sein du player et on la transmets
    // à la progress bar comme étant sa valeur. La progress bar a comme valeur minimum 0 et comme valeur max la durée
    // totale de la chanson. En lui passant le currrentTime, il sera forcément entre le min et le max et le browser
    // pourra afficher la petite boule au bon endroit
    playerProgress.value = audioPlayer.currentTime;
    // On affiche la position de lecture, grâce à la fonction de formattage du temps
    playerTimeCurrent.innerText = (0, _formatTimestampDefault.default)(audioPlayer.currentTime);
});
// Lorsque le player se met en lecture, il émet un évent "play" pour annoncer le début de lecture. Dans ce cas,
// on change l'icône du bouton play à pause
//
// Pourquoi faire ça ici et non dans le "click" sur le bouton ? :) Que se passe-t-il si vous utilisez le bouton
// "play/pause" natif qui se trouve sur votre clavier ? Cela va mettre en pause la chanson, mais l'événement "click"
// du bouton play/pause ne sera pas émis, donc icône pas mis à jour, car vous avez utilisez votre clavier et
// non le bouton.
// En revanche, lorsque votre OS reçoit le click sur le clavier, il trouve l'application qui émet du son (en l'occ.
// notre browser) et lui demande d'arrêter. Le browser va chercher quel élément audio lis actuellement de la musique
// et va faire un "audioPlayer.pause()". Les évenements play/pause seront donc transmis et c'est pour cela qu'il est
// mieux de gérer le changement d'icône ici
audioPlayer.addEventListener("play", ()=>{
    playerPlayIcon.innerHTML = "pause";
    // On anime le logo de l'application lorsqu'une chanson se lit, pour plus de fancyness
    logo.classList.add("animated");
});
// Lorsque le player pause la lecture, il émet un évent "pause" pour annoncer le pause de lecture. Dans ce cas,
// on change l'icône du bouton pause à play
// voir commentaire précédent
audioPlayer.addEventListener("pause", ()=>{
    playerPlayIcon.innerHTML = "play_arrow";
    // On arrête d'animer le logo de l'application lorsqu'aucune chanson ne se lit, pour moins de fancyness
    logo.classList.remove("animated");
});
exports.default = playSong;

},{"../lib/formatTimestamp":"9L9AK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9L9AK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>formatTimestamp);
function formatTimestamp(timestamp) {
    timestamp = parseInt(timestamp, 10);
    let hours = Math.floor(timestamp / 3600);
    let minutes = Math.floor((timestamp - hours * 3600) / 60);
    let seconds = timestamp - hours * 3600 - minutes * 60;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["farZc","8lqZg"], "8lqZg", "parcelRequiref161")

//# sourceMappingURL=index.975ef6c8.js.map
