"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
const defaultFormObj = {
  patientName: "",
  patientIdCard: "",
  sex: "",
  phoneNumber: "",
  alternatePhoneNumber: "",
  bornDate: "",
  disease: 0,
  city: "",
  relationship: "",
  serviceType: "singleExpertConsultation",
  expertTeamName: "",
  expertTeamId: "",
  expertId: "",
  expertName: "",
  serviceFee: 0,
  conditionDescription: "",
  fidList: [],
  consultationAppeal: ""
};
const _sfc_main = {
  setup() {
    const formObj = common_vendor.ref(__spreadValues({}, defaultFormObj));
    common_vendor.onLoad(() => {
      formObj.value.serviceType = "options?.serviceType";
    });
    const addPicture = () => {
      console.info("addPicture");
      common_vendor.index.chooseImage({
        count: 1,
        success: async (res) => {
        }
      });
    };
    const expertSelect = () => {
      console.info("expertSelect");
    };
    return {
      formObj,
      addPicture,
      expertSelect
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $setup.formObj.serviceType === "singleExpertConsultation"
  }, $setup.formObj.serviceType === "singleExpertConsultation" ? {
    b: common_vendor.o((...args) => $setup.expertSelect && $setup.expertSelect(...args))
  } : {}, {
    c: $setup.formObj.conditionDescription,
    d: common_vendor.o(($event) => $setup.formObj.conditionDescription = $event.detail.value),
    e: common_vendor.o((...args) => $setup.addPicture && $setup.addPicture(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/sufuwang/Downloads/Code/BackUp/viteApp/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
