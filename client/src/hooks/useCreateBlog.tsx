import { useState, useEffect } from "react";
import axios from 'axios';
import { Blog, CreateBlogProps } from "../utils/types";

const useCreateBlog = (body?: FormData) => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const fetchData = async () => {

            try {
                if (body === undefined) return;

                const res = await axios.post(`http://localhost:${process.env.SERVER_PORT || 8080}/create`, body);
                setResponse(res.data);
            }
            catch (err: any) {
                setResponse(`Could not successfully create blog due to ${err.message}`);
            }
        }
        fetchData();
    }, [body]);

    const resetResponse = () => {
        setResponse("");
    }

    return { response, resetResponse };
}

export default useCreateBlog;