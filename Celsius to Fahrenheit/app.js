const celsius = (mainNum) => {
    const btn = document.getElementById('btn');
    const text = document.getElementById('text');

    let total = mainNum * 1.8 + 32;
    btn.addEventListener('click', () => {
        celsius(number)
        text.innerText = `${total} °F `;

    })
};
let num = document.querySelector('#number');
let number = num.value;
console.log(number);
const subTotal = celsius(number);
console.log(subTotal);