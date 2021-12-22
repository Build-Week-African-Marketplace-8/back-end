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

module.exports = {
    addUser,
    findBy
}
