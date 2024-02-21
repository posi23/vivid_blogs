export type Blog = {
    title: string;
    slug: string;
    content: string;
    image: string;
    published_at: Date;
}

export type SingleBlogParams = {
    slug?: string;
}

export type PaginationProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
}


export type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    title?: string;
};

export type SearchBarProps = {
    searchSuggestion: string;
    setSearchSuggestion: React.Dispatch<React.SetStateAction<string>>;
    suggestions: Suggestion[];
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

export type Suggestion = {
    title: string;
}

export type FormInputProps = {
    type?: string;
    placeholder: string;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    setFile?: React.Dispatch<React.SetStateAction<File | null>>;
    textArea?: boolean
};

export type CreateBlogProps = {
    title: string;
    slug: string;
    content: string;
    image: FormData;
};


export type HomeProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    searchSuggestion: string;
    setSearchSuggestion: React.Dispatch<React.SetStateAction<string>>;
    blogs: Blog[];
    totalPages: number;
    loading: boolean;
    suggestions: Suggestion[];
};