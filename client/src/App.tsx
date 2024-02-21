import { CreateBlog, DeleteBlog, ErrorPage, Home, SingleBlog } from './pages';
import { Header } from './components';
import './App.css';

import { createBrowserRouter, RouterProvider, BrowserRouter, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useAllBlogs } from './hooks';



function App() {

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState("");

  const { blogs, totalPages, loading, suggestions } = useAllBlogs(page, search, searchSuggestion);

  const startIndex = Math.floor(Math.random() * (blogs.length - 5 + 1));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "",
          element: <Home page={
            page
          }
            setPage={
              setPage
            }
            search={
              search
            }
            setSearch={
              setSearch
            }
            searchSuggestion={
              searchSuggestion
            }
            setSearchSuggestion={
              setSearchSuggestion
            }
            blogs={
              blogs
            }
            totalPages={
              totalPages
            }
            loading={
              loading
            }
            suggestions={
              suggestions

            } />,
          // errorElement: {errorBoundary(ErrorPage),
        },

        {
          path: ":slug",
          element: <
            SingleBlog
            relatedBlogs={blogs && blogs.slice(startIndex, startIndex + 4)}
          />,
        },

        {
          path: "create",
          element: <CreateBlog />,
          // errorElement: <ErrorPage/>,
        },

        {
          path: "delete/:slug",
          element: <DeleteBlog />,
        },

        {
          path: "*",
          element: <ErrorPage error={'404. Page Not Found'} />,
        },
      ]
    },

  ]);

  return (
    <div className='main'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
