//const express = require("express");
import cors from "cors";
import express, { json } from "express";
import Blockchain from "./blockchain/blockchain.js";
//const Blockchain = require("./blockchain/blockchain");

const app = express();

app.use(json());
app.use(cors());

const blockchain = new Blockchain();


app.get("/api/blocks", (req, res) => {
    res.json(blockchain.chain);
})

app.post("/api/mine", (req, res) => {
    const {data} = req.body;

    blockchain.addBlock({data});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening at localhost: ${PORT}`));