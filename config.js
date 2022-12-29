const MINE_RATE = 1000;
const MINING_REWARD = 50;

const INITIAL_DIFFICULTY = 3;

const STARTING_BALANCE = 1000;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '------',
    hash: "abcd",
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};

/*module.exports = {
    GENESIS_DATA,
    STARTING_BALANCE,
    MINING_REWARD,
    MINE_RATE
}*/
export{
    GENESIS_DATA,
    STARTING_BALANCE,
    MINING_REWARD,
    MINE_RATE
}