const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const kx = require('../db/connection');

const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')})


router.get('/', function (request, response) {
  response.render('posts/index')
});

router.post('/', upload.single('photo'), function (request, response) {
  const {body} = request;
  const {username} = request.body;
  const {content} = request.body;
  if(!request.file){
    kx
      .insert({username: username, content: content})
      .into("clucks")
      .then((clucks)=>{
        console.log(clucks)
        response.redirect('/')
      });
  }
  else{
    const {filename} = request.file;
    kx
      .insert({username: username, content: content, photo_path: `/uploads/${filename}`})
      .into("clucks")
      .then((clucks)=>{
        console.log(clucks)
        response.redirect('/')
      });
  }

});

module.exports = router;
