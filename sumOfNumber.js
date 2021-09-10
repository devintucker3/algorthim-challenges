function sumOfNumber(array, k) {
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        let difference = k - array[i];
        console.log(difference);
        for (let j = 1; j < array.length; j++) {
            if (difference === array[j]) {
                console.log(array[j]);
                return true;
            }
        }
    }

    return false;
}

function sumUsingSets(array, k) {
    let newSet = new Set(array);
    console.log(newSet);
    let noDuplicates = [...newSet];
    console.log(noDuplicates);
    let arr = [];
    for (let num of noDuplicates) {
        let difference = k - num;
        console.log(difference);
        arr.push(difference);
        console.log(arr);
        if (arr.includes(num)) {
            console.log(arr);
            console.log(num);
            console.log(difference);
            return true;
        }
    }

    return false;
}

sumOfNumber([15, 10, 3 ,7], 17);
sumUsingSets([15, 10, 7, 3], 17);