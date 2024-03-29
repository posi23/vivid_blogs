import { useEffect, useState } from "react";
import axios from "axios";

import { Blog, Suggestion } from "../utils/types";

const useAllBlogs = (page: number, search?: string, searchSuggestion?: string) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:${process.env.REACT_APP_API_SERVER_PORT || 8080}/?page=${page}&search=${search}&searchSuggestion=${searchSuggestion}`);

                if (searchSuggestion !== "") {
                    setSuggestions(res.data);
                }
                else {
                    setBlogs(res.data.blogs);
                    setTotalPages(res.data.numberOfPages);
                    setSuggestions([]);
                }
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            } catch (err: any) {
                console.log(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [page, search, searchSuggestion]);

    return { blogs, setBlogs, totalPages, setTotalPages, suggestions, loading };
};

export default useAllBlogs;