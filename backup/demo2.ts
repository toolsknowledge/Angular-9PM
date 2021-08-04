import { var_one } from "./demo1";
console.log( var_one );

//import { sub_one,sub_two,sub_three } from "./demo1";
import * as subjects from "./demo1";
console.log( subjects.sub_one,
             subjects.sub_two,
             subjects.sub_three,
             subjects.var_one );

import   fun_one   from "./demo1";
console.log( fun_one() );

import { class_one } from "./demo1";
console.log( new class_one().var_one );


import { interface1 } from "./demo1";
let obj:interface1 = {
    var_one : "Hello"   
}
console.log( obj.var_one );

import { obj as obj1 } from "./demo1";
console.log( obj1.key1 );