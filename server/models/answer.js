let monggo = require('mongoose'),
    Schema = monggo.Schema;

let answerSchema = new Schema({
  post: {type: String, required:true},
  createdAt: {type: Date, default: Date.now},
  user: {type:Schema.Types.ObjectId, ref:"User"},
  comments: [{type:Schema.Types.ObjectId, ref:"Comment"}],
  upVotes: [{type:Schema.Types.ObjectId, ref:'User'}],
  downVotes: [{type:Schema.Types.ObjectId, ref:'User'}]
})

// let Answer = monggo.model('Answer',answerSchema)

module.exports = answerSchema;