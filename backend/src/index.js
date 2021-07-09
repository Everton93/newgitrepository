const express = require ('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://Everton:everton@cluster0.nkzot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology : true,
});

app.use(require('./routes'));

app.listen(3333); 