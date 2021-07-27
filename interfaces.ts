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

























