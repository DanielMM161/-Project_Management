const Comments = require("../models/comment.model.ts")

module.exports.findAllComments = (req, res) => {
    Comments.find()
        .then(allComments => res.json({ comments: allComments }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findSingleComment = (req, res) => {
    Comments.findOne({ _id: req.params.id })
        .then(singleComment => res.json({ comment: singleComment }))
        .catch(err => res.status(400).json(err))
}

module.exports.createNewComment = (req, res) => {
    Comments.create(req.body)
        .then(newComment => res.json({ comment: newComment }))
        .catch(err => res.status(400).json(err))
}

module.exports.updateComment = (req, res) => {
    Comments.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedComment => res.json({ comment: updatedComment }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteComment = (req, res) => {
    Comments.deleteOne({ _id: req.params.id })
        .then(deletedComment => res.json({ comment: deletedComment }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}