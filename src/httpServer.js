"use strict";

const express =  require( "express" );
const https = require( "https" );
const fs = require( "fs" );

module.exports = function ( serverless, settings ) {

  return new Promise( resolve => {

    const app = express();
    
    app.use( express.static( settings.path ) );

    https.createServer({
      key: fs.readFileSync( settings.pathToKeyFile ),
      cert: fs.readFileSync( settings.pathToCertFile )
    }, app).listen( settings.port, () => { 

      serverless.cli.log( `[ static-https ] serving files from ${ settings.path } folder` );
      serverless.cli.log( `[ static-https ] serving files on https://localhost:${ settings.port }` );
      resolve();

    });

  })
}





