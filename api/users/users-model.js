const db = require('../data/db-config');

async function addUser({username, password}){
    let newUser = {username, password};
    const [userFromDb] = await db('users').insert(newUser, ['user_id', 'username']);
    return userFromDb
}

function findBy(filter){
    return db('users as u')
        .select('u.user_id', 'u.username', 'u.password')
        .where(filter)
        .first()
}

function update(id, updated){
    return db('users')
        .where('users.user__id', id)
        .update(updated, ['user_id', 'name', 'picture'])
}

module.exports = {
    addUser,
    findBy,
    update
}
