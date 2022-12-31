const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {ObjectId}=Schema;

const commentSchema=new Schema({
    memoryId:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    commen:{
        type:String,
        required:true
    }, 

},{timestamps:true});

module.exports=mongoose.model("Comment",commentSchema)