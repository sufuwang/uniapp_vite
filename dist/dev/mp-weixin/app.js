"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var common_vendor = require("./common/vendor.js");
var pages_sub_api = require("./pages/sub/api.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/sub/index.js";
}
const getApi = () => "./pages/sub/api.js";
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch: ", getApi());
    console.log("App Launch: ", pages_sub_api.Api);
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/sufuwang/Downloads/Code/BackUp/viteApp/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
