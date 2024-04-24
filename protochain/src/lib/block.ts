
import sha256 from 'crypto-js/sha256';
export default class Block {
    index: number;
    timestamp: number;
    hash: string;
    previousHash: string;
    data: string;

    constructor(index: number, hash: string, previousHash: string, data: string){
        this.index = index;
        this.hash = this.getHash();
        this.timestamp = Date.now();
        this.previousHash = previousHash;
        this.data = data;
    }

    getHash(): string {
         return sha256(this.index + this.data + this.timestamp + this.previousHash).toString();
    }
}