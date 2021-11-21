'use strict';

let now = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [{
      title: 'My first post',
      content: 'Content of my first post',
      author: 'Adminstrator',
      createdAt: now,
      updatedAt: now
    }, {
      title: 'My second post',
      content: 'Content of my second post',
      author: 'Someone else',
      createdAt: now,
      updatedAt: now
    },{
      title: 'My first post',
      content: 'This is definitely working!',
      author: 'Another tester',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
