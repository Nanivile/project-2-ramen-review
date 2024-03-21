var express = require('express');
const { route } = require('.');
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

// DELETE /shop/:id
router.delete('/:id', shopsCtrl.delete)

router.get('/:id/edit', shopsCtrl.editShop)

router.put('/:id', shopsCtrl.updateShop)

module.exports = router;
