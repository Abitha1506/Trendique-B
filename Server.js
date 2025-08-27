// // const express = require('express')
// // const mongoose = require('mongoose')
// // const morgan = require('morgan')
// // const bodyparser = require('body-parser')
// // const {Db} = require('mongodb')
// // const {connected} = require('process')
// // const cors = require('cors');

// // mongoose.connect('mongodb://localhost:27017/Trendique',{useNewUrlParser:true , useUnifiedTopology:true})

// // const authrouter = require("./Route/userroute");

// // const db = mongoose.connection
// // db.on('error',(err)=>{
// //     console.log(err)
// // })
// // db.once('open',()=>{
// //     console.log('database is connected')
// // })

// // const app=express()
// // app.use(morgan('dev'))
// // app.use(bodyparser.urlencoded({extended:true}))
// // app.use(bodyparser.json())
// // app.use(cors())

// // const PORT = 3000
// // app.listen(PORT,()=>{
// //     console.log(`server is running ${PORT}`)
// // })

// // app.use("/", authrouter);



// // require('dotenv').config();
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const morgan = require('morgan');
// // const bcrypt = require('bcryptjs');
// // const bodyparser = require('body-parser');
// // const cors = require('cors');

// // const authrouter = require("./Route/userroute");

// // const app = express();

// // // Middleware
// // app.use(morgan('dev'));
// // app.use(bodyparser.urlencoded({ extended: true }));
// // app.use(bodyparser.json());
// // app.use(cors());

// // // MongoDB Connection
// // mongoose.connect(process.env.MONGODB_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // const db = mongoose.connection;
// // db.on('error', (err) => console.log(err));
// // db.once('open', () => console.log('Database connected'));

// // // Routes
// // app.use("/", authrouter);

// // // Server Start
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });





require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');

const userroute = require("./Route/userroute");

const app = express();

// Middleware
if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://your-frontend.vercel.app"],
    credentials: true
}));

// Routes
app.use("/api/Route",userroute);

// Health Check
app.get("/health", (req, res) => {
    res.json({ status: "OK", message: "Server running" });
});

// DB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ DB Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
