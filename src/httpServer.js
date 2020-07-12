"use strict";

const express =  require( "express" );
const https = require( "https" );
const fs = require( "fs" );

module.exports = ( serverless, settings ) => {

  return new Promise( ( resolve, reject ) => {

    const app = express();
    
    app.use( express.static( settings.path ) );

    https.createServer({
      key: fs.readFileSync( settings.pathToKeyFile ),
      cert: fs.readFileSync( settings.pathToCertFile )
    }, app).listen( settings.port, () => { 

      serverless.cli.consoleLog('') 
      serverless.cli.log( `[ Static ] serving files from ${ settings.path } folder` ); 
      serverless.cli.log( `[ Static ] serving files on https://localhost:${ settings.port }` )
      serverless.cli.consoleLog('') 
      resolve()

    });

  })
}





