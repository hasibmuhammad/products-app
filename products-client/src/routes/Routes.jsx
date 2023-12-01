import { createBrowserRouter } from "react-router-dom";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AddProduct />,
  },
  {
    path: "/products",
    element: <Products />,
    loader: () => fetch(`http://localhost:5000/products`),
  },
]);
