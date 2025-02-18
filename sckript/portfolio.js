let agesmail1 = 0;
let smail1 = 288;
const agesmail2 = 0;
let smail2 = 158;
const agesmail3 = 0;
let smail3 = 98;
const agesamil4 = 0;
let smail4 = 34;

let boxcout = document.getElementById('count')

const counter = setInterval(() => {
    if (agesmail1 <= smail1) {
        console.log(agesmail1);
        agesmail1++;
        document.getElementsByClassName('smail1').innerHTML= `${agesmail1}`
    } else {
        console.log('атсчёт закончин');
        clearInterval(counter);
        boxcout.innerHTML= counter
    }
}, 7);