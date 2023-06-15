console.log("welcome to the matrix")

import * as fs from 'fs';

import {Request } from "express";
import {Response } from "express";
//pull in packet
const express = require('express')
//instance that can serve requests
const app = express()
//run multiple things on local machine distingushed by ports
const port = 4002

const em = fs.readFileSync('./src/emoticons.txt', 'utf-8');
//array
const emote = em.split('\r\n');
console.log(emote[5]);

app.get("/emoticon", (req: Request, res: Response) => {
  console.dir(req.query)
  const action = "" + req.query.action

  switch (action) {
    case "random":
      const randInt = Math.floor(Math.random() * 193)
      const emoticon = emote[randInt]
      res.send({emoticon: `${emoticon}`})
      break;

    default:
      let num: number = +action;
      const specific = emote[1]
      res.send({emoticon: `${specific}`})
      break;
  }

})

// async function getMyOwn () {
//     const resp = await fetch('https://e71d-73-193-101-227.ngrok-free.app/emoticon?action=5');
//     const result = await resp.json();
//     console.log('fetched: ');
//     console.log(result);
//   }
// getMyOwn();

app.listen(port, () => {
    console.log(`listening at port ${port}`)
  })