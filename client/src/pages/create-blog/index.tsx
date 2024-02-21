import { Link, useNavigate } from 'react-router-dom';
import { Button, FormInput } from '../../components';
import { useCreateBlog } from '../../hooks';
import { CreateBlogProps } from '../../utils/types';
import styles from './styles.module.css';
import { useEffect, useMemo, useState } from 'react';

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [body, setBody] = useState<FormData>();

    const navigate = useNavigate();

    const slugify = (str: string) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }

    const handleSubmit = () => {
        if (image !== null) {
            const slug = slugify(title);
            const formData = new FormData();
            formData.append('image', image);
            formData.append('body', JSON.stringify({ title, slug, content }));
            // const file = formData.get('image') as File;
            // const filename = file && file.name;


            setBody(formData);
            setTitle('');
            setContent('');
            setImage(null);
        }
    }

    const { response, resetResponse } = useCreateBlog(body);

    useEffect(() => {
        if (response !== '') {
            alert(response);
            resetResponse();
            navigate('/');
        }
    }
        , [response]);

    return (
        <div className={styles.container}>
            <h1>Create A Blog</h1>

            <FormInput placeholder="Title" value={title} setValue={setTitle} textArea={false} />
            <FormInput placeholder="Content" value={content} setValue={setContent} textArea={true} />
            <FormInput type="file" placeholder="Image" setFile={setImage} textArea={false} />


            <div className={styles.buttonContainer}>
                <Button
                    title="Create"
                    onClick={() => { handleSubmit() }} disabled={image === null || title === '' || content === ''}
                    className={styles.button}
                >
                    Create Blog
                </Button>

                <Button
                    title="Go Home"
                    onClick={() => { }}
                    className={styles.button2}
                >
                    <Link to='/'>
                        Cancel & Go Home
                    </Link>
                </Button>
            </div>

        </div>
    )
}

export default CreateBlog;