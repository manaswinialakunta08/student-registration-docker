const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = "mongodb://admin:qwerty@localhost:27017";
const client = new MongoClient(MONGO_URL);

// GET all users
app.get("/getUsers", async (req, res) => {
    try {
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db("apnacollege-db");

        const data = await db
            .collection("users")
            .find({})
            .toArray();

        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching users");
    }
});

// POST new user
app.post("/addUser", async (req, res) => {
    try {
        const userObj = req.body;

        console.log("Received user:", userObj);

        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db("apnacollege-db");

        const data = await db
            .collection("users")
            .insertOne(userObj);

        console.log(data);
        console.log("Data inserted in DB");

        res.send(`
            <h1>Registration Successful!</h1>
            <p>Your account has been created successfully.</p>
            <a href="/">Go back to Home Page</a>
        `);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error inserting user");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});