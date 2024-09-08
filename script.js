// String Manipulation Functions:
// 1
/*
var str = "hello";

function reverse(string) {
    let rev = "";
    for (let i = string.length - 1; i >= 0; i--) {
        rev += string[i];
    }
    return rev;
}
console.log(reverse(str));
*/

// 2
/*
var str="hello"
function cont(string){
    var count=0
    while(true){
        if(string[count]!==undefined){
            count++
        }
        else{
            break
        }
    }
    return count
}
console.log(cont(str))
*/

//3
/*
var str = "hello world";
function upper(string) {
    let res = "";
    let capitalize = true;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        
        if (capitalize && char !== ' ') {
            res += char.toUpperCase();
            capitalize = false;
        } else {
            res += char;
        }
        if (char === ' ') {
            capitalize = true;
        }
    }
    return res;
}
console.log(upper(str));
*/


// Array Functions:


//1
/*
var arr=[1,5,7,9,14,15,18,22]

function findMaximum(arr) {
    if (arr.length === 0) {
        return -1
    }

    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return maxValue;
}
console.log(findMaximum(arr))*/


//2
/*
var numbers = [1, 2, 3, 4, 15];

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var totalSum = sumArray(numbers);
console.log(`Sum of array elements: ${totalSum}`);*/



//3
/*
var arr=[1,3,5,21,78,24,45,58]
function fillter(arr,val){
    var res=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]>val){
            res.push(arr[i])
        }
    }
    return res
}
console.log(fillter(arr,10))*/


//Mathematical Functions:

//1
/*
function factorial(n) {
    if (n < 0) {
      return -1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
var number = 5;
var fact = factorial(number);
console.log(fact);

*/

//2

/*
function premier(a){
    if (a%2==0){
        return("nombre n'est pas premier")

    }
    else{
        return ("le nombre et premier")
    }
}
var a=5
console.log(premier(a))
*/

//3

/*
var arr=[1,5,10]
function fabbo(arr,len){
    for (i=2;i<len;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr
}
console.log(fabbo(arr,10))

*/