'use strict';

/** @type {import('sequelize-cli').Migration} */
// const generateSlug = require('../utils/index.ts')

// import generateSlug from '../utils/index.ts';

const generateSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs',
      [
        {
          title: 'First Blog',
          slug: generateSlug('First Blog'),
          content: 'This is the first blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Second Blog',
          slug: generateSlug('Second Blog'),
          content: 'This is the second blog content',
          image: 'https://images.pexels.com/photos/17698590/pexels-photo-17698590/free-photo-of-woman-in-dress-holding-big-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()
        },
        {
          title: 'Third Blog',
          slug: generateSlug('Third Blog'),
          content: 'This is the third blog content',
          image: 'https://images.pexels.com/photos/20149458/pexels-photo-20149458/free-photo-of-segun-odegbami.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()
        },
        {
          title: 'Fourth Blog',
          slug: generateSlug('Fourth Blog'),
          content: 'This is the fourth blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Fifth Blog',
          slug: generateSlug('Fifth Blog'),
          content: 'This is the fifth blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Sixth Blog',
          slug: generateSlug('Sixth Blog'),
          content: 'This is the sixth blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Seventh Blog',
          slug: generateSlug('Seventh Blog'),
          content: 'This is the seventh blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Eighth Blog',
          slug: generateSlug('Eighth Blog'),
          content: 'This is the eighth blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Ninth Blog',
          slug: generateSlug('Ninth Blog'),
          content: 'This is the ninth blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Tenth Blog',
          slug: generateSlug('Tenth Blog'),
          content: 'This is the tenth blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Eleventh Blog',
          slug: generateSlug('Eleventh Blog'),
          content: 'This is the eleventh blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Twelfth Blog',
          slug: generateSlug('Twelfth Blog'),
          content: 'This is the twelfth blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
        {
          title: 'Thirteenth Blog',
          slug: generateSlug('Thirteenth Blog'),
          content: 'This is the thirteenth blog content',
          image: 'https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()

        },
      ],
      {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs', null, {});
  }
};
