var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var playerSchema = new Schema({
   name:{
       type:String
   }, 
   fatherName:{
       type:String
   },
   dateOfBirth:{
       type:String
   },
   preTeam:{
       type:String
   },
   address:{
       type:String
   },
   mobileNo:{
       type:Number
   },
   email:
   {
       type:String
   },
   user:{
     type:String 
   },
   team:{
     type:String
   },
   date:{
       type:Date,
       default:Date.now()
   }
});


module.exports = mongoose.model("player",playerSchema);