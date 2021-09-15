

/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        let result = "";
        
        if (i % 3 === 0) {
            result += "Fizz";
        } 
        
        if (i % 5 === 0) {
            result += "Buzz";
        }

        if (result == "") {
            result = i;
        }

        console.log(result);
    }   
}

fizzBuzz(65);
