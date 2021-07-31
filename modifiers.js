//public
//private
//protected
//public
//public modifier applicable to "variables", "functions", "constructor"
//public modifier not applicable to "classes"
//public members are accessable by class "objects"
//public members accessable to "child" classes also
/*
    public class class_one{}
    //'public' modifier cannot appear on a module or namespace element.
*/
/*
    class class_one{
        public var_one:string;
        public constructor(){
            this.var_one = "Hello_1";
        }
        public fun_one():string{
            return this.var_one;
        }
    }
    class class_two extends class_one{}
    let obj:class_two = new class_two();
    console.log( obj.fun_one() );               //Hello_1
*/
//private
//it's recomended to declare "variables" by using private modifier
//private modifier applicable to "variables", "functions" and "constructor" also
//private modifier "not applicable" to classes
//we can't access private members by using class "objects"
//private members won't accessable to "child classes"
//we can't create object to the private constructor
/*
    private class class_one{}
    //'private' modifier cannot appear on a module or namespace element.
*/
/*
    class class_one{
        private constructor(){}
    }
    let obj:class_one = new class_one();
    //Constructor of class 'class_one' is private and only accessible within the class declaration.
*/
/*
    class class_one{
        private var_one:string = "Hello";
    }
    class class_two extends class_one{}
    let obj:class_two = new class_two();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/
/*
    class class_one{
        private var_one:string = "Hello";
    }
    let obj:class_one = new class_one();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/
//protected
//protected members available to "child" classes
//protected members, we can't access by using class "objects"
//protected applicable to variables, functions, constructor
//protected won't applicable to class level
/*
    protected class class_one{}
    //'protected' modifier cannot appear on a module or namespace element.
*/
/*
    class class_one{
        protected constructor(){}
    }
    new class_one();
    //Constructor of class 'class_one' is protected and only accessible within the class declaration.
*/
/*
    class class_one{
        protected var_one:string = "Hello";
        protected fun_one():string{
            return "Hello";
        }
    }
    let obj:class_one = new class_one();
    obj.var_one;
    obj.fun_one();
*/
/*
    class class_one{
        protected var_one:string = "Hello";
    };

    class class_two extends class_one{

    };
    let obj:class_two = new class_two();
    obj.var_one;
    //Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
*/
/*
    class class_one{
        protected var_one:string = "Hello_1";
        protected fun_one():string{
            return "Hello_2";
        }
    }
    class class_two extends class_one{
        var_two:string = this.var_one;
        fun_two():string{
            return this.fun_one();
        };
    }
    let obj:class_two = new class_two();
    console.log(
        obj.var_two,
        obj.fun_two()
    );   //Hello_1 Hello_2
*/
//1) this
//2) super
//3) static
//4) readonly
//5) type
/*
    //type
    type my_name = string;
    let var_one:my_name = "Hello";
    console.log( var_one );             //Hello


    type x = string | number | boolean;
    function fun_one(arg1:x):void{
        console.log( arg1 );
    }
    fun_one("Hello");
    fun_one(100);
    fun_one(true);
    //fun_one([]);
    //Argument of type 'undefined[]' is not assignable to parameter of type 'x'.


    type subjects = "Angular12" | "NodeJS" | "ReactJS" | "VueJS" | "MongoDB";
    function fun_two(sub:subjects):void{
        console.log( sub );
    }
    fun_two("Angular12");
    fun_two("MongoDB");
    //fun_two("Cyber Secuirity");
    //Argument of type '"Cyber Secuirity"' is not assignable to parameter of type 'subjects'.
*/
//static
//static members, we can access by using class names
//static members, we can't access by using class objects
//we can't initilize static members by using constructor
/*
    class class_one{
        static var_one:string;
        constructor(){
            this.var_one = "Hello";
        }
    }
    //Property 'var_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.var_one' instead?
*/
/*
    class class_one{
        static var_one:any = "Hello_1";
        static fun_one():any{
            return "Hello_2";
        }
    }
    console.log(
        class_one.var_one,
        class_one.fun_one()
    );
    //Hello_1 Hello_2
*/
/*
    class class_one{
        static var_one:any = "Hello";
    }
    let obj:class_one = new class_one();
    console.log( obj.var_one );
    //Property 'var_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.var_one' instead?
*/
/*
class class_one{
    public fun_one():any{
        return "Hello";
    }
    private constructor(){}
    static fun_two():any{
        return new class_one();
    }
}
console.log(
    class_one.fun_two().fun_one()
);      //Hello
*/
//readonly
//we can only read the data, but we can't modify the data
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello";
    }
    return class_one;
}());
;
console.log(new class_one().var_one);
