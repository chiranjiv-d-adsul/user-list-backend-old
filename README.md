curl -X POST http://localhost:5000/users/6647d1743811d1e0391b08cb/users \
-H "Content-Type: multipart/form-data" \
-F "file=@uploads/sample.csv"

npm install axios form-data
node uploadTest.js