import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AddProduct />,
  },
]);
