const express = require('express');
const { createArticle } = require('../controllers/articlesController');

const router = express.Router();

router.post('/articles', createArticle);

exports default router;
