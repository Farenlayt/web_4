const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require( 'mongoose');
const weatherRouter = require( './routers/weatherRouter.js');
const favourRouter = require( './routers/favourRouter.js');

async function run() {
    const app = express();

    app.use(morgan('combined'));
    app.use(express.json());
    app.use(cors());
    app.use('/weather', weatherRouter);
    app.use('/favorites', favourRouter);

    try {
        await mongoose.connect('mongodb://localhost:27017/cities', {useNewUrlParser: true, useUnifiedTopology: true});
    }
    catch (error) {
        console.log(error);
        return;
    }

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", (_) => console.log("Connection Succeeded"));

    app.listen(process.env.PORT || 8081);
}

run();
