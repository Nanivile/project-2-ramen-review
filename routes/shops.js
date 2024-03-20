var express = require('express');
var router = express.Router();

var shopsCtrl = require('../controllers/shops');

// all paths start with /movies

// GET /shops
router.get('/', shopsCtrl.index)
//GET /shops/new
router.get('/new', shopsCtrl.new)

//GET /shops/:id 
router.get('/:id', shopsCtrl.show)

router.post('/', shopsCtrl.create)

module.exports = router;
