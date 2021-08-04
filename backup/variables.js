//variables
//variables are used to "store" the data
//Ex. string,number,boolean,objects,.....
//"var" , "let" or "const" keyword
//"let" and "const" keyword introduced in "ES6"
// a-z , A-Z, 0-9, $ and _
//variables should not start with digits

// string
// collection of "characters" called as "string"
//  ""(double quotes), ''(single quotes) and ``(backtick)
// ``(backtick) operator introduced in "ES6"
// ``(backtick) operator also called as "template literal"
// ``(backtick) operator used to define the "paragraphs"
var sub = "Angular 12";
var wish = `welcome to ${sub}`;
console.log(wish);                  //welcome to Angular 12


var backend = "Spring Boot";
var database = "MongoDB";
var fullstack = `${sub}.....${backend}.....${database}`;
console.log(fullstack);             //Angular 12.....Spring Boot.....MongoDB



var tbl_name = "employees";
var sal = 50000;
var sql_query1 = `select * from ${tbl_name} where esal>${sal}`;
console.log(sql_query1);            //select * from employees where esal>50000

var uname = "ashokit";
var upwd = "ashokit123";
var sql_query1 = `select * from ${tbl_name} where uname='${uname}' and upwd='${upwd}'`;
console.log(sql_query1);


//var 123abc;   //Error
var $123;
var _123;
var $abc_123;
//var abc#123;      //Error



//number
//decimal       double      hexadecimal     octal       binary
//hexadecimal number prefix with "0x"
//octal number prefix with "0o"
//binary number prefix with "0b"
var decimal = 100;
var double = 100.12345;
var hexadecimalNum = 0x123ABC;
var octalNum = 0o123;
var binaryNum = 0b1010;
console.log( decimal, double, hexadecimalNum, octalNum, binaryNum );



//array
//collection of indexed elements called as "array"
//[]
//index starts from "0"
//forEach()   for...of()..... for.....in()
var num_arr1 = [10,20,30,40,50];
var num_arr2 = [60,70,80,90,100];
num_arr1.forEach((element,index)=>{
    console.log(element,num_arr2[index]);
});


//json
//java script object notation
//transfer the data over the network
//json is light weight
//objects ===> {}    arrays ===> []     data ===> key & value pairs
var obj = {
    "sub_one" : "Angular12",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
//for....in loop
for(let key in obj){
    console.log( obj[key] );
}


































































