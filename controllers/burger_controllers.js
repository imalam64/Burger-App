express = require("express");

var router = express.Router();

burger = require("../models/burger.js");

router.get('/', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
        burger.create(['burger_name'], [req.body.name]
        , function(result){
        res.redirect("/");
    })
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
  
    burger.update({devoured: true}, condition, 
    function(result) {
    res.redirect("/");  
    });
});

module.exports = router;