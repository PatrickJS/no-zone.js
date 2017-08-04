(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () {
  'use strict';

  const zone = {
    name: 'NO ZONE',
    assertZonePatched: function assertZonePatched() {

    },
    fork: function fork() {
      return this
    },
    get: function get() {
      return true;
    },
    getZoneWith: function getZoneWith(key) {
      return this;
    },
    wrap = function (callback, source) {
      return callback;
    },
    run: function run(fn) {
      return fn();
    },
    runGuarded: function runGuarded(fn) {
      return fn();
    },
    __load_patch: function __load_patch(type, fn) {

    },
    __symbol__: function __symbol__(name) {
      return '__zone_symbol__' + name;
    }
  };
  // Getters
  zone.root = zone;
  zone.current = zone;
  zone.parent = zone;
  zone.currentTask = null;

  // define on global
  global['Zone'] = zone;

})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
