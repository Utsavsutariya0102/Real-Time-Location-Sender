io.on("connection",(socket) => { //function
//     socket.on("send-location", function (data) {
//         io.emit("receive-location", { id: socket.id, ...data });
//     });
//     socket.on("disconnect", function () {
//         io.emit("user-disconnected", socket.id);
//     });
// });