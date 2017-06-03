let monggo = require('mongoose'),
    answerSch = require('./answer.js')
    Schema = monggo.Schema;

let questionSchema = new Schema ({
  title: {type: String, required: true},
  content: {type: String, required: true},
  user: {type:Schema.Types.ObjectId, ref:'User'},
  upVotes: [{type:Schema.Types.ObjectId, ref:'User'}],
  downVotes: [{type:Schema.Types.ObjectId, ref:'User'}],
  answers: [answerSch],
  createdAt: {type: Date, default: Date.now}
})

let Question = monggo.model('Question', questionSchema)

module.exports = Question;