import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  const onDelete = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };
  return (
    <div className="p-14">
      <h1 className="text-5xl font-extrabold">
        All Products - {products.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {products.map((product) => (
          <Product key={product._id} product={product} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default Products;
