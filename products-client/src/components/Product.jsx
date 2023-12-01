const Product = ({ product }) => {
  const { _id, photo, name, description, price, category, manufacturer } =
    product;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
          <button className="btn btn-primary">View</button>
          <button className="btn btn-success">Edit</button>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
