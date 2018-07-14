var mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
   
   name:{
       type:String
   },
   image:{
       type:String
   },
   user:{
       type:String
   }
    
});

module.exports = mongoose.model("team",teamSchema);