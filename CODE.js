// ASSIGNMENT OPRATORS:

var a=10;
console.log(a);

// ARITHMETIC OPRATORS:

var a=10;
var b=200;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a++);
console.log(++a);
console.log(--a);
console.log(a--);
console.log(a+=10);
console.log(a-=2);

//relatonal operators(<,>,<=,>=,==,!=,===,!==,)

console.log(a<2);
console.log(a>2);
console.log(a<=2);
console.log(a>=2);
console.log(a==2);
console.log(a!=2);
console.log(a<=2);
console.log(a===2);
console.log(a!==2);

//ogical operators (&&,||,!)
if (a<=10&&b<=20){
    console.log(a+" "+b+"is lessthan or equal");

}
if (a<=10||b<=0){
    console.log(a+"is lessthan or equal");

}

if(a!=b){
    console.log(a+"is not equal");

}
//bitwise (&,|,~,>>,<<,^)
console.log(a&b);
console.log(a|b);
console.log(a^b);
console.log(a<<2);
console.log(a>>2);
//ternary operators(?,:)

(a<b)?console.log(a+"is grater"):console.log(b+"is grater");

//loop
arr=[10,20,30,'jai',[90,20]];
for(var i in arr){
    console.log(i);
}
for(var i of arr){
    console.log(i);
}
var i=5;
while(i<=5){
    console.log(arr[i]);
    i++;
}
var k=0;
do{
    
    console.log(arr[k]);
    k++;
}while(k!=5);