const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-movie', adminController.getAddMovie); 

router.post('/add-movie', adminController.postAddMovie);

router.get('/find-online', adminController.getFindMovie); 

module.exports = router;
