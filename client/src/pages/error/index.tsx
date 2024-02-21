import { useParams } from 'react-router-dom';
import styles from './styles.module.css';

const ErrorPage = (error: any) => {
    return (
        <div className={styles.container}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className={styles.errMessage}>
                <i>{error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;