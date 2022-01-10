const router = require('express').Router();
let Event = require('../models/event');

router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const creatorId = req.body.creatorId;
  const name = req.body.name;
  const date = Date.parse(req.body.date);
  const end = Date.parse(req.body.end);
  const location = req.body.location;
  const guest = req.body.guest;

  const newEvent = new Event({
      creatorId,
      name,
      date,
      end,
      location,
      guest,
  });

  newEvent.save()
  .then(() => res.json('Event added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:email').get((req,res) => {
  let email = req.params.email;
  Event.find({creatorId: email})
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error:' + err));
});

/*
router.route('/:id').get((req,res) => {
  let id = req.params.id;
  Event.findById(id)
  .then(events => res.json(events))
  .catch(err => res.status(400).json('Error:' + err));
})*/

module.exports = router;