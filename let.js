//let keyword
//let keyword introduced in ES6
//let keyword used to declare the variables

/*
    for(let i=0;i<5;i++){
    }
    console.log(i);                 //let:ReferenceError: i is not defined             //var:5
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/


/*
    //global variable
    let data = 100;
    {
        //local variable
        let data = 200;  
    }
    console.log( data );                //var : 200         let : 100
    //var keyword raises the global polluting issue
    //let keyword overcomes the global polluting issue
*/




/*
    //declare the variable
    //initilize the variable
    //access the variable
    console.log( data );                //var : undefined
    let data = "Hello";                 //let : ReferenceError: Cannot access 'data' before initialization
    //variable hoisting issue raised by var keyword
    //we can overcome variable hoisting by using "let" keyword
*/


/*
    let data = 100;
    let data = 200;
    console.log( data );                    //var : 200
                                            //let : SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables                                        
*/



/*
                var                                 let
    ES1                                             ES6
    allows duplicate variables                      won't allow duplicate variables        
    variable hoisting raised                        we can overcome variable hoisting
    global polluting issue raised                   we can overcome global polluting issue
    var keyword containes global scope              let keyword containes local scope
    scope rule denied by var keyword                scope rule obeys by let keyword
*/




//const
//ES6
//reinitilization not possible
const data = 100;
//data = 200;                 //TypeError: Assignment to constant variable.


const arr = [10,20,30,40,50];
//arr=[];
arr[0] = 100;
arr[4] = 500;
console.log( arr );             //[ 100, 20, 30, 40, 500 ]
arr.push(60);
console.log(arr);               //[ 100, 20, 30, 40, 500, 60 ]


const obj = {
    "sub_one" : "Angular12",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
}
//obj={}
obj.sub_one = "Angular12 with TypeScript";
obj.sub_two = "Go Language better Than NodeJS";
obj.sub_three = "CassandraDB";
obj.sub_for="FullStack";
console.log(obj);





























































