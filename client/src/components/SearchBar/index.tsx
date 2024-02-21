import styles from './styles.module.css';
import { SearchBarProps } from '../../utils/types';
import Button from '../Button';
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ searchSuggestion, setSearchSuggestion, suggestions, setSearch, setPage }: SearchBarProps) => {

    const handleSubmit = (suggestion?: string) => {
        setSearch(suggestion ? suggestion : searchSuggestion);
        setSearchSuggestion("");
        setPage(1);
    }

    return (
        <div className={styles.container}>
            <Button
                onClick={() => handleSubmit()}
                disabled={searchSuggestion === ""}
                className={styles.button}
            >
                <FaSearch />
            </Button>

            <div className={styles.inputBox}>
                <input
                    type="text"
                    placeholder="Search.."
                    value={searchSuggestion}
                    onChange={(e) => setSearchSuggestion(e.target.value)}
                    className={styles.searchbar}
                />
                {suggestions.length > 0 && <div className={styles.suggestions}>
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className={styles.suggestion}
                            onClick={() => handleSubmit(suggestion.title)}
                        >
                            {suggestion.title}
                        </div>
                    ))}
                </div>}
            </div>
        </div>

    );
}

export default SearchBar;