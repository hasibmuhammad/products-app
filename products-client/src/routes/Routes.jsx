import { createBrowserRouter } from "react-router-dom";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
import DetailProduct from "../components/DetailProduct";
import Update from "../components/Update";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

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
  {
    path: "/products/:id",
    element: <DetailProduct />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/products/${params.id}`),
  },
  {
    path: "/update/:id",
    element: <Update />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/products/${params.id}`),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
