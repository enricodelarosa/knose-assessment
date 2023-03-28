const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Pick a number: ', name => {
    console.log(`Jk, your chosen number is irrelevant. I won't even type check it.`);
    readline.close();
    
    const randomNum = Math.round((Math.random() * 100),2);

    console.log(`Running function #1 with arguement ${randomNum}`);
    fizzbuzz(randomNum);
    console.log(`Running function #2 with arguement ${randomNum}`);
    loadingDisplay(randomNum);


});



function fizzbuzz(n) {
    const numArray = Array.from({ length: n }, (value, index) => index + 1);

    // Could have used for of also but wanted to use forEach since already using for in in #2
    numArray.forEach(value => {

        const isDivisibleBy5 = value % 5 == 0;
        const isDivisibleBy7 = value % 7 == 0;

        if (isDivisibleBy5 && isDivisibleBy7) {
            console.log("Knose Pet Care Made Easy");
        } else if (isDivisibleBy5) {
            console.log("Knose");
        } else if (isDivisibleBy7) {
            console.log("Pet Care Made Easy");
        } else {
            console.log(value);
        }
    })
}




function loadingDisplay(n) {
    // Create array with n elements
    let blanksArray = Array.from({ length: n }, value => "-");
    const maxIndex = n - 1;

    for (i in blanksArray) {
        const indexToChange = maxIndex - i;

        blanksArray[indexToChange] = "*";

        console.log(blanksArray.join(''));

    }
}

/* 
If you are to develop your own sorting method, how would you implement it?

Given a set of integers, how will you sort them from lowest to highest?

A year ago my answer would be something like get the minimum of the list through a loop and transfer it to a new array and repeat this n times, n being the number of integers. Essentially a selection sort but with another array being used. BUT that would have time complexity O(n^2).

But, knowing what I know now I'd choose to implement a quicksort. This would involve choosing a random element as a pivot, all numbers less than or equal to the pivot to the left of the pivot and nubmers greater than the pivot go to the right and we do this again recursively for each partitions until the elements are less than or equal to 1 then we merge them to form a sorted list.

Although, a merge sort would have a better worst case than quicksort I choose quicksort because it's clearer to me and choosing the random pivot recudes the likelihod of selecting a pvito that leads to the worst case scenario



*/





