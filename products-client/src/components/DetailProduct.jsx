import { useLoaderData } from "react-router-dom";

const DetailProduct = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className="p-14">
      <h1 className="text-5xl font-extrabold">{product.name}</h1>
      <img className="w-1/3 my-5" src={product.photo} alt="" />
      <p>{product.description}</p>
      <span className="badge badge-warning">{product.manufacturer}</span>
    </div>
  );
};

export default DetailProduct;
