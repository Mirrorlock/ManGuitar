const express = require('express');
const db = require("../config/database");

const router = express.Router();

router.get('/', (req, res) => {
    let query = "select * from guitars";
    
    db.query(query, (err, result) =>{
        if(err) throw err;
        
        res.render("catalog", {
            guitars: result
        });
    });
});


router.get('/:id', (req, res) => {
    let query = "select * from guitars where id=" + req.params["id"];
    db.query(query, (err, result) => {
        if(err) throw err;
        
        // console.log(result);
        res.render("guitar_view", {
            guitar: result[0]
        });
    })

});

router.post('/', (req, res) =>{
    let query = `SELECT * FROM guitar_heaven.guitars WHERE guitarName LIKE '%${req.body.search}%'`;

    db.query(query, (err, result) => {
        res.render("catalog", {
            guitars: result
        });
    })
});

module.exports = router;