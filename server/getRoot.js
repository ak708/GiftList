const MerkleTree = require("../utils/MerkleTree");
const niceList = require("../utils/niceList.json");
function main() {
  const merkleTree = new MerkleTree(niceList);
  console.log(merkleTree.getRoot());
}

main();
