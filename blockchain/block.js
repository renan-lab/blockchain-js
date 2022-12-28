const {GENESIS_DATA, MINE_RATE} = require('../config');
const {cryptoHash} = require("../util");
const hexToBinary = require("hex-to-binary");

class Block {
    constructor({data, hash, nonce, difficulty, timestamp, lasthash}){
        this.data = data;
        this.hash = hash;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.timestamp = timestamp;
        this.lasthash = lasthash;
    }

    static genesis(){
        return new this(GENESIS_DATA);
    }

    static mineBlock({lastBlock, data}){
        const lastHash = lastBlock.hash;
        
        let hash, timestamp;

        let {difficulty} = lastBlock;

        let nonce = 0;

        do{
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({originalBlock: lastBlock, timestamp});
            hash = cryptoHash(timestamp, lastHash, data, difficulty, nonce);
        } while(hexToBinary(hash).substring(0, difficulty))

        return new this(timestamp, lastHash, data, difficulty, nonce, hash);

    }

    static adjustDifficulty({originalBlock, timestamp}){
        const {difficulty} = originalBlock;

        if (difficulty < 1) return 1;

        if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }
}

module.exports = Block;