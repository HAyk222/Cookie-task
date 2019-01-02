const { Router } = require('express');
const routes = Router();
const moment = require('moment')

const data = []

routes.get('/', (req, res) => {
	if(!req.session.time) {
		req.session.time = moment().format('h:mm:ss a')
    }
    res.render('home', { time: req.session.time })
})

routes.get('/form', (req, res) => {
    res.render('form',)
})

routes.post('/form', (req, res) => {
	if(req.body.username === "" || req.body.password === "" || req.body.gender === ""){
		req.session.error = "fill all fields!"
		res.render('form', {error: req.session.error})
	}else{
		req.session.error =  ""
		data.push({
			username: req.body.username,
			password: req.body.password,
			gender: req.body.gender,
			agree: req.body.agree
		})
		res.redirect('/result')
	}
})

routes.get('/result', (req, res) => {
    res.render('result', { data })
})

routes.get('/myroute/:param', (req, res) => {
	
	if(req.params.param === "param" || req.params.param === "cookie" || req.params.param === "query" || req.params.param === "header") {
		res.send()
	}else{
		res.status(404).end('Not found');
	}
    
})


routes.get('/api/time', (req, res) => {
    res.send({'time': moment().format('h:mm:ss a')})
})

routes.get('/api/users', (req, res) => {
    res.send(data)
})

module.exports = routes;