const express = require('express');
require('dotenv').config()
const app = express();
app.use(express.json());

const router = require('./routes/emailroute');
const connection = require('./config/db');

app.use("/api",router);

const PORT = 8000;
app.get('/', (req, res) => {
    res.json("backend running")
})

// Start the server
app.listen(PORT, async () => {
    try {
        await connection
        console.log('connected to db');
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
});
