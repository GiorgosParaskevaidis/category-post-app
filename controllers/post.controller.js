const postService = require('../services/post.services');

exports.findAll = async(req, res) => {
    console.log("Find all posts");

    try {
        const result = await postService.findAll();
        res.status(200).json({data: result});
        console.log("Success in reading post");
    } catch (err) {
        res.status(404).json({data: err});
        console.log("Problem in reading post");
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id
    console.log("Find a Post");

    try {
        const result = await postService.findOne(id);
        res.status(200).json({data: result});
        console.log("Success in reading post")
    } catch(error){
        res.status(404).json({data: error});
        console.log("Problem in reading post", error)
    }
}

exports.create = async(req, res) => {
    const data = req.body
    console.log("Insert new post");

    try {
        const result = await postService.create(data);
        res.status(200).json({data: result});
        console.log("Success in creating post");
    } catch (err) {
        res.status(404).json({data: err});
        console.log("Problem in creating post");
    }
}