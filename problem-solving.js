// Create a function that will convert from Celsius to Fahrenheit?
function Celsius(n) {
    return n * 1.8 + 32;
}
let celsiusToFahrenheit = Celsius(30);
console.log(celsiusToFahrenheit)

// Create a function that will convert from Fahrenheit to Celsius?
function Fahrenheit(n) {
    return n - 32 * 1.8;
}

let fahrenheitToCelsius = Fahrenheit(105);
console.log(fahrenheitToCelsius);

//   Calculate the sum of numbers in an array of numbers?

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
let arr = [43, 454, 54, 45, 543, 435, 543, 52, 355, 67, 45, 536, 54];
let total = sumArray(arr);
console.log(total);

// Calculate the average of the numbers in an array of numbers?

function avg(ar) {
    let n = ar.length;
    let sum1 = 0;
    for (let i = 0; i < n; i++){
        sum1 += ar[i];
    }
    return sum1 / n;
}
let ar = [345, 54, 55, 46, 84, 877, 4, 76, 34, 78, 434];
let all = avg(ar);
console.log(all);

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

function positiveNum(array) {
    let arr2 = [];

    for (let i = 0; i < array.length; i++){
        let el = array[i];
        let sum2 = arr2[i]
        if (el >= 0) {
            arr2.push(el)
        }
    }
    return arr2;
};
let array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let arr2 = positiveNum(array);
console.log(arr2);

// Miles to Kilomitar

function Kilomitar(miles) {
    const km = miles * 1.609;
    return km;
};
const myMiles = 454;
const milesToKm = Kilomitar(myMiles);
console.log(milesToKm)

// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.

function hoursToMinutes(hours) {
    let min = hours * 60;
    return min;
}
const total2 = hoursToMinutes(220);
console.log(total2); //output 13200;

// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

function findLeapYear(years) {
    let leapYears = [];
    for (let i = 0; i < years.length; i++){
        if (years[i] % 4 === 0) {
            leapYears.push(years[i]);
        }
    }
    return leapYears;
};
let years = [2023, 2024, 2025, 2028, 2030];
const leap = findLeapYear(years);
console.log(leap);

//Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

function findOddSum(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        if (num[i] % 2 === 0) {
            sum += num[i];
        }
    }
    return sum;
}
let num = [5, 7, 8, 10, 45, 30];
let oddnum = findOddSum(num);
console.log(oddnum);


let arr4 = [43, 54, 676, 6465, 56, 56, 788, 435, 9, 45, 87965, 8989, 78, 987];
let arr5 = [];
for (let i = 0; i < arr4.length; i++){
    if (arr4[i] > 80) {
        arr5.push(arr4[i])
    }
}
console.log(arr5)
