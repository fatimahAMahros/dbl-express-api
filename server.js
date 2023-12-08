const express = require('express')
const cors = require("cors");
const db = require("./app/models")
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();

const corsOptions = {
    origin: "*"
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

//connect to db
db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to db')
    }).catch(err => {
        console.log('Cant conntect to db', err);
        process.exit();
    });

//call routes
require("./app/routes/contacts.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));