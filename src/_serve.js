'use strict';
let express =  require("express")
let morgan = require('morgan')
var https = require('https')
var fs = require('fs')

module.exports = (serverless, settings ) => {
  return new Promise((resolve, reject)=>{

    // settings.folder -> folder to serve
    // setting.port -> port used to configure localhost

    let app = express()

    app.use(morgan('dev', {
      "stream": { 
        write: (str) => { 
            let write = `[ Static Serve ] from ${ settings.path } - ${ str }`
            serverless.cli.log( write.replace(/[\n\r]+/g, '').trim() ) 
        } 
      }
    }))
    
    app.use(express.static( settings.path ))

    https.createServer({
      key: fs.readFileSync('../../../../Certs/key.pem'),
      cert: fs.readFileSync('../../../../Certs/cert.pem')
    }, app).listen( settings.port, () => { 

      serverless.cli.consoleLog('') 
      serverless.cli.log( `[ Static ] serving files from ${ settings.path } folder` ); 
      serverless.cli.log( `[ Static ] serving files on https://localhost:${ settings.port }` )
      serverless.cli.consoleLog('') 
      resolve()

    });

  })
}





