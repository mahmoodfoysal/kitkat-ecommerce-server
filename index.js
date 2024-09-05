const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId, Collection } = require('mongodb');
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
    // const database = client.db("test-server-e-commerce");
    const imageCategoryCollection = database.collection("imageCategory");
    const categoryCollection = database.collection("categories");
    const productsCollection = database.collection("products");
    const brandCollection = database.collection("brands");
    const ordersCollection = database.collection("orders");
    const reviewCollection = database.collection("reviews");
    const sliderImageColllection = database.collection("slider-image");
    const offerColllection = database.collection("offer");
    const upcommingEventsCollection = database.collection('upcomming-events');
    // ******** Dashboard Collection **********
    const adminCollection = database.collection('admin');

    // ########################## all post api are write here ###############################
    app.post('/imageCategory', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await imageCategoryCollection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await imageCategoryCollection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });

    app.post('/upcomming-events', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await upcommingEventsCollection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await upcommingEventsCollection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });

    app.post('/slider-image', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await sliderImageColllection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await sliderImageColllection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });

    app.post('/offer', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await offerColllection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await offerColllection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });

    app.post('/categories', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await categoryCollection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await categoryCollection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });

    app.post('/products', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await productsCollection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await productsCollection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });

    app.post('/brands', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await brandCollection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await brandCollection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });

    app.post('/orders', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await ordersCollection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await ordersCollection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });

    app.post('/reviews', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await reviewCollection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await reviewCollection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });

    app.patch('/orders/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const updateStatus = req.body;
      console.log(updateStatus);
      const updatedDoc = {
        $set: {
          orderStatus: updateStatus.orderStatus,
          warehouse_date: updateStatus.warehouse_date,
          shipping_date: updateStatus.shipping_date,
          delivery_date: updateStatus.delivery_date,
          complete_date: updateStatus.complete_date
        }
      }
      const result = await ordersCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    // *********************** Dashboard API ******************************* 
    app.post('/admin', async (req, res) => {
      const data = req.body;
      try {
        if (data._id) {
          // Update operation
          const userId = data._id;
          delete data._id; // Remove _id from the userData to prevent overriding it
    
          const result = await adminCollection.updateOne(
            { 
              _id: new ObjectId(userId) 
            },
            { 
              $set: data 
            }
          );
    
          if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'User not found' });
          }
          res.send(result);
        } else {
          // Create operation
          const result = await adminCollection.insertOne(data);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ error: 'Failed to create or update user' });
      }
    });


    // ####################### all get api are write here ######################### 

    app.get('/imageCategory', async(req, res) => {
        const getSqureCard = imageCategoryCollection.find();
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

    app.get('/orders/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const getSpecificOrder = ordersCollection.find(query);
      const result = await getSpecificOrder.toArray();
      res.send(result);
    });

    app.get('/pending', async(req, res) => {
      const getOrders = ordersCollection.find({ orderStatus: "P" });
      const result = await getOrders.toArray();
      res.send(result);
    });

    app.get('/warehouse', async(req, res) => {
      const getWarehouse = ordersCollection.find({ orderStatus: "W" });
      const result = await getWarehouse.toArray();
      res.send(result);
    });

    app.get('/shipping', async(req, res) => {
      const getWarehouse = ordersCollection.find({ orderStatus: "S" });
      const result = await getWarehouse.toArray();
      res.send(result);
    });

    app.get('/delivery', async(req, res) => {
      const getWarehouse = ordersCollection.find({ orderStatus: "D" });
      const result = await getWarehouse.toArray();
      res.send(result);
    });

    app.get('/reviews', async(req, res) => {
      const getReviews = reviewCollection.find();
      const result = await getReviews.toArray();
      res.send(result);
    });

    app.get('/admin', async(req, res) => {
      const getAdmin = adminCollection.find();
      const result = await getAdmin.toArray();
      res.send(result);
    });

    app.get('/slider-image', async(req, res) => {
      const getSliderImg = sliderImageColllection.find();
      const result = await getSliderImg.toArray();
      res.send(result);
    });

    app.get('/offer', async(req, res) => {
      const getOffer = offerColllection.find();
      const result = await getOffer.toArray();
      res.send(result);
    });

    app.get('/upcomming-events', async(req, res) => {
      const getOffer = upcommingEventsCollection.find();
      const result = await getOffer.toArray();
      res.send(result);
    });

    // get user data for check admin 
    app.get('/admin/:email', async(req, res) => {
      const email = req.params.email;
      const query = {email: email};
      const user = await adminCollection.findOne(query);
      let isAdmin = false;
      if(user?.role === 'Admin') {
        isAdmin = true;
      }
      res.json({admin: isAdmin});
    });


    // ####################### all delete api are write here ######################### 

    // admin delete api 
    app.delete('/admin/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await adminCollection.deleteOne(query);
      res.json(result);
    });

    // delete image category api 
    app.delete('/imageCategory/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await imageCategoryCollection.deleteOne(query);
      res.json(result);
    });

    // product delete api 
    app.delete('/products/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await productsCollection.deleteOne(query);
      res.json(result);
    });

    // order delete api 
    app.delete('/orders/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await ordersCollection.deleteOne(query);
      res.json(result);
    });

    app.delete('/slider-image/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await sliderImageColllection.deleteOne(query);
      res.json(result);
    });

    app.delete('/offer/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await offerColllection.deleteOne(query);
      res.json(result);
    });

    app.delete('/brands/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await brandCollection.deleteOne(query);
      res.json(result);
    });

    app.delete('/upcomming-events/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await upcommingEventsCollection.deleteOne(query);
      res.json(result);
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