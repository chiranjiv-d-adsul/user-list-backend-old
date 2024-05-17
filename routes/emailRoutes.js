const express = require('express');
const { sendEmailToList } = require('../controllers/emailController');

const router = express.Router();

router.post('/:id/send-email', sendEmailToList);

module.exports = router;
