import axios from "axios";
import { useEffect, useState } from "react";
import { Blog, SingleBlogParams } from "../utils/types";

const useSingleBlog = (slug: string | undefined) => {
    const [blog, setBlog] = useState<Blog>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/${slug}`);
                setBlog(res.data);
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            } catch (err: any) {
                console.log(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    return { blog, loading };
}

export default useSingleBlog;
