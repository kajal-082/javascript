/*console.log("hello wordld");//this is used to print something on cosole window not on web page 
//document.write("this is document write ");//this helps to write on web page using java script ...skip this becuse abb use nhi krte 
console.warn("this is a warning ");// this is used to show warning on console 
console.error("this is error");
// 0.varivables in javasript - to store valiues - they are declered by var 
var num = 3 ;
var num1 = 4 ;
console.log(num + num1);
/* mullti 
line 
comment */

// 1.data types in javascript
// string  
/*var str = "kajal singh ";
var str2 = 'palak bansal ';// string can be written in single codes as well as double codes in java script 
console.log(str);
console.log(str2);
// number 

/*var num = 3 ;
var num1 = 4 ;
console.log(num + num1);
// object - key value pairs 
marks = {
    hsrry : 99.9 , kajal : 98.6
} 
console.log(marks);
// boolean 
var a = true ;// a is a variable and true is a data type relate this in all 
var b = false ;
console.log(a , b );
console.log(b);
// some othre types of data type 
var un = undefined ;
console.log(undefined);// how this possible 
var und ;
console.log(und); // it also print value undefined becouse apne eise bs bna kr chod diya koi value kari he nhi apne eisme 
var n = null ; // undefiend and null both diff ...undefined uske adr abhi kuch nhi rkha ...null uske nadr kuch nhi rakha jata hai 

// arrays - collection of elements (string,numebre,booolean)



/* at a very high lavel there are two types of datatyeppps in javascript
1 primitive data type - undefined , null , number , string , booleam , symbol 
refrence datatypes - arrays and object 

*/

// arrays 
/*var arr = [1,2,3,"kajal",4,5];
console.log(arr);
console.log(arr[3]) ; 
// operators in javascript 
// arthmetic operators +,-,/,*,%
var c=7 ;
var d = 3 ;

console.log("addition of c+d is",c+d);

console.log(c/d);// here no concept of float dividon will give you exact value either its output is interger or flaoting point

// assigment operators 
/* var e = d ;
 console.group(e);

 // function 
/* function avg(k,l)
 {
    return (k+l)/2 ;
 }
 // by usning let hm temporsry variable us block main bna sakte hia ...var to purne js main use hota tha abb let use hone lga hai 
// hm constant kisi variable ko jb bnate hai jb hme uske value in future change nhi karni hoti 
// array length main vo kitne no of elements us array mai present hai vo batat hai ...na ke memory size
// arrayname.pop() se last elemet list ka nikl jayega 
// arrayname.push("kajal" ); to us array kajal push ho jayega as a last element
// arrayname.shift() ; se first element nikl jayega array ka bhr 
// arrayname.unshift("kajal"); se array mai first elemt kajal push ho jayega 
// arrayname.tostring() ye array ko string mai convert kar deta hai 
// arrayname.sort() ye array ko sort kar deta hia 







// document were used in js to acess html elements ..by using document we can danamilcally acces the elemnets of web page 
// document.getelementbyid('click')....means we want to acces that element jiski id click hai 
*/
let elemclass = document.getElementsByClassName("contaniner");// elem mai store kra liya pura vo class and abb usme pesnt elemts ko one by one acccess karenge
console.log(elemclass);
elemclass[0].style.background ="yellow" ; 
elemclass[0].classList.add("border-style");
