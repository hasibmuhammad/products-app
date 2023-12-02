const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const manufacturer = form.manufacturer.value;
    const price = form.price.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const product = { name, category, manufacturer, price, description, photo };

    fetch(`https://products-backend-iota.vercel.app/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product Added Successfully!");
        }
      });
  };
  return (
    <div className="p-14 bg-lime-50">
      <h1 className="text-5xl font-extrabold">Add a product</h1>
      <form onSubmit={handleAddProduct} className="my-10 space-y-5">
        <div className="md:flex gap-10">
          <div className="md:w-1/2">
            <label className="font-semibold">
              Product Name
              <input
                className="form-control border rounded p-2 w-full"
                type="text"
                name="name"
                placeholder="Enter Product Name"
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="font-semibold">
              Product Category
              <input
                className="form-control border rounded p-2 w-full"
                type="text"
                name="category"
                placeholder="Enter Product Category"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="md:w-1/2">
            <label className="font-semibold">
              Manufacturer
              <input
                className="form-control border rounded p-2 w-full"
                type="text"
                name="manufacturer"
                placeholder="Enter Manufacturer Name"
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="font-semibold">
              Price
              <input
                className="form-control border rounded p-2 w-full"
                type="text"
                name="price"
                placeholder="Enter Product Price"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="md:w-1/2">
            <label className="font-semibold">
              Description
              <textarea
                className="form-control border rounded p-2 w-full"
                type="text"
                name="description"
                placeholder="Enter Product Description"
                rows={10}
              ></textarea>
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="font-semibold">
              Photo URL
              <input
                className="form-control border rounded p-2 w-full"
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-block bg-orange-400 text-white font-bold hover:bg-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
