var angular = require('../src')
var router = require('../src/router')(angular)

var app = angular
  .module('nanogularjs-example', [ router ])
  .component('app', require('./components/app.component'))
  .component('pageone', require('./views/page-one'))
  .component('pagetwo', require('./views/page-two'))

app.mount('body', ['nanogularjs-example'])
