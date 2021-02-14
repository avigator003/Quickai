var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');  
var db=require('../config/config')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let user = require("../Model/User");
let flightsearch = require("../Model/FlightSearch");
let markup=require("../Model/Markup")
let distributor=require("../Model/Distributor")
let transaction=require("../Model/Transaction")



//User
router.route("/createuser").post(function(req, res) {
  
  console.log("reques",req)
  user.create(req.body, (err, data) => {
  if(err) return console.log(err);
  res.send(('saved to db: ' + data));
})
});

router.route("/login").get(function(req, res) {
  var email=req.body.email;
  var password=req.body.password;
  console.log("reques",req,email,password)
  user.find({Email:email,Password:password}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});




//Flights
router.route("/flight").post(function(req, res) {
      flightsearch.create(req.body, (err, data) => {
      if(err) return console.log(err);
      res.send(('saved to db: ' + data));
  })
});



// Markup

router.route("/addmarkup").post(function(req, res) {
  markup.create(req.body, (err, data) => {
  if(err) return console.log(err);
  res.send(('saved to db: ' + data));
})
});

router.route("/getmarkup").get(function(req, res) {
  markup.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});



router.route("/deletemarkup").get(function(req, res) {
  markup.deleteOne(req.body, (err, data) => {
  if(err) return console.log(err);
  res.send(('Deleted From db: ' + data));
})
});


router.route("/editmarkup/:id").post(function(req, res) {
  var id = (req.params.id);
  markup.update (
    { _id :id},
    { $set : req.body},
    function( err, result ) {
        if ( err ) throw err;
        else{
          res.send(result);
        }
    }
   )
});

router.route("/getmarkupbyid/:id").get(function(req, res) {
  var id = (req.params.id);
  markup.find({_id:id}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


// Distributor

router.route("/adddistributor").post(function(req, res) {
  distributor.create(req.body, (err, data) => {
  if(err) return console.log(err);
  res.send(('saved to db: ' + data));
})
});



router.route("/getdistributor").get(function(req, res) {
  distributor.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


router.route("/getdistributorbyid/:id").get(function(req, res) {
  var id = (req.params.id);

  distributor.find({_id:id}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/adddistributorcommission/:id").put(function(req, res) {
  var id = (req.params.id);
  console.log(req.body)
  if(req.body.Commission)
  {
    distributor.update (
    { _id :id},
    { $set : {Commission:req.body.Commission}},
    function( err, result ) {
        if ( err ) throw err;
        else{
          res.send(result);
        }
    }
   )
  }
 else if(req.body.IsBlocked===false || req.body.IsBlocked===true  ){
    distributor.update (
      { _id :id},
      { $set : {IsBlocked:req.body.IsBlocked} },
      function( err, result ) {
          if ( err ) throw err;
          else{
            res.send(result);
          }
      }
  )

  }

});


router.route("/updatedistributorbalance/:id").put(function(req, res) {
  var id = (req.params.id);
  distributor.find({_id:id}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log(result,"res")
      distributor.updateOne(
        { _id :id},
        { $set : {OpeningValue:parseInt(result[0].OpeningValue)+parseInt(req.body.Balance)}},
        function( err, result ) {
            if ( err ) throw err;
            else{
              res.send(result);
            }
        }
       )
       
    }
  });
    
});



// transactions

router.route("/addtransaction").post(function(req, res) {
  transaction.create(req.body, (err, data) => {
  if(err) return console.log(err);
  res.send(('saved to db: ' + data));
})
});


router.route("/gettransaction").get(function(req, res) {
  transaction.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


router.route("/gettransactionbycompany").post(function(req, res) {
  var company=req.body.company
  transaction.find({CompanyName:company}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
