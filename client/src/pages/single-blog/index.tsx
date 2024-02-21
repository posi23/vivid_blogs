import { useParams, useNavigate } from 'react-router-dom';
import styles from './styles.module.css'
import { Blog, SingleBlogParams } from '../../utils/types';
import { useSingleBlog } from '../../hooks';
import { LoadingBar } from '../../components';

const SingleBlog = ({ relatedBlogs }: { relatedBlogs: Blog[] }) => {
    const param: SingleBlogParams = useParams<SingleBlogParams>();
    const { slug } = param;
    const { blog, loading } = useSingleBlog(slug);
    const navigate = useNavigate();

    return loading ? <LoadingBar /> :
        <div className={styles.container}>
            <h1>
                {blog?.title}
            </h1>
            <h4>
                {blog?.published_at && new Date(blog?.published_at).toDateString()} {"at "}
                {blog?.published_at && new Date(blog?.published_at).toLocaleTimeString(new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).resolvedOptions().locale, { hour12: true })}
            </h4>
            <div className={styles.coverImage}>
                <img src={blog?.image} alt={blog?.title} />
            </div>
            <div className={styles.content}>
                <p>{blog?.content}</p>
            </div>

            <h2>Related Blogs</h2>
            <div className={styles.relatedBlogs}>
                {relatedBlogs.map(blog => (
                    <div key={blog.slug} className={styles.relatedBlog}>
                        <img src={blog.image} alt={blog.title} />
                        <h3>{blog.title}</h3>
                    </div>
                ))}

            </div>
        </div>

        ;
};

export default SingleBlog;