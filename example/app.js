var angular = require('../src')
var router = require('../src/router')(angular)

angular
  .module('nanogularjs-example', [ router ])
  .component('app', require('./components/app.component'))
  .component('pageone', require('./views/page-one'))
  .component('pagetwo', require('./views/page-two'))

angular.element(document).ready(function () {
  angular.bootstrap(angular.element(document), ['nanogularjs-example'])
})
