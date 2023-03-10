const Comment=require('../models/comment')
const mongoose=require('mongoose')

exports.addComment=async (req,res)=>{
    try{
        const newComment=await Comment.create({...req.body})
            res.status(200).json(newComment)
        }catch{    
            res.status(400).senjsond({err:"Unable to add comment"})
    }
}

exports.readComment=async(req,res)=>{
    let storyidToSearch = mongoose.Types.ObjectId(req.params.storyId)
    const comments=await Comment.aggregate([
        {$match:{storyId:storyidToSearch}},
        {$lookup:{
            from:'users',
            localField:'userId',
            foreignField:'_id',
            as:'User'
        }},
        {$unwind:'$User'
        },
        {
            $addFields:{
                'userId':'$User._id',
                'userName':'$User.name',
                'userPic':'$User.pic'
            }
        },
        {
            $project:{
                _id:1,
                comment:1,
                createdAt:1,
                userId:1,
                userName:1,
                userPic:1
            }
        }
    ])
    res.status(200).json(comments)
}