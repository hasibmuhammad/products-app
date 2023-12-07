import { createBrowserRouter } from "react-router-dom";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
import DetailProduct from "../components/DetailProduct";
import Update from "../components/Update";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Users from "../components/Users";
import Root from "../layouts/Root";
import Todo from "../components/Todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <AddProduct />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () =>
          fetch(`https://products-backend-iota.vercel.app/products`),
      },
      {
        path: "/products/:id",
        element: <DetailProduct />,
        loader: ({ params }) =>
          fetch(
            `https://products-backend-iota.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(
            `https://products-backend-iota.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://products-backend-iota.vercel.app/users"),
      },
      {
        path: "/todos",
        element: <Todo />,
      },
    ],
  },
]);
