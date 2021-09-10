function editDistance(wordA, wordB) {
  console.log(wordA, wordB);
  let total = 0;

  let arrA = wordA.split("");
  console.log(arrA);
  let arrB = wordB.split("");
  console.log(arrB);

  let wordAMap = new Map();
  let wordBMap = new Map();

  let numberA = 0;
  for (let i = 0; i < arrA.length; i++) {
    wordAMap.set(numberA++, arrA[i]);
  }
  console.log(wordAMap);

  let numberB = 0;
  for (let i = 0; i < arrB.length; i++) {
    wordBMap.set(numberB++, arrB[i]);
  }
  console.log(wordBMap);

  if (wordAMap.size !== wordBMap.size) {
    total += Math.abs(wordAMap.size - wordBMap.size);
  }

  for (let [key, value] of wordAMap) {
    valueB = wordBMap.get(key);

    if (!wordBMap.get(key)) {
        total--
    }

    if (valueB !== value) {
      total++;
    }
  }

  console.log(total);
  return total;
}

editDistance("fremulon", "microservices");
