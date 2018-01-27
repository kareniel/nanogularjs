var nanorouter = require('nanorouter')
var nanohref = require('nanohref')
var nanoquery = require('nanoquery')
var nanolocation = require('nanolocation')

module.exports = Router

function Router (state, emit) {
  this.router = nanorouter({ default: '/404' })

  this.$onInit = function () {
    nanohref(location => {
      var href = location.href
      var currHref = window.location.href
      if (href === currHref) return
      this.handlePush(href)
    })

    this.navigate()
  }

  this.handlePush = function (href) {
    window.history.pushState(state.history, null, href)
    this.navigate()
  }

  this.navigate = function () {
    state.router = this._matchRoute()
    this._prerender()
  }

  this._matchRoute = function () {
    var location = nanolocation()
    var queryString = window.location.search
    var matched = this.router.match(location)
    var state = {}

    state.href = location
    state.query = nanoquery(queryString)
    state.route = matched.route
    state.params = matched.params
    state._handler = matched.cb

    return state
  }

  this._prerender = function () {
    var fn = '?'
    state._handler(state, fn)
    emit('render')
  }
}
