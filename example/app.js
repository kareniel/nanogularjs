var angular = require('../src')
var router = require('../src/router')

var app = angular('nanogularjs-example', [ router ])

app.use(router())

app.route('/', require('./views/home.page'))
app.route('/2', require('./views/second.page'))

app.component('app', require('./components/app.component'))
app.component('pageone', require('./views/page-one'))
app.component('pagetwo', require('./views/page-two'))

app.mount('body')
app.start()
