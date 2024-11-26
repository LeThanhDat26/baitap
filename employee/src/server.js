const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
// Kết nối với cơ sở dữ liệu MySQL
const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'your_password',
 database: 'employee_management'
});
db.connect(err => {
 if (err) throw err;
 console.log('Đã kết nối với cơ sở dữ liệu MySQL');
});