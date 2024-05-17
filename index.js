const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.da6po2r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // ***************************code write here*************************** 
    const database = client.db("kitkat-e-commerce");
    const squreCardCollection = database.collection("squreCardForHome");
    const categoryCollection = database.collection("categories");
    const productsCollection = database.collection("products");
    const brandCollection = database.collection("brands");
    const ordersCollection = database.collection("orders");


    // ########################## all post api are write here ###############################
    app.post('/squreCardForHome', async(req, res) => {
        const postSqureCard = req.body;
        console.log(postSqureCard);
        const result = await squreCardCollection.insertOne(postSqureCard);
        res.send(result);
    });

    app.post('/categories', async(req, res) => {
        const postCategory = req.body;
        console.log(postCategory);
        const result = await categoryCollection.insertOne(postCategory);
        res.send(result);
    });

    app.post('/products', async(req, res) => {
        const postProducts = req.body;
        console.log(postProducts);
        const result = await productsCollection.insertOne(postProducts);
        res.send(result);
    });

    app.post('/brands', async(req, res) => {
        const postBrands = req.body;
        console.log(postBrands);
        const result = await brandCollection.insertOne(postBrands);
        res.send(result);
    });

    app.post('/orders', async(req, res) => {
        const postOrders = req.body;
        console.log(postOrders);
        const result = await ordersCollection.insertOne(postOrders);
        res.send(result);
    });

    // ####################### all get api are write here ######################### 

    app.get('/squreCardForHome', async(req, res) => {
        const getSqureCard = squreCardCollection.find();
        const result = await getSqureCard.toArray();
        res.send(result);
    });

    app.get('/categories', async(req, res) => {
        const getCategory = categoryCollection.find();
        const result = await getCategory.toArray();
        res.send(result);
    });

    app.get('/products', async(req, res) => {
        const getProducts = productsCollection.find();
        const result = await getProducts.toArray();
        res.send(result);
    });

    app.get('/brands', async(req, res) => {
        const getBrands = brandCollection.find();
        const result = await getBrands.toArray();
        res.send(result);
    });
    app.get('/orders', async(req, res) => {
        const getOrders = ordersCollection.find();
        const result = await getOrders.toArray();
        res.send(result);
    });





  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







app.get('/', (req, res) => {
  res.send('Server Running...!!!')
})

app.listen(port, () => {
  console.log(`Express Server Running ${port}`)
})