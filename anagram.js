function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sortedA = A.split("").sort().join("");
    const sortedB = B.split("").sort().join("");
    if (sortedA === sortedB) {
        return 0
    }

    let count = 0;
    for(let i = 0; i < sortedA.length; i++) {
        if (!sortedB.includes(sortedA[i])) {
            count++
        }

        if (sortedA[i] === sortedA[i + 1] && !sortedB.includes(`${sortedA[i]}${sortedA[i]}`)) {
            count++
        }
    }

    for(let i = 0; i < sortedB.length; i++) {
        if (!sortedA.includes(sortedB[i])) {
            count++
        }
    }

    return count;
}

solution('apple', 'pear');