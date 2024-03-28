const categoryService = require('../services/category.services');

exports.findAll = async(req, res) => {
    console.log("Find All Categories");
    try {
        const result = await categoryService.findAll();
        res.status(200).json({data: result});
        console.log("Success in reading all categories")
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading all categories")
    }
}

exports.findOne = async(req, res) => {

    const id = req.params.id;

    console.log("Find All Category: ", id);
    try {
        const result = await categoryService.findOne(id);
        res.status(200).json({data: result});
        console.log("Success in reading Category")
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Problem in reading Category")
    }
}

exports.create = async(req, res) => {
    const name = req.body.name;
    console.log('Insert a category name: ', name);
    try {
        const result = await categoryService.create(name)
        res.status(200).json({data: result});
        console.log("Success in inserting a category")
    } catch (err) {
        res.status(404).json({data: err});
        console.log("Problem in inserting a category")
    }
}

exports.update = async(req, res) => {
    const id = req.params.id;
    console.log("Update category with id: ", id)

    try {
        const result = await categoryService.update(req.body)
        res.status(200).json({data: result});
        console.log("Success in updating a category")
    } catch (err) {
        res.status(404).json({data: err});
        console.log("Problem in updating a category")
    }
}

exports.delete = async(req, res) => {
    const id = req.params.id;
    console.log("Delete category with id: ", id)

    try {
        const result = await categoryService.deleteCategory(id)
        res.status(200).json({data: result});
        console.log("Success in deleting a category")
    } catch (err) {
        res.status(404).json({data: err});
        console.log("Problem in deleting a category")
    }
}