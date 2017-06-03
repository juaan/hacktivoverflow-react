let monggo = require('mongoose'),
    Schema = monggo.Schema;

let commentSchema = new Schema({
  post: {type: String, required:true},
  createdAt: {type: Date, default: Date.now},
  user: {type:Schema.Types.ObjectId, ref:"User"},
  question: {type:Schema.Types.ObjectId, ref:"Question"},
  answer: {type:Schema.Types.ObjectId, ref:"Question"},
  upVotes: [{type:Schema.Types.ObjectId, ref:'User'}],
  downVotes: [{type:Schema.Types.ObjectId, ref:'User'}]
})

// let Comment = monggo.model('Comment',commentSchema)

module.exports = commentSchema;