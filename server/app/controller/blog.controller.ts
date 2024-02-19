import { Request, Response } from "express";
import Blog from "../models/blog.model";
import { Op } from "sequelize";
import sequelize from "sequelize";

const homePage = async (req: Request, res: Response) => {
  if (!req.query.page && Object.keys(req.query).length === 0) {
    res.redirect("/?page=1")
    return;
  }

  let { page, search } = (req.query);

  try {

    let count = await Blog.count({
      where: {
        published_at: {
          [Op.ne]: null
        }
      }
    });
    let numberOfPages = Math.ceil(count / 6);

    if (Number(page) > numberOfPages) {
      res.redirect(`/?page=${numberOfPages}`);
      return;
    }

    const result = await Blog.findAll({
      order: [["published_at", "DESC"]],
      limit: 6,
      offset: (Number(page) - 1) * 6,
      attributes: ["title", "slug", "content", "image", "published_at"],
      where: {
        [Op.and]: [
          {
            published_at: {
              [Op.ne]: null
            }
          },
          sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), {
            [Op.like]: `%${search !== undefined ? search : ''}%`
          })
        ]
      },
    });

    if (result.length === 0) {
      res.status(404).send("No blogs found");
      return;
    }

    res.status(200).send({ blogs: result, numberOfPages });
  } catch (err) {
    console.log(err);
  }
};

const search = async (req: Request, res: Response) => {
  const { search } = req.body;

  try {
    const result = await Blog.findAll({
      attributes: ["title"],
      limit: 5,
      where:
        sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), {
          [Op.like]: `%${search !== undefined ? search : ''}%`
        })
    });

    res.status(200).send(result);
  }
  catch (err) {
    console.log(err);
  }
}

const singleBlog = async (req: Request, res: Response) => {
  let { slug } = req.params;

  try {

    const result = await Blog.findOne({
      attributes: ["title", "slug", "content", "image", "published_at"],
      where: {
        slug: slug
      }
    });

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
}

const createBlog = async (req: Request, res: Response) => {
  const { title, slug, content, image } = req.body;

  try {
    const existingBlog = await Blog.findOne({
      attributes: ["title"],
      where:
        sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), {
          [Op.like]: title.toLowerCase()
        })
    });

    if (existingBlog) {
      res.status(409).send(`Blog with title '${title}' already exists`);
      return;
    }

    await Blog.create({
      title: title,
      slug: slug,
      content: content,
      image: image,
      published_at: new Date()
    });

    res.status(201).send(`New blog '${title}' successfully created`);
  }
  catch (err) {
    console.log(err);
  }
}

const deleteBlog = async (req: Request, res: Response) => {
  const { slug } = req.params;

  try {
    await Blog.destroy({
      where: {
        slug: slug
      }
    });

    res.status(200).send("Blog successfully deleted");
  }
  catch (err) {
    console.log(err);
  }
}

export default {
  homePage,
  search,
  singleBlog,
  createBlog,
  deleteBlog
};
