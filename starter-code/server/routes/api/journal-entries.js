const express       = require('express');
const router        = express.Router();
const Entry         = require('../../models/journal-entry');

router.get('/journal-entries', (req, res, next) => {
  Entry.find({})
    .then(entries => res.status(200).json(entries))
    .catch(err => res.status(500).json(err))
});

router.get('/journal-entries/:id', (req, res, next) => {
  Entry.findById(req.params.id)
    .then(entry => res.status(200).json(entry))
    .catch(err => res.status(500).json(err))
});

router.post('/journal-entries', (req, res, next) => {
  const newEntry = new Entry({
    title: req.body.title,
    content: req.body.content
  });

  newEntry.save()
  .then(newEntry => res.status(200).json(newEntry))
  .catch(err => res.status(500).json(err))
});

module.exports = router;
