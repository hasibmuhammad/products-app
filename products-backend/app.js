const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// MongoDB
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Creating the productCollection
    const productCollection = client.db("productsDB").collection("products");

    // MondoDB Routes
    app.get("/products", async (req, res) => {
      const products = await productCollection.find().toArray();
      res.send(products);
    });

    app.post("/add", async (req, res) => {
      const product = await req.body;
      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);

      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};
run().catch(console.dir);

// Server initialization
app.listen(port, () => {
  console.log(`Products Server is runnig on port: ${port}`);
});
