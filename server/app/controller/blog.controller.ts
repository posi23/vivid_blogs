import { Request, Response } from "express";
import Blog from "../models/blog.model";
import { Op } from "sequelize";
import sequelize from "sequelize";

const homePage = async (req: Request, res: Response, next: Function) => {
  let { page, search, searchSuggestion } = (req.query);

  try {

    if (searchSuggestion !== "") {
      const result = await suggestSearch(String(searchSuggestion));
      res.status(200).send(result);
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
          {
            deleted_at: null
          },
          sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), {
            [Op.like]: `%${String(search).toLowerCase()}%`

          })
        ]
      },
    });

    const totalPages = await numberOfPages(String(search))

    res.status(200).send({ blogs: result, numberOfPages: totalPages });
  } catch (err) {
    console.log(err);
  }
};

const suggestSearch = async (searchSuggestion: string) => {

  try {
    const result = await Blog.findAll({
      attributes: ['title'],
      limit: 5,
      where: {
        [Op.and]: [
          {
            published_at: {
              [Op.ne]: null
            }
          },
          {
            deleted_at: null
          },
          sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), {
            [Op.like]: `%${String(searchSuggestion).toLowerCase()}%`
          })
        ]
      }
    });
    return result;
  }
  catch (err) {
    console.log(err);
  }
}

const numberOfPages = async (search: string) => {
  try {
    const result = await Blog.count({
      where: {
        [Op.and]: [
          {
            published_at: {
              [Op.ne]: null
            }
          },
          {
            deleted_at: null
          },
          sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), {
            [Op.like]: `%${String(search).toLowerCase()}%`
          })
        ]
      },
    });

    return Math.ceil(result / 6);
  } catch (err) {
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
  const { title, slug, content } = req.body.body;
  console.log(req.body.body)

  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const fileData: string = req.file.buffer.toString('utf8');

    const existingBlog = await Blog.findOne({
      attributes: ["title"],
      where: {
        [Op.and]: [
          {
            published_at: {
              [Op.ne]: null
            }
          },
          {
            deleted_at: null
          },
          sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), {
            [Op.like]: `%${String(title).toLowerCase()}%`
          })
        ]
      }
    });

    if (existingBlog) {
      res.status(409).send(`Blog with title '${title}' already exists`);
      return;
    }

    await Blog.create({
      title: title,
      slug: slug,
      content: content,
      image: "work permit",
      published_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
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
    await Blog.update(
      {
        deleted_at: new Date()
      },
      {
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
  singleBlog,
  createBlog,
  deleteBlog
};
