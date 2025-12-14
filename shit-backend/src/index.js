"use strict";
// import { WebSocketServer } from "ws";
// const sachin = new WebSocketServer({ port: 8080 });
Object.defineProperty(exports, "__esModule", { value: true });
// sachin.on("connection", function connection(ws) {
//   ws.on("error", console.error);
//   ws.on("message", function message(data) {
//     console.log(data);
//   });
//   ws.send("connection established");
// });
var ws_1 = require("ws");
var wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        console.log(data.toString());
    });
    ws.send("hello");
});
