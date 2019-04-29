'use strict';

const express = require('express')
const router = express.Router()

const Note = require('./models/Note')

router.get('/notes', function(req, res, next) {
  Note.find((err, result) => res.json(err || result))
})

router.get('/notes/:id', function(req, res, next) {
  const { id } = req.params

  Note.findOne(
    { id },
    (err, result) => console.log(result) || res.json(err || result)
  )
})

router.post('/notes', function(req, res, next) {
  const newNote = new Note({
    id: String(
      Math.random()
        .toString(36)
        .substring(2, 7)
    ),
    note: ''
  })
  newNote
    .save()
    .then(result => console.log(result) || res.json(result))
    .catch(res.json)
})

router.put('/notes/:id', function(req, res, next) {
  const { id } = req.params
  const { note } = req.body
  Note.updateOne({ id }, { note }, null, (err, result) =>
    res.json(err || result)
  )
})

router.delete('/notes/:id', function(req, res, next) {
  const { id } = req.params
  Note.deleteOne({ id }, (err, result) => res.json(err || result))
})

module.exports = router
