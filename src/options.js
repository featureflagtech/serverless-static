"use strict";

const StaticHttpsPluginDefaults = {
  path: './public',
  port: 8000,
  pathToKeyFile: '',
  pathToCertFile: ''
};

module.exports = function ( serverless ) {

  return {
    path,
    port,
    pathToKeyFile,
    pathToCertFile
  } = Object.assign( StaticHttpsPluginDefaults, serverless.service.custom[ 'static-https' ] );

};