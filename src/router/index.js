/* # nanogular-router
 *
 * @param angular<Angular> an angular instance
 * @returns name<string> the name of the registered module
*/
module.exports = function (angular) {
  const name = 'angul-router'
  var requires = []
  var router = angular.module(name, requires)

  router.provider(require('router.provider'))
  router.service('router.service')
  router.view('', require('./router.component'))
  router.run(require('./router'))

  return router.name
}
