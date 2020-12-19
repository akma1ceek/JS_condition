var hello = prompt('Ismingizni kiriting')
if (hello == 'Boss') {
    alert ('Hello, Boss')
}
else{
    alert ('Hello, guest')
}
console.log(hello);
var yosh = prompt ('Yoshingizni kiriting')
if (yosh > 0 && yosh< 18) {
    alert ('Yoshsiz, o`qishingiz kerak')
}
else if (yosh > 18 && yosh < 50) {
    alert ('Ishlashingiz kerak')
}
else if (yosh > 50 && yosh < 59) {
    alert ('Yaqinda pensiyaga chiqasiz')
}
else if (yosh > 59 && yosh < 150) {
    alert ('Pensionerga o`xshaysiz, agar tirik bo`lsangiz :)')
}
else {
    alert('Nimadir noto`g`ri ketib qoldi :(')
}
var son1 = prompt ('Birinchi sonni kiriting')
var son2 = prompt ('Ikkinchi sonni kiriting')
var son3 = prompt ('Uchinchi sonni kiriting')


 if (son2>son1 && son2<son3 || son2<son1 && son2>son3)
{
    alert (
        'O`rtacha son ' + son2
    )
}
else if (son1>son2 && son1<son3 || son1>son3 && son1<son2) 
{
    alert (
        'O`rtacha son ' + son1
        )
}
else if (son3>son1 && son3<son2 || son3<son1 && son3>son2)
{
    alert (
        'O`rtacha son ' + son3
        )
} 