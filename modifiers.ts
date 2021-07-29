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














































































