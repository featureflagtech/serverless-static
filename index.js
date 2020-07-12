"use strict";

const server = require( "./src/httpServer" );
const options = require( "./src/options" );

module.exports = class ServerlessStaticHttpsPlugin {

  constructor( serverless ) {

    const static_env = options( serverless );

    this.commands = {
      "static-https": {
        usage: "serve local directory securely",
        lifecycleEvents: [ "start" ],
        commands: {
          serve: {
            usage: "serve local directory securely",
            lifecycleEvents: [ "start" ],
          }
        }
      }
    };

    this.hooks = {
      "before:offline:start:init": server.bind( this, serverless, static_env ),
      "before:offline:start": server.bind( this, serverless, static_env ),
      "static:serve:start": server.bind( this, serverless, static_env )
    };

  }

}
