//interfaces
//we dont know implementations
//interface keyword
// => json      => classes
// implements keyword

/*
    interface interface1{
        var_one:string;
        var_two:string;
        var_three:string;
    }
    let obj:interface1 = {
        var_one : "Angular12",
        var_two : "NodeJS",
        var_three : "MongoDB"
    }
    console.log( obj.var_one, obj.var_two, obj.var_three );

    class class_one implements interface1{
        var_one:string = "ReactJS";
        var_two:string = "Deno";
        var_three:string = "CassandraDB";   
    }
    let obj1:class_one = new class_one();
    console.log(obj1.var_one, obj1.var_two, obj1.var_three );

*/


/*
interface interface1{
    fun_one : ()=>void;
    fun_two : ()=>void;
    fun_three : ()=>void;
}
let obj1:interface1 = {
    fun_one: ():void=>{ console.log("Hello_1") },
    fun_two: ():void=>{ console.log("Hello_2") },
    fun_three:():void=>{ console.log("Hello_3") }
}
obj1.fun_one();
obj1.fun_two();
obj1.fun_three();

class class_one implements interface1{
    fun_one():void{
        console.log("Hello_1");
    }
    fun_two():void{
        console.log("Hello_2");
    }
    fun_three():void{
        console.log("Hello_3");
    }
}
let obj2:class_one = new class_one();
obj2.fun_one();
obj2.fun_two();
obj2.fun_three();
*/


/*
    interface interface1{
        var_one:any;
    }
    interface interface2 extends interface1{
        var_two:any;
    }
    let obj:interface2 = {
        var_one : "Hello_1",
        var_two : "Hello_2"
    }
    console.log( obj.var_one, obj.var_two );
    //Hello_1 Hello_2
*/



/*
    interface interface1{
        fun_one : ()=>any;
    }

    interface interface2 extends interface1{
        fun_two : ()=>any;
    }

    interface interface3 extends interface2{
        fun_three : ()=>any;
    }

    class class_one implements interface3{
        fun_one():any{
            return {"key1":"Hello_1"}
        }
        fun_two():any{
            return {"key1":"Hello_2"}
        }
        fun_three():any{
            return {"key1":"Hello_3"}
        }
    }

    let obj:class_one = new class_one();
    console.log( obj.fun_one().key1,
                obj.fun_two().key1,
                obj.fun_three().key1 );
*/



/*
interface interface1{
    var_one:any;
}

interface interface2{
    var_two:any;
}

interface interface3 extends interface1,interface2{
    var_three:any;
}

class class_one implements interface3{
    var_one:any;
    var_two:any;
    var_three:any;
    constructor(arg1:any,arg2:any,arg3:any){
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
}

let obj:class_one = new class_one("Hello_1","Hello_2","Hello_3");
console.log( obj.var_one, obj.var_two, obj.var_three );
*/


/*
interface interface1{
    var_one:any;
}
interface interface2 extends interface1{
    var_two:any;
}
interface interface3 extends interface1{
    var_two:any;
};
interface interface4 extends interface1{
    var_two:any;
}
*/


/*
    interface interface1{
        var_one:any;
    }
    interface interface2 extends interface1{
        var_two:any;
    }
    interface interface3 extends interface1{
        var_two:any;
    }
    interface interface4 extends interface2,interface3{
        var_two:any;
    }
*/












































































































































