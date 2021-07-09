const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/Upload') 
const PostController = require('./Controllers/PostController');

const routes = new express.Router();
const upload = multer(uploadConfig); 


routes.post('/posts',PostController.index);

routes.post('/posts',upload.single('image'),PostController.store);

module.exports = routes;    