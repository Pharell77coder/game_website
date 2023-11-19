const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    passsword: "",
    databbase: "crud",
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM  login WHERE username = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json("Erreur");
        if(data.length > 0) {
           return res.json("Connection Reussite"); 
        } else {
            return res.json("Fail"); 
        }
        
    })
})

app.listen(8081, () => {
    console.log("Lecture..")
})