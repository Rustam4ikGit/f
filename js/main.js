// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


let ask = confirm('У вас 10 попыток')

for (let i = 1; i <= 10; i++) {
    let password = +prompt('Ваш пароль ${i}');
    if(password === 7777) {
        alert('Верный пароль вы ввели с ${i} попытки');
        break
    } else {
        alert('уходи');
    }
}