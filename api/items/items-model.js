const db = require('../data/db-config');

async function find(){
    const rows = await db('items as i')
        .select('i.name', 'i.description', 'i.image', 'i.price')
    return rows
}

async function findById(id){
    const row = await db('items as i')
        .select('i.name', 'i.description', 'i.image', 'i.price')
        .where('i.item_id', id)
        .first()
    return row
}

async function insert (item) {
    const [id] = await db('items')
        .insert(item)
    return findById(id)
}

module.exports = {
    find, insert
}