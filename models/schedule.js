var mongoose = require("mongoose");

var scheduleSchema = new mongoose.Schema({
   Teamname:{
       type:String
   },
   scheduleDate:{
       type:Date
   },
   time:{
       type:String
   },
   user:{
       type:String
   },
   date:{
       type:Date,
       default:Date.now()
   }
});

module.exports = mongoose.model("schedule",scheduleSchema);