const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useFindAndModify', false);

require("./models/dbConfig");
const postsRoute = require("./routes/postsController");
const port = 5501;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/posts", postsRoute);

app.listen(port, () => console.log(`Server started on port: ${port}`));
