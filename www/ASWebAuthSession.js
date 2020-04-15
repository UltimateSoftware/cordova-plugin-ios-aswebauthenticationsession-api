var PLUGIN_NAME = "ASWebAuthSession";
function ASWebAuthSession() {}

ASWebAuthSession.prototype.start = function (options, callback, errorCallback) {
  var url = options.url;
  var callbackURLScheme = options.callbackURLScheme;
  var prefersEphemeralWebBrowserSession = !!options.prefersEphemeralWebBrowserSession;

  var params = [callbackURLScheme, url, prefersEphemeralWebBrowserSession];

  cordova.exec(callback, errorCallback, PLUGIN_NAME, "start", params);
};

ASWebAuthSession.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.ASWebAuthSession = new ASWebAuthSession();
  return window.plugins.ASWebAuthSession;
};
cordova.addConstructor(ASWebAuthSession.install);
