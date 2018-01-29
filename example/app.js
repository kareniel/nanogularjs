var angular = require('../src')
var router = require('../src/router')

angular
  .module('nanogularjs-example', [ router ])
  // .route('/', require('./views/home.page'))
  // .route('/2', require('./views/second.page'))
  .component('app', require('./components/app.component'))

angular.bootstrap(document, [ 'nanogularjs-example' ])
