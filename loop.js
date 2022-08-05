// আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
for (var i = 0; i < 40; i++){
    // console.log(`Ajke amr mon valo nei ${i}`)
}

// একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও ?
for (var i = 58; i <= 98; i++){
    // console.log(i)
}

//একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও?
for (var i = 412; i < 456;  i+=2){
    // console.log(i)
}

// একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও ?
for (var i = 581; i < 623; i += 2){
    // console.log(i)
}

// তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
var learn = ['variable', 'condition', 'dataType', 'Array', 'loop'];

for (var i = 0; i < learn.length; i++){
    // console.log(learn[i])
}

//তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও ?
var model = ['nokia', 'huawei', 'symphone', 'sumsung', 'poco x3'];
var i = 0;
while (i < model.length) {
    // console.log(model[i])
    i++
}

//একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও ?
for (var i = 30; i < 86; i++){
    if (i > 44) {
        break;
    }
    // console.log(i)
}

// তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
var arr = [300, 60, 200, 140, 160, 560, 320, 50, 890, 32];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 200) {
        continue;
    }
    // console.log(arr[i])
}

function print(a, b, c){
    return a+2;
    return a*b;
    return b*c+a;
  }
// console.log(print(1, 2, 3));
// for (let i = 5; i < 10; i = 1 + 2){
    
// }
if (false) {
    console.log("hello")
}

let a = 5;
if (item => 50) {
    
}