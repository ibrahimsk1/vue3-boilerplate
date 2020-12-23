"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthActive = exports.API_BASE_URL = exports.defaultLocale = void 0;
var defaultLocale = 'en'; // export const API_BASE_URL = process.env.VUE_APP_API_BASE_URL

exports.defaultLocale = defaultLocale;
var API_BASE_URL = "https://localhost/api/"; // export const environment = process.env.NODE_ENV.toLowerCase();

exports.API_BASE_URL = API_BASE_URL;
var isAuthActive = false;
exports.isAuthActive = isAuthActive;