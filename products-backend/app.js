const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// MongoDB
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.er9gvke.mongodb.net/?retryWrites=true&w=majority`;

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
    const userCollection = client.db("productsDB").collection("users");

    // Users Routes
    app.post("/adduser", async (req, res) => {
      const user = await req.body;
      const result = await userCollection.insertOne(user);

      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const users = await userCollection.find().toArray();
      res.send(users);
    });

    // delete user
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };

      const result = await userCollection.deleteOne(filter);

      res.send(result);
    });

    // update user upon login
    app.patch("/users", async (req, res) => {
      const user = await req.body;

      const filter = { email: user.email };

      const newInfo = {
        $set: {
          lastLoggedInAt: user.lastLoggedInAt,
        },
      };

      const result = await userCollection.updateOne(filter, newInfo);

      res.send(result);
    });

    // Products Routes
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

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);

      res.send(result);
    });

    // update
    app.put("/products/:id", async (req, res) => {
      const id = req.params.id;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const product = await req.body;

      const newProduct = {
        $set: {
          name: product.name,
          category: product.category,
          manufacturer: product.manufacturer,
          price: product.price,
          description: product.description,
          photo: product.photo,
        },
      };

      const result = await productCollection.updateOne(
        filter,
        newProduct,
        options
      );

      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("welcome to products backend!");
});

// Server initialization
app.listen(port, () => {
  console.log(`Products Server is runnig on port: ${port}`);
});
