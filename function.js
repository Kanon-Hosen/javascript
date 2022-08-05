// Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.

function foo() {
    // console.log("foo")
    bar()
}
foo();

function bar() {
    // console.log("bar");
}
bar();
foo();

//Write a function called make_avg() which will take an three integers and return the
// average of those values.

function make_avg(a, b, c) {
    var sum = a + b + c;
    // console.log(sum);
    return sum;
}
make_avg(432, 54, 433);

// Challenging: Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.
// let arr = [23, 34, 245, 56];
// let total = 0;
// for (let i = 0; i < arr.length; i++){
//    total += arr[i]
// }
// let sum = mot;
// console.log(sum)
// function avg(arrr) {
//     let sum2 = arrr / 3;
//     return sum2;
    
// }
// avg(sum);

// Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:

function odd_even(e) {
    for (let i = 0; i < e; i+=2){
        console.log(i);
    }
}
odd_even(23);
