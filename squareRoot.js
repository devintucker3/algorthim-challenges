function squareRoot(number) {
    for (let index = number; index >= 1; index--) {
        if (index * index === number) {
            return index;
        }

        if (index === 1 && index * index !== number) {
            number = `Square root of ${number} has decimal place`;
        }
    }


    return number;
}

console.log(squareRoot(65));