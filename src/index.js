var assert = require('assert')
var $ = require('./Dollar')
var Injector = require('./Injector')
var Module = require('./Module')

function Angular () {
  if (!(this instanceof Angular)) return new Angular()
  this.loadedModules = {}
}

Angular.prototype.module = function (name, modules) {
  // set
  if (modules) {
    assert.equal(Array.isArray(modules), true, '')
    var newModule = Module(name, modules)
    this.loadedModules[name] = newModule
    return newModule
  }

  // get
  var module = this._modules[name]
  if (!module) throw new Error(`Module '${name}' not found.`)
  return module
}

Angular.prototype._createInjector = function (modules) {
  var path = []
  var loaded = {}

  var providerCache = {}
  var providerInjector = Injector(providerCache, function (serviceName, caller) {
    if (typeof caller === 'string') path.push(caller)
  })

  var instanceCache = {}
  var protoInstanceInjector = Injector(instanceCache, function (serviceName, caller) {
    var provider = providerInjector.get(serviceName + 'Provider', caller)
    return instanceInjector.invoke(provider.$get, provider, undefined, serviceName)
  })

  var instanceInjector = protoInstanceInjector

  providerCache['$injectorProvider'] = {
    $get: () => protoInstanceInjector
  }

  var runBlocks = loadModules(modules)

  return instanceInjector

  function loadModules (modules) {
    var runBlocks = []
    var moduleFn

    modules.forEach(module) {
      if (loaded[moduleName]) return
      if (typeof module === 'string') {
        moduleFn = 
      }
    }

  }
}


Angular.prototype.bootstrap = function (el, modules = []) {
  el = $(el)

  modules.unshift(['$provide', function ($provide) {
    $provide.value('$rootElement', el)
  }])

  modules.unshift('ng')

  var injector = this._createInjector(modules)

  injector.invoke(this._bootstrap)

  console.log(this)

  return this.injector
}

Angular.prototype._bootstrap = function ($rootScope, $rootElement, $compile, $injector) {
  $rootScope.$apply(function () {
    $rootElement.data('$injector', $injector)
    $compile($rootElement)($rootScope)
  })
}

Angular.prototype._bootstrap.$inject = ['$rootScope', '$rootElement', '$compile', '$injector']

Angular.prototype.element = $

module.exports = Angular()
