import BlogList from "../../components/BlogList";
import { useState } from "react";
import { useAllBlogs } from "../../hooks";
import { Button, LoadingBar, PaginationBar, SearchBar } from "../../components";
import styles from './styles.module.css';
import { IoCloseSharp } from "react-icons/io5";
import { HomeProps } from "../../utils/types";


const Home = ({ page, setPage, search, setSearch, searchSuggestion, setSearchSuggestion, blogs, totalPages, loading, suggestions }: HomeProps) => {
    // const [page, setPage] = useState(1);
    // const [search, setSearch] = useState("");
    // const [searchSuggestion, setSearchSuggestion] = useState("");

    // const { blogs, totalPages, loading, suggestions } = useAllBlogs(page, search, searchSuggestion);

    return loading ? <LoadingBar /> :
        <>
            <div className={styles.top}>
                {blogs.length > 0 && <PaginationBar
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />}
                <SearchBar
                    searchSuggestion={searchSuggestion}
                    setSearchSuggestion={setSearchSuggestion}
                    suggestions={suggestions}
                    setSearch={setSearch}
                    setPage={setPage}
                />
            </div>

            {
                search !== "" &&
                <div className={styles.searchHeader}>
                    <h2
                        style={{ textAlign: "center", color: "var(--font-color)" }}
                    >
                        Search results for "{search}"
                    </h2>

                    <div className={styles.button}>
                        <Button
                            onClick={() => setSearch("")}
                            title="Clear Search"
                        >
                            <IoCloseSharp size={20} />
                        </Button>
                    </div>
                </div>
            }

            {
                blogs.length > 0 ?
                    <BlogList
                        blogs={blogs}
                    /> :
                    <>
                        <h2
                            style={{ textAlign: "center", color: "var(--font-color)" }}
                        >
                            No search results found for "{search}"
                        </h2>

                        <div className={styles.button}>
                            <Button
                                onClick={() => setSearch("")}

                            >
                                Go Back Home
                            </Button>
                        </div>


                    </>

            }
            {blogs.length > 0 && <PaginationBar
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />}
        </>
        ;
};
export default Home;
