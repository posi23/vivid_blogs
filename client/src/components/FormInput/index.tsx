import { FormInputProps } from "../../utils/types";
import styles from './styles.module.css';

const FormInput = ({ type = "text", placeholder, value, setValue, textArea = false, setFile }: FormInputProps) => {
    return (
        <div className={styles.container}>
            <label htmlFor={placeholder.toLowerCase()} className={styles.label}>{placeholder}: </label>
            {
                textArea ?
                    <textarea
                        id={placeholder.toLowerCase()}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => setValue && setValue(e.target.value)}
                        className={styles.textarea}
                    />
                    :
                    type === "file" ?
                        <input
                            type="file"
                            accept="image/jpeg, image/png"
                            onChange={(e) => setFile && setFile(e.target.files && e.target.files[0])}
                        />
                        :
                        <input
                            type="text"
                            id={placeholder.toLowerCase()}
                            placeholder={placeholder}
                            value={value}
                            onChange={(e) => setValue && setValue(e.target.value)}
                            className={styles.input}
                        />
            }
        </div>
    );
}

export default FormInput;