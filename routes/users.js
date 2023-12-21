var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    userService.getUsers((data) => {
      res.status(200).send(data);
    });
  } catch(e) {
    console.error(e);
    res.status(500).send('Failed to retrieve data from database: ' + e.error);
  }
});

router.post('/', function(req, res, next) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  if (!firstName) { res.status(400).send('First name must not be empty'); return; }
  if (!lastName) { res.status(400).send('Last name must not be empty'); return; }

  console.log(`Creating new user with firstname: ${firstName} and lastName: ${lastName} `)
  try {
    userService.createUser(firstName, lastName);
    res.status(201).send('User created successfully');
  } catch(e) {
    console.error(e);
    res.status(500).send('Failed to retrieve data from database: ' + e.error);
  }

});

module.exports = router;
