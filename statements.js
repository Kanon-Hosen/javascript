// তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

var myMoney = 26000;

if (myMoney > 80000) {
    console.log('Buy a macBook pro')
}
else if (myMoney > 60000) {
    console.log('Buy a gaming laptop')
}
else if (myMoney > 40000) {
    console.log('Buy a lenovo yoga laptop')
}
else if (myMoney > 20000) {
    console.log('Buy a secound hand laptop')
}
else {
    console.log('do work in mobile')
}