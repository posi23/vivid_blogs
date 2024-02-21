import React, { useState } from 'react';
import styles from './styles.module.css';
import { Blog } from '../../utils/types';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const BlogList: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
    return (
        <div className={styles.container}>
            {blogs.map(blog => (
                <Link to={`/${blog.slug}`} key={blog.slug} className={styles.blog}>
                    <img src={blog.image} alt={blog.title} />
                    <div>
                        <h2 className={styles.title}>{blog.title}</h2>
                        <p className={styles.date}>
                            {new Date(blog.published_at).toDateString()} {"at "}
                            {new Date(blog?.published_at).toLocaleTimeString(new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).resolvedOptions().locale, { hour12: true })}
                        </p>
                    </div>
                    <Link to={`/delete/${blog.slug}`} className={styles.deleteButton}>
                        <FaTrashAlt size={30} />
                    </Link>

                </Link>
            ))}
        </div >
    );
};

export default BlogList;