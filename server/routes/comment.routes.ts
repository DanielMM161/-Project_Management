const CommentController = require("../controllers/comment.controller.ts")

module.exports = app => {
    app.get("/api/comment", CommentController.findAllComments)
    app.get("/api/comment/:id", CommentController.findSingleComment)
    app.post("/api/comment/new", CommentController.createNewComment)
    app.put("/api/comment/update/:id", CommentController.updateComment)
    app.delete("/api/comment/delete/:id", CommentController.deleteComment)
};