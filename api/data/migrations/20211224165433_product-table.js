exports.up = async (knex) => {
    await knex.schema
      .createTable('items', (items) => {
        items.increments('item_id')
        items.string('name', 200).notNullable()
        items.string('description', 450)
        items.binary('image')
        items.float('price').notNullable()
      })
  }
  
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('items')
}