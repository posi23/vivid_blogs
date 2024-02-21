import { useState, useEffect } from "react";
import axios from 'axios';
import { CreateBlogProps } from "../utils/types";

const useCreateBlog = (body?: FormData) => {
    const [response, setResponse] = useState('');

    useEffect(() => {
        const fetchData = async () => {

            try {
                if (body === undefined) return;

                const res = await axios.post(`http://localhost:${SERVER_PORT}/create`, body);
                setResponse(res.data);
            }
            catch (err: any) {
                setResponse(`Could not successfully create blog due to ${err.message}`);
            }
        }
        fetchData();
    }, [body]);

    const resetResponse = () => {
        setResponse('');
    }

    return { response, resetResponse };
}

export default useCreateBlog;