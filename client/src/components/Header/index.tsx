import { MdAddToPhotos } from "react-icons/md";

import styles from './styles.module.css'
import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>
                    Vivid Theory Blogs
                </h1>

                <div className={styles.iconContainer} aria-label="Create New Blog">
                    <Link to="/create">
                        <MdAddToPhotos className={styles.icon} size={50} />
                    </Link>
                </div>
            </div>

            <Outlet />
        </>


    );
};
export default Header;