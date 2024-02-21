import { ButtonProps } from "../../utils/types";
import styles from './styles.module.css';

const Button = ({ children, onClick, disabled = false, className, title = '' }: ButtonProps) => {
    return (
        <button
            className={`${styles.main} ${className}`}
            onClick={onClick}
            type="button"
            disabled={disabled}
            title={title}
        >
            {children}
        </button>
    );
}

export default Button;
