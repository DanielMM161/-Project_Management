const mongoose = require("mongoose")

const commentScheme = mongoose.Scheme(
    {
        description: String,

        writer_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },

        task_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'task'
        },


    },
    {
        timestamps: true
    })

const Comment = mongoose.model('Comment', commentScheme)

module.exports = Comment