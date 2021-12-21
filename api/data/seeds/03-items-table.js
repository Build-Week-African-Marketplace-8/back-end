exports.seed = function(knex) {
  return knex('items')
    // .truncate()
    .then(function () {
      return knex('items').insert([
        {name: 'Green Peas', description: 'Green beans are the unripe, young fruit of various cultivars of the common bean.', image: 'https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', price: 4.50},
        {name: 'Pineapple', description: 'The pineapple is a tropical plant with an edible fruit and is the most economically significant plant in the family Bromeliaceae.', image: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80', price: 5.00},
        {name: 'Banana', description: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80', price: 2.65},
        {name: 'Mangoes', description: 'A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India.', image: 'https://images.unsplash.com/photo-1605027990121-cbae9e0642df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', price: 6.45},
        {name: 'Ginger', description: 'Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.', image: 'https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', price: 3.75}
      ]);
    });
};