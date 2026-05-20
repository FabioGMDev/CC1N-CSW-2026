var issoeumastring = 'Isso é uma string';
var issoeumnumero = 4;
const issoeumbooleano = true;
let issotambemeumastring = '4'

console.log (issoeumastring == issoeumnumero);
console.log (issoeumnumero == issotambemeumastring);
console.log (issoeumnumero === issotambemeumastring);
console.log (typeof issoeumastring == typeof issoeumnumero)
console.log (typeof issotambemeumastring);
console.log (typeof issoeumnumero);

console.log (issoeumnumero + issotambemeumastring);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;
console.log(sum.toPrecision(2))


for (let i = 0; i <= 10; i +=2) {
    console.log(i);
};

j=1
while (j<=10) {
    {
    console.log (j);}
    j+=2;
};

x=1
while (x<=5) {
    {
    console.log (x*2);}
    x+=1;
};
