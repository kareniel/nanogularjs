var angular = require('../../src')

module.exports = {
  controller: RouterComponent,
  templateUrl: '/router.html'
}

function RouterComponent ($rootScope, $scope, $element, $compile) {
  var ctrl = this

  ctrl.$onChanges = function (prevState, currState) {
    if (prevState.href !== currState.href) {
      ctrl.update()
    }
  }

  ctrl.$postLink = function () {
    ctrl.update()
  }

  ctrl.update = function () {
    elForHref(ctrl.state.href)
    var el = ctrl.createElement()
    var compiledEl = $compile(el)($scope.$parent)

    angular.element($element.children()[0]).replaceWith(compiledEl)
  }

  ctrl.createElement = function (tag) {
    var el = document.createElement(tag)
    var $el = angular.element(el)

    return $el
  }
}
