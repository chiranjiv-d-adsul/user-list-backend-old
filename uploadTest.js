const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const listId = '6647a174090fb8397651d2e0';
const filePath = 'uploads/sample.csv';

const form = new FormData();
form.append('file', fs.createReadStream(filePath));

axios.post(`http://localhost:5000/users/${listId}/users`, form, {
  headers: {
    ...form.getHeaders(),
  },
})
.then(response => {
  console.log('Response:', response.data);
})
.catch(error => {
  console.error('Error:', error.response ? error.response.data : error.message);
});
