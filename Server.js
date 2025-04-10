// const express = require('express')
// const mongoose = require('mongoose')
// const morgan = require('morgan')
// const bodyparser = require('body-parser')
// const {Db} = require('mongodb')
// const {connected} = require('process')
// const cors = require('cors');

// mongoose.connect('mongodb://localhost:27017/Trendique',{useNewUrlParser:true , useUnifiedTopology:true})

// const authrouter = require("./Route/userroute");

// const db = mongoose.connection
// db.on('error',(err)=>{
//     console.log(err)
// })
// db.once('open',()=>{
//     console.log('database is connected')
// })

// const app=express()
// app.use(morgan('dev'))
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json())
// app.use(cors())

// const PORT = 3000
// app.listen(PORT,()=>{
//     console.log(`server is running ${PORT}`)
// })

// app.use("/", authrouter);



require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');

const authrouter = require("./Route/userroute");

const app = express();

// Middleware
=======
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors');
const authrouter = require("./Route/userroute");

// MongoDB Atlas connection string
const atlasUri = 'mongodb+srv://abitha:mongodb@cluster0.iyuh8ns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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
>>>>>>> 57b9baca8ca5205a52f125fc5a95316a172b9edb
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

<<<<<<< HEAD
// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
=======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
>>>>>>> 57b9baca8ca5205a52f125fc5a95316a172b9edb
});

const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database connected'));

// Routes
app.use("/", authrouter);
<<<<<<< HEAD

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
=======
>>>>>>> 57b9baca8ca5205a52f125fc5a95316a172b9edb
