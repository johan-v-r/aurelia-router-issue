# aurelia-router-issue
Source to replicate [issue #619 on aurelia/router](https://github.com/aurelia/router/issues/619).

Default scaffold (`au new`) with latest (2018/11/01) [aurelia-cli](https://aurelia.io/docs/build-systems/aurelia-cli/) 

`package-lock.json` contains `aurelia-router` version 1.6.3

## How to replicate  

* `npm install`
* `au run`
* Click on _Products_ link in the top most nav to see URL update to: http://localhost:8080/#/arrivals?childRoute=products
