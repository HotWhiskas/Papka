const express = require("express");
const { request } = require("express");
var cors = require('cors');
const db = require("./server");
var router = express();
router.use(cors());

router.get("/post", (req,res)=>{

    const db = require('./server');
    const input =db.query(`SELECT * FROM public.post;`,(error,results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
});

router.post("/post",(req,res)=>{
    
    const db = require('./server');

    const {post_name, wages, number_functions, id_functions, name_functions} = req.body

    db.query(`INSERT INTO public."post"(post_name, wages, number_functions, id_functions, name_functions) VALUES ($1,$2,$3,$4,$5)`,
    [post_name, wages, number_functions, id_functions, name_functions],(error,result)=>{
        if(error){
            throw error
        }
        res.status(201).send(`User added with ID: ${result.insertId}`)
    })
});

router.get("/users", (req,res)=>{

    const db = require('./server');
    const input =db.query(`select u.*,p.id_post, p.post_name, p.wages from public.users u
    left join public.post p on u.id_post=p.id_post`,(error,results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
});

router.post("/users",(req,res)=>{
    
    const db = require('./server');

    const {first_name_user, name_user, midle_name_user, pasport_number, pasport_serial, id_post, login, password} = req.body

    db.query(`INSERT INTO public."users"(first_name_user, name_user, midle_name_user, pasport_number, pasport_serial, id_post, login, password) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
    [first_name_user, name_user, midle_name_user, pasport_number, pasport_serial, id_post, login, password],(error,result)=>{
        if(error){
            throw error
        }
        res.status(201).send(`User added with ID: ${result.insertId}`)
    })
});

router.get("/users/log",(req,res)=>{
    const db = require('./server');
    const input =db.query(`select u.id_users, u.login, u.password from public.users u`,(error,results) => {
        if(error){
            throw error
        }
       
        res.status(200).json(results.rows)
    })
});

router.delete("/users",(req,res)=>{
    const db = require('./server');
    const {id_users} = req.body
    db.query('DELETE FROM users WHERE id_users = $1', [id_users], (error, results) => {
        if (error) {
          throw error
        }
        
      })
});

router.put("/users",(req,res)=>{
    const db = require('./server');
    const { first_name_user, name_user , midle_name_user , pasport_number, pasport_serial , id_post , login,password,id_users } = req.body

    db.query (`UPDATE users SET first_name_user = $1, name_user =$2, midle_name_user = $3, pasport_number = $4, pasport_serial = $5, id_post = $6, login = $7, password = $8 WHERE id_users = $9`,
        [ first_name_user, name_user , midle_name_user , pasport_number , pasport_serial , id_post , login,password,id_users],
        (error,results) => {
        if(error){
            throw error
        }
        res.status(200).send({method:"PUT"})
    })
    
});

router.get("/product",(req,res)=>{
    const db = require('./server');
    const input =db.query(`select * from product`,(error,results) => {
        if(error){
            throw error
        }
       
        res.status(200).json(results.rows)
    })
});

router.post("/product",(req,res)=>{
    
    const db = require('./server');

    const {id_users,number,price,product_name,ingredient} = req.body

    db.query(`INSERT INTO public."product"(id_users,number,price,product_name,ingredient) VALUES ($1,$2,$3,$4,$5)`,
    [id_users,number,price,product_name,ingredient],(error,result)=>{
        if(error){
            throw error
        }
        res.status(201).send(`User added with ID: ${result.insertId}`)
    })
});

router.put("/product",(req,res)=>{
    const db = require('./server');
    const { number,price,product_name,ingredient,id_product } = req.body

    db.query (`UPDATE product SET number = $1,price =$2 ,product_name =$3 ,ingredient = $4 WHERE id_product = $5`,
        [ number,price,product_name,ingredient,id_product],
        (error,results) => {
        if(error){
            throw error
        }
        res.status(200).send({method:"PUT"})
    })
    
});

router.post("/chek",(req,res)=>{
    
    const db = require('./server');

    const {product_name,date_start,final_price,id_users} = req.body

    db.query(`INSERT INTO public."chek"(product_name,date_start,final_price,id_users) VALUES ($1,$2,$3,$4)`,
    [product_name,date_start,final_price,id_users],(error,result)=>{
        if(error){
            throw error
        }
        res.status(201).send(`User added with ID: ${result.insertId}`)
    })
});

module.exports = router;