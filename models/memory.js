var mongoose     = require("mongoose");

var memorySchema  = new mongoose.Schema({
    image:{
        type:String
    },
    title:{
        type:String    
    },
    description:{
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

module.exports = mongoose.model("memory",memorySchema);