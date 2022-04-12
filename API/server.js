const express = require("express");
const app = express();
const catalogRouter = require('./api');


app.listen(8000,()=>{
    console.log("Запускаю сервер на 8000 порте");
})

app.use(express.json());
app.use("/api",catalogRouter)

const {Client} = require('pg');
const db = new Client({
    user:"postgres",
    password:"max123",
    host:"localhost",
    port: 5432,
    database:"Baker"
});

db.connect();

module.exports=db;
