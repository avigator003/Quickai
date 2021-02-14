var mongo = require("mongoose");  

var db =   
mongo.connect("mongodb://localhost:27017/flights", { useNewUrlParser: true, useUnifiedTopology: true },function(err, response){  
   if(err){ console.log('Failed to connect to ' + db); }  
   else{ console.log('Connected to akshat ' + db, ' + ', response); }  
});  


module.exports =db;  