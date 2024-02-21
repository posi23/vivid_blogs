import styles from './styles.module.css'

const LoadingBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}>
            </div>
        </div>

    );
};

export default LoadingBar;