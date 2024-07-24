// const math = require('./math.js');
// const file = require('./file.js');

// const readfile= file.read;
// console.log(readfile);

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.write("Hello world");
//     res.end();
// }
// )
// server.listen(3000, ()=>{
//     console.log("Server is running on port 3000")
// })z

// const express = require('express');
// const port=3000;
// const app = express();

// app.use(express.json());

// app.get('/', (req, res)=>{
//     res.send("helloooo");
// });

// const users = [
//     {
//         id: 1,
//         name: "dee",
//     },
//     {
//         id: 2,
//         name: "riri",
//     },

// ]

// app.get('/users', (req, res)=>{
//     res.send(users);
// });

// app.get("/users/:id", (req, res)=>{
//     const user_id = req.params.id;
//     console.log(user_id);
//     const user= users.find((user)=> user.id === parseInt(user_id));
//     if (!user){
//         res.status(404).send("User not found");
//     }
//     res.send(user);

// });

// app.post("/postusers", (req, res)=>{
//     const name = req.body.name;
//     res.send(name);
// });

const express=require('express');
const app = express();
require('dotenv').config();
const connectDB = require("./src/Config/db");
const userRoute=require("./src/Routes/userRoute")

app.use(express.json());

// const port = 3000;
const port = process.env.port;
//used to connect to the database
connectDB();

app.use('/user', userRoute)



  
app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})


// const express = require('express');
// const app = express();
// require('dotenv').config();

// const connectDB = require("./src/Config/db");
// const userRoute = require("./src/Routes/userRoute")
// const RecipeRoute = require("./src/Routes/RecipeRoute")

// app.use(express.json()); 
// const port = process.env.PORT;

// //used to connect to database
// connectDB();

// app.use('/user', userRoute)
// app.use('/recipe', RecipeRoute)



// // no code below this
// app.listen(port, ()=>{
//     console.log(`server is running on ${port}`)
// })
