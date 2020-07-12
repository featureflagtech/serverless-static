# Serverless Static HTTPS plugin

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

[Serverless plugin](https://www.serverless.com/plugins/) for running your local development over **HTTPS** to mirror a production setup of a webserver hosted with API Gateway + Lambda with static files hosted on S3.

To be used in tandem with:

 * [serverless-offline](https://www.npmjs.com/package/serverless-offline)
 * [serverless-s3-sync](https://www.npmjs.com/package/serverless-s3-sync)

NOTE: to run HTTPS servers locally you need to install SSL certificates: 
* [how to install SSL certificates for local development on a Mac](https://expeditedsecurity.com/blog/localhost-ssl-fix/)

## 1.install the plugin

```
$ npm install serverless-static-https --save-dev
```

## 2. add it to your serverless.yml file

Then inside your project's serverless.yml file add following entry to the plugins section: serverless-static. If there is no plugin section you will need to add it to the file.

It should look something like this:

```YAML
plugins:
  - serverless-static-https 
```

## 3. customize behavior (optional)
```YAML
custom:
  static-https:
    path: ./public # select the folder you want to serve
    port: 8000 # select a specific port
    pathToKeyFile: ./key.pem # relative path from PWD to key file
    pathToCertFile: ./cert.pem # relative path from PWD to cert file

# this will overide default behavior
# it will serve the folder ./public
# it will serve it throught https://localhost:8000
```
