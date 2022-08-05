// কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো ?
var name = ['kanon', 'kamrul', 'hasan', 'riyad'];

var val = name[3];
console.log(val);

// কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে ?
name[2] = 'naim';
console.log(name);

// একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো? supose kamrul is your value.
var find = name.indexOf('kamrul');
console.log(find);

// কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে?
name.push('mamun');
console.log(name);
name.pop();
console.log(name);

//  কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে?
// remove element in first index an array ====
name.shift()
console.log(name); //output [ 'kamrul', 'naim', 'riyad' ];
//add elemant in first index in array =====
name.unshift('Joni');
console.log(name); //output [ 'Joni', 'kamrul', 'naim', 'riyad' ];

