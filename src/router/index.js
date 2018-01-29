/* # nanogular-router
 *
 * @param angular<Angular> an angular instance
 * @returns name<string> the name of the registered module
*/
module.exports = function (angular) {
  const name = 'angul-router'
  var requires = []
  var router = angular.module(name, requires)

  router.service('router.service')
  router.component('', require('./router.component'))
  router.run(require('./router'))

  return router.name
}
