import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDeleteBlog, useSingleBlog } from '../../hooks';
import { Button, LoadingBar } from '../../components';
import styles from './styles.module.css';

const DeleteBlog = () => {
    // const { slug } = useParams<{ slug: string }>();
    const [slug, setSlug] = useState<string>()
    const tempSlug = useParams<{ slug: string }>().slug;
    const navigate = useNavigate();

    const handleDelete = () => {
        setSlug(tempSlug);
    };

    const { blog, loading } = useSingleBlog(tempSlug);
    const { response, resetResponse, loading: loadingDelete } = useDeleteBlog(slug);

    useEffect(() => {

        if (!loadingDelete) {
            alert(response);
            resetResponse();
            navigate('/');
        }
    }, [response, loadingDelete]);


    if (loading) return <LoadingBar />;

    return (
        <div className={styles.container}>
            <div className={styles.deletePrompt}>
                <h1>Delete Blog</h1>
                <p>Are you sure you want to delete this blog?</p>
            </div>
            <h2><span>Title: </span> {blog?.title}</h2>
            <p><span>Date Published: </span>{blog?.published_at && new Date(blog?.published_at).toDateString()}</p>

            <div className={styles.buttonContainer}>
                <Button
                    onClick={() => handleDelete()}
                    className={styles.deleteButton}
                >
                    Delete
                </Button>

                <Button
                    onClick={() => navigate('/')}
                    className={styles.cancelButton}
                >
                    Cancel & Go Home
                </Button>
            </div>
        </div>
    );
}

export default DeleteBlog;