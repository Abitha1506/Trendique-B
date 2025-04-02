const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors');
const authrouter = require("./Route/userroute");

// MongoDB Atlas connection string
const atlasUri = 'mongodb+srv://<abitha>:<password>@cluster0.mongodb.net/Trendique?retryWrites=true&w=majority';

// Replace <username> and <password> with your Atlas credentials
mongoose.connect(atlasUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,      // Recommended for Atlas
    useFindAndModify: false    // Recommended for Atlas
})
.then(() => console.log('MongoDB Atlas connected successfully'))
.catch(err => console.error('MongoDB Atlas connection error:', err));

const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Database connection error:', err)
});
db.once('open', () => {
    console.log('Database is connected to MongoDB Atlas')
});

const app = express();
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

app.use("/", authrouter);
