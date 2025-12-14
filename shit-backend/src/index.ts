// import { WebSocketServer } from "ws";
// const sachin = new WebSocketServer({ port: 8080 });

// sachin.on("connection", function connection(ws) {
//   ws.on("error", console.error);

//   ws.on("message", function message(data) {
//     console.log(data);
//   });
//   ws.send("connection established");
// });

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log(data.toString());
  });
  ws.send("hello");
});

