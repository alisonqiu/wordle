// I exceeded the query limit for this month so may not work lol
const PORT = 8000
const axios = require("axios").default
const express = require("express")
const http = require("http");
const cors = require("cors")
require('dotenv').config()
//express routing
const app = express()
const { Server } = require("socket.io");

app.use(cors())
const server = http.createServer(app);

//when visiting port 8000, we fetch random words from api
// app.get('/word', (req, res) => {
//   const options = {
//     method: 'GET',
//     url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
//     params: {count: '20', wordLength: '5'},
//     headers: {
//       'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
//       //go into .env to get the API key
//       'X-RapidAPI-Key': '20052df2e2msh33f9438c98979d3p165554jsn292f18697d6e'
//     }
//   };
//   axios.request(options).then((response) => {
//       console.log(response.data)
//       //display on browser
//       res.json(response.data)
//   }).catch((error) => {
//       console.error(error)
//   })
// })


// app.get('/check', (req, res) => {
//   const word = req.query.word

//   const options = {
//       method: 'GET',
//       url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
//       params: {entry: word},
//       headers: {
//         'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
//         'X-RapidAPI-Key': '20052df2e2msh33f9438c98979d3p165554jsn292f18697d6e'
//       }
//   }
//   axios.request(options).then((response) => {
//       console.log(response.data)
//       res.json(response.data.result_msg)
//   }).catch((error) => {
//       console.error(error)
//   })
// })

const io = new Server(server, {
  cors: {
    //it's ok to acceot socket connections from this URL
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//if user connects to the server
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(8000, () => {
  console.log("SERVER RUNNING");
});

//app.listen(PORT, () => console.log('Server running on port ' + PORT))