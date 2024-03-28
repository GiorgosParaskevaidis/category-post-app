const { PostEntity } = require('../model/Post');

const postEntity = require('../model/Post').PostEntity;
const dataSource = require('../connect').dataSource;

async function create(data) {
    const result = await dataSource
        .getRepository(postEntity)
        .save(data)
        .then(() => console.log("Post has been saved"))
        .catch((error) => console.log("Problem in saving", error))

    return result;
}

async function findAll() {
    const result = await dataSource
        .getRepository(postEntity)
        .createQueryBuilder("post")
        .leftJoinAndSelect("post.categories", "category")
        .getMany()

    return result;
}

async function findOne(id) {
    const results = await dataSource
        .getRepository(postEntity)
        .createQueryBuilder("post")
        .leftJoinAndSelect("post.categories", "category")
        .where("post.id = :id", {id: id})
        .getOne()
    
    return results
}

module.exports = { create, findAll }