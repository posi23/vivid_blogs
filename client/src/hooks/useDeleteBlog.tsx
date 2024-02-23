import axios from "axios";
import { useEffect, useState } from "react";

const useDeleteBlog = (slug?: string) => {

    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!slug) return;

                await axios.delete(`http://localhost:${process.env.REACT_APP_API_SERVER_PORT || 8080}/delete/${slug}`);
                setLoading(false);
                setResponse('Blog deleted successfully');
            }
            catch (err: any) {
                setLoading(false);
                setResponse(`Could not successfully delete blog due to ${err.message}`);
            }
        }
        fetchData();
    }, [slug]);

    const resetResponse = () => {
        setResponse('');
    }

    return { response, resetResponse, loading };
}

export default useDeleteBlog;