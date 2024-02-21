import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Blog } from '../../utils/types';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const BlogList: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);

    // const startIndex = Math.floor(Math.random() * (blogs.length - 5 + 1));

    const handleSingleBlogClick = (slug: string) => {
        navigate(`/${slug}`,
            { state: { relatedBlogs: blogs.slice(startIndex, startIndex + 4) } });

    }

    useEffect(() => {
        if (blogs.length > 0) {
            setStartIndex(Math.floor(Math.random() * (blogs.length - 5 + 1)));
        }
    }
        , [blogs]);

    return (
        <div className={styles.container}>
            {blogs.map(blog => (
                <div className={styles.subContainer}>
                    <div onClick={() => handleSingleBlogClick(blog.slug)} key={blog.slug} className={styles.blog}>
                        <img src={blog.image} alt={blog.title} />
                        <div>
                            <h2 className={styles.title}>{blog.title}</h2>
                            <p className={styles.date}>
                                {new Date(blog.published_at).toDateString()} {"at "}
                                {new Date(blog?.published_at).toLocaleTimeString(new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).resolvedOptions().locale, { hour12: true })}
                            </p>
                        </div>
                    </div>
                    <Link to={`/delete/${blog.slug}`} className={styles.deleteButton}>
                        <FaTrashAlt size={30} />
                    </Link>
                </div>

            ))}
        </div >
    );
};

export default BlogList;