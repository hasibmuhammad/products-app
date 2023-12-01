import { Link } from "react-router-dom";

const Product = ({ product, onDelete }) => {
  const { _id, photo, name, description, price, category, manufacturer } =
    product;

  console.log(_id);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          onDelete(id);
        }
      });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={photo} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <Link to={`/products/${_id}`}>
            <button className="btn btn-primary">View</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-success">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
