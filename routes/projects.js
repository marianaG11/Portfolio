const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.index);









// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
