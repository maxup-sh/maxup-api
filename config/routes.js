const express = require('express')

module.exports = function (app, config) {
  const router = express.Router()

  // GET /v1
  require('../api/v1/v1')(app, config)

  app.get('/confirm', (req, res) => {
    res.render('confirm', {
      layout: 'simple',
      title: 's3d - Verifying...',
      baseUrl: config.baseUrl,
      email: req.query.email,
      token: req.query.token
    })
  })

  app.get('/notifications/email-confirmed', (req, res) => {
    res.render('email-confirmed', {
      layout: 'simple',
      title: 's3d - Email Address Confirmed'
    })
  })

  app.get('/notifications/authentication-failed', (req, res) => {
    res.render('authentication-failed', {
      layout: 'simple',
      title: 's3d - Authentication Failed'
    })
  })

  app.use('/', router)
}
