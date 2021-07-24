//json
//java script object notation
//json, used to transfer the data over the "network"
//json is "light" weight
//objects ==> {}        arrays == []     data == key & value pairs

/*
    let obj = {
        "sub_one" : "Angular12",
        "sub_two" : "NodeJS",
        "sub_three" : "MongoDB"
    };
    console.log( obj.sub_one,
                obj.sub_two,
                obj.sub_three );   //Angular12 NodeJS MongoDB
*/

/*
    let obj = {
        "key1" : "Hello_1",
        "key2" : "Hello_2",
        "key3" : "Hello_3"
    };
    //ES6
    //for...in loop
    for(let key in obj){
        console.log( obj[key] );
    }
*/


let obj1 = {
    "frontend":{
        "sub" : ["Angular12"],
        "backend":{
            "sub":["NodeJS"],
            "database":{
                "sub":["MongoDB"]
            }
        }
    }
}
console.log( obj1.frontend.sub[0],
             obj1.frontend.backend.sub[0],
             obj1.frontend.backend.database.sub[0] );
//Angular12 NodeJS MongoDB


let obj = {
    "key1" : "Hello_1"
}

let obj2 = {
    "key2" : "Hello_2"
}

let obj3 = {...obj,...obj2};
console.log( obj3 );            //{ key1: 'Hello_1', key2: 'Hello_2' }





















































