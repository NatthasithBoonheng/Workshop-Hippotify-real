import express from 'express';
import connection from './config/database.js';

const app = express();
const port = 5555;

app.use(express.json());

connection.connect((err)=>{
    if (err){console.log(err);} else{console.log("Database connected");}
})

app.listen(port,() => {
    console.log(`Im listening on port : ${port}`);
})