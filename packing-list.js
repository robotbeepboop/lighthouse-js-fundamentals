const packingList = ["tent", "bug spray", "sleeping bag"];
console.log(packingList[0]);
console.log(packingList[1]);
console.log(packingList[2]);

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
packingList[3];

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}