var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/approvers', (req, res) => {
  db.getApprovers(req.app.get('db'))
    .then(approvers => {
      res.json(approvers)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/clients', (req, res) => {
  db.getClients(req.app.get('db'))
    .then(clients => {
      res.json(clients)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/employees', (req, res) => {
  db.getEmployees(req.app.get('db'))
    .then(employees => {
      res.json(employees)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/projects', (req, res) => {
  db.getProjects(req.app.get('db'))
    .then(projects => {
      res.json(projects)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/sites', (req, res) => {
  db.getSites(req.app.get('db'))
    .then(sites => {
      res.json(sites)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/travelRequests', (req, res) => {
  db.getRequests(req.app.get('db'))
    .then(travelRequests => {
      res.json(travelRequests)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/travelRequest/:id', (req, res) => {
  db.getRequest(req.app.get('db'), req.params.id)
    .then(travelRequest => {
      res.json(travelRequest)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

//new request submitted api:
router.post('/travelRequest', (req, res) => {
  db.createNewRequest(req.app.get('db'), req.body)
  .then(res.status(200))
  .catch(err => {
    res.status(500).send(err + 'SERVER ERROR')
  })
})


module.exports = router
