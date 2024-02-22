import { CreateBlog, DeleteBlog, ErrorPage, Home, SingleBlog } from './pages';
import { Header } from './components';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "",
          element: <Home />,
        },

        {
          path: ":slug",
          element: <SingleBlog />,
        },

        {
          path: "create",
          element: <CreateBlog />,
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
