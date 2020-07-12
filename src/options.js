"use strict";

const StaticHttpsPluginDefaults = {
  path: "./public",
  port: 8000,
  pathToKeyFile: "",
  pathToCertFile: ""
};

module.exports = function ( serverless ) {
  return Object.assign(
    StaticHttpsPluginDefaults,
    serverless.service.custom[ "static-https" ]
  );
};