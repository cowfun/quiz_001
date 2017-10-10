const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const kx = require('../db/connection');

const moment = require('moment');
moment().format();

router.get('/', function (request, response) {
  kx
    .select()
    .from("clucks")
    .orderBy('created_at', 'DESC')
    .then((clucks)=>{
      response.render('index',{clucks, moment: moment})
    });
});

module.exports = router;
