/*
    //array
    //collection of indexed elements called as array
    //[]
    //index starts from "0"
    let arr = [10,20,30,40,50];
    console.log( arr[0],arr[2],arr[4],arr[5],arr[-1] );
    //10 30 50 undefined undefined

    let arr1 = [100,200,300,400,500];
    console.log( arr1.length );                         //5
    arr1.length = 3;
    console.log( arr1[0],arr1[2],arr1[3],arr1[4] );     //100 300 undefined undefined


    let arr2 = [10,20,30,40,50,60,70,80,90,100];
    delete arr2[0];
    console.log( arr2.length );                         //10
    delete arr2[4];
    console.log( arr2.length );                         //10


    let arr3 = [20,30,40];
    console.log( arr3 );                                //[ 20, 30, 40 ]
    arr3.push(50);
    console.log( arr3 );                                //[ 20, 30, 40, 50 ]
    arr3.unshift(10);
    console.log( arr3 );                                //[ 10, 20, 30, 40, 50 ]
    arr3.pop();
    console.log( arr3 );                                //[ 10, 20, 30, 40 ]
    arr3.shift();
    console.log(arr3);                                  //[ 20, 30, 40 ]



    let arr4 = [100,200,300,400,500,600,700,800,900,1000];
    arr4.splice(4,3);
    console.log( arr4 );                //[100,200,300,400,800,900,1000]
    arr4.splice( 4,1 );
    console.log(arr4);                  //[ 100, 200, 300, 400, 900, 1000 ]
    arr4.splice(1,1);
    console.log( arr4 );                //[ 100, 300, 400, 900, 1000 ]
    arr4.splice(4,1);
    console.log(arr4);                  //[ 100, 300, 400, 900 ]
    arr4.splice(3,0,500,600,700,800);
    console.log(arr4);                  
    arr4.splice(1,0,200);
    console.log(arr4);
    arr4.splice(9,0,1000);
    console.log(arr4);



    let arr5 = [10,20,30,40,50];
    arr5.splice(1,2);
    console.log(arr5);          //[ 10, 40, 50 ]
    arr5.splice(1,1,20,30,40);  
    console.log(arr5);          //[ 10, 20, 30, 40, 50 ]
    arr5.splice(0,1);
    console.log(arr5);          //[ 20, 30, 40, 50 ]
    arr5.splice(0,1,10,20);
    console.log(arr5);          //[ 10, 20, 30, 40, 50 ]
    arr5.splice(4,1);
    console.log(arr5);          //[ 10, 20, 30, 40 ]
    arr5.splice(4,0,50);
    console.log(arr5);          //[ 10, 20, 30, 40, 50 ]


    let arr6 = [10,20,30,40,50,60,70,80,90,100];
    console.log(
        arr6.findIndex((element,index)=>{
            return element == 50;
        })
    );              //4
    console.log(
        arr6.findIndex((element,index)=>{
            return element == 90;
        })
    );          //8

    arr6.splice(arr6.findIndex((element,index)=>{
        return element == 30;
    }),1);
    console.log(arr6);
*/


/*
//slice
let arr = [10,20,30,40,50,60,70,80,90,100];
console.log( arr.slice(4,6) );                      //[ 50, 60 ]
console.log( arr.slice(6,9) );                      //[ 70, 80, 90 ]
console.log( arr.slice(1,3) );                      //[ 20, 30 ]
console.log( arr.slice(0,1) );                      //[ 10 ]
console.log( arr.slice(9) );                        //[ 100 ]


// ... operator called as spread operator
// used to concat the arrays
let arr1 = [10,20,30,40,50];
let arr2 = [60,70,80,90,100];
let arr3 = [...arr1,...arr2];
console.log( arr3 );



let arr4 = [10,20,30,40,50,60,70,80,90,100];
//[60,70,80,90,100,10,20,30,40,50]
//[400,150]
//550
console.log( [...arr4.slice(5,10),...arr4.slice(0,5)] );
*/


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    })
);          //[ 100, 200, 300, 400, 500 ]


console.log(
    [100,200,300,400,500].map((element,index)=>{
        return "$" + element;
    })
);          //[ '$100', '$200', '$300', '$400', '$500' ]


console.log(
    [100,200,300,400,500].filter((element,index)=>{
        return element>=300;
    })
);          //[ 300, 400, 500 ]


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*10;
    }).filter((element,index)=>{
        return element<=20;
    })
);


console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);          //15


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element<=500;
    }).reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);

































































