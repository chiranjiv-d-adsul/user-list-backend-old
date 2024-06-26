const express = require('express');
const multer = require('multer');
const { addUserFromCSV } = require('../controllers/userController');

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/:id/users', upload.single('file'), addUserFromCSV);

module.exports = router;
