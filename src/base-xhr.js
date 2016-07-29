/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */

'use strict';

var objectMirrors = require('./object-mirrors');

var BaseXHR = function(xhrImpl, defaultValidator) {

    var instance = {};
    var xhr = xhrImpl || {};

    var defaultGetValidator = function(target, source, prop) {
        if (defaultValidator) {
            return defaultValidator(target, source, prop);
        }
        return {};
    };
    var defaultSetValidator = function(val_, target, source, prop) {
        if (defaultValidator) {
            return defaultValidator(target, source, prop);
        }
        return {};
    };
    var defaultFuncValidator = defaultGetValidator;

    objectMirrors.mirrorRwProp(instance, xhr, "responseType", defaultSetValidator, defaultGetValidator);
    objectMirrors.mirrorRwProp(instance, xhr, "timeout", defaultSetValidator, defaultGetValidator);
    objectMirrors.mirrorRwProp(instance, xhr, "withCredentials", defaultSetValidator, defaultGetValidator);

    objectMirrors.mirrorReadOnlyProp(instance, xhr, "readyState", defaultGetValidator);
    objectMirrors.mirrorReadOnlyProp(instance, xhr, "response", defaultGetValidator);
    objectMirrors.mirrorReadOnlyProp(instance, xhr, "responseText", defaultGetValidator);
    objectMirrors.mirrorReadOnlyProp(instance, xhr, "responseURL", defaultGetValidator);
    objectMirrors.mirrorReadOnlyProp(instance, xhr, "responseXML", defaultGetValidator);
    objectMirrors.mirrorReadOnlyProp(instance, xhr, "status", defaultGetValidator);
    objectMirrors.mirrorReadOnlyProp(instance, xhr, "statusText", defaultGetValidator);
    objectMirrors.mirrorReadOnlyProp(instance, xhr, "upload", defaultGetValidator);

    objectMirrors.mirrorFunc(instance, xhr, "abort", defaultFuncValidator);
    objectMirrors.mirrorFunc(instance, xhr, "open", defaultFuncValidator);
    objectMirrors.mirrorFunc(instance, xhr, "send", defaultFuncValidator);
    objectMirrors.mirrorFunc(instance, xhr, "setRequestHeader", defaultFuncValidator);
    objectMirrors.mirrorFunc(instance, xhr, "getResponseHeader", defaultFuncValidator);
    objectMirrors.mirrorFunc(instance, xhr, "overrideMimeType", defaultFuncValidator);
    objectMirrors.mirrorFunc(instance, xhr, "getAllResponseHeaders", defaultFuncValidator);

    // EventTarget iface
    objectMirrors.mirrorFunc(instance, xhr, "addRemoveEventListener", defaultFuncValidator);
    objectMirrors.mirrorFunc(instance, xhr, "removeRemoveEventListener", defaultFuncValidator);

    // All events as in https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    objectMirrors.mirrorRwProp(instance, xhr, "onload", defaultSetValidator, defaultGetValidator);
    objectMirrors.mirrorRwProp(instance, xhr, "onloadstart", defaultSetValidator, defaultGetValidator);
    objectMirrors.mirrorRwProp(instance, xhr, "onloadend", defaultSetValidator, defaultGetValidator);
    objectMirrors.mirrorRwProp(instance, xhr, "onabort", defaultSetValidator, defaultGetValidator);
    objectMirrors.mirrorRwProp(instance, xhr, "onerror", defaultSetValidator, defaultGetValidator);
    objectMirrors.mirrorRwProp(instance, xhr, "onprogress", defaultSetValidator, defaultGetValidator);
    objectMirrors.mirrorRwProp(instance, xhr, "ontimeout", defaultSetValidator, defaultGetValidator);
    objectMirrors.mirrorRwProp(instance, xhr, "onreadystatechange", defaultSetValidator, defaultGetValidator);

    return instance;
};

module.exports = BaseXHR;