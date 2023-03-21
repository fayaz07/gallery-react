import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AlbumsList from "../albums/list/AlbumsList";
import AlbumDetailPage from "../albums/detail/AlbumDetailPage";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AlbumsList />,
  },
  {
    path: "/album/:id",
    element: <AlbumDetailPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
