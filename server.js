// const express = require('express')
// const app = express()
// const port = 3000
// const path = require("path");
// const socket = require("socket.io")(server);

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })




// app.listen(port, () => {
//     console.log(index)
// })

// io.on("connection",(socket) => { //function
//     socket.on("send-location", function (data) {
//         io.emit("receive-location", { id: socket.id, ...data });
//     });
//     socket.on("disconnect", function () {
//         io.emit("user-disconnected", socket.id);
//     });
// });

// app.set('view engine', 'ejs'); //set
// app.set(express.static(path.join(__dirname, 'public')));

const express = require('express');
const http = require('http');
const path = require("path");
const socketIo = require("socket.io");

const app = express();
const port = 3000;

// Create HTTP server and initialize Socket.IO
const server = http.createServer(app);
const io = socketIo(server);

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to render the EJS file
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Set up Socket.IO connection handling
io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`);

    socket.on("send-location", function (data) {
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", function () {
        io.emit("user-disconnected", socket.id);
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
