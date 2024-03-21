const express = require('express');
const router = express.Router();
const topsCtrl = require('../controllers/tops');

// This router is mounted to a "starts with" path of '/'

// GET /tops/new (new functionality)
router.get('/tops/new', topsCtrl.new);

router.get('/tops', topsCtrl.new)
// POST /tops (create functionality)
router.post('/tops', topsCtrl.create);

module.exports = router;