/**
 * GET /allusers
 * List all users.
 */
 var User = require('../models/User.js');

 exports.getUsers = (req, res) => {
   User.find((err, docs) => {
      res.render('allusers/users', { users: docs });
   });
 };

 User.find((err, users) => {
   console.log(users);
 });
