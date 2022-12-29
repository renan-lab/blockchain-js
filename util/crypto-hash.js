//const crypto = require("crypto");
import { createHash } from "crypto";

const cryptoHash = (...inputs) => {
    const hash = createHash("sha256");

    hash.update(inputs.sort().join(""));

    return hash.digest("hex");
}

//module.exports = cryptoHash;
export default cryptoHash;