"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("welcome to the matrix");
const fs = __importStar(require("fs"));
//pull in packet
const express = require('express');
//instance that can serve requests
const app = express();
//run multiple things on local machine distingushed by ports
const port = 4002;
const em = fs.readFileSync('./src/emoticons.txt', 'utf-8');
//array
const emote = em.split('\r\n');
console.log(emote[5]);
app.get("/emoticon", (req, res) => {
    console.dir(req.query);
    const action = "" + req.query.action;
    switch (action) {
        case "random":
            const randInt = Math.floor(Math.random() * 193);
            const emoticon = emote[randInt];
            res.send({ emoticon: `${emoticon}` });
            break;
        default:
            let num = +action;
            const specific = emote[1];
            res.send({ emoticon: `${specific}` });
            break;
    }
});
// async function getMyOwn () {
//     const resp = await fetch('https://e71d-73-193-101-227.ngrok-free.app/emoticon?action=5');
//     const result = await resp.json();
//     console.log('fetched: ');
//     console.log(result);
//   }
// getMyOwn();
app.listen(port, () => {
    console.log(`listening at port ${port}`);
});
//# sourceMappingURL=server.js.map