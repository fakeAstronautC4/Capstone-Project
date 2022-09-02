const { request, response } = require("express");

module.exports = {
    upComment: (req, res) => {
        let {name, comment} = req.body
        let comments = []
        const commentObject = {name: name, comment: comment}
        comments.push({commentObject})
        console.log({commentObject})
        console.log(comments)
        res.status(200).send('Thank you, ' + commentObject.name)
    }
}