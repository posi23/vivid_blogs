'use strict';
import { Model, DataTypes } from 'sequelize';
import { BlogAttributes } from '../utils';
import { default as sequelize } from '../config/db';


class Blog extends Model<BlogAttributes> implements BlogAttributes {
  title!: string;
  slug!: string;
  content!: string;
  image!: string;
  published_at: Date;
  deleted_at: Date;
  created_at: Date;
  updated_at: Date;
}
Blog.init({

  title: DataTypes.STRING,
  slug: DataTypes.STRING,
  content: DataTypes.STRING,
  image: DataTypes.STRING,
  published_at: DataTypes.DATE,
  deleted_at: DataTypes.DATE,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE
}, {
  sequelize,
  modelName: 'blogs',
  timestamps: true,
  createdAt: 'created_at', // Custom column name for created_at
  updatedAt: 'updated_at', // Custom column name for updated_at
  // underscored: true
});

export default Blog;
