//class
//collection of variables and functions
//we can create the class by using "class" keyword
//we can create object to class by using "new" keyword
//we can define constructor by using "constructor" keyword
//we can refer current class members by using "this" keyword
//we have three modifiers
//1) public     2) private      3) protected
//recomended modifier for variables is "private"
//the recomended modifier for functions is public

/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;
        constructor(){
            this.sub_one = "Angular12";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        }
        public getSubOne():string{
            return this.sub_one;
        }
        public getSubTwo():string{
            return this.sub_two;
        }
        public getSubThree():string{
            return this.sub_three;
        }
    };
    let obj:class_one = new class_one();
    console.log(
        obj.getSubOne(),
        obj.getSubTwo(),
        obj.getSubThree()
    );
*/


/*
    class class_one{
        constructor(public arg1:any,
                    public arg2:any,
                    public arg3:any){}
    };
    let obj1:class_one = new class_one("Angular12","NodeJS","MongoDB");
    console.log( obj1.arg1, obj1.arg2, obj1.arg3 );         //Angular12 NodeJS MongoDB

    let obj2:class_one = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( obj2.arg1, obj2.arg2, obj2.arg3 );         //ReactJS NodeJS MongoDB

    let obj3:class_one = new class_one("VueJS","NodeJS","MongoDB");
    console.log( obj3.arg1, obj3.arg2, obj3.arg3 );         //VueJS NodeJS MongoDB
*/


/*
    class class_one{
        constructor(public arg1:any){}
    };
    class class_two{
        public myFun():string{
            return "Hello";
        }
    }

    let obj1 = new class_two();
    let obj:class_one = new class_one( obj1 );
    console.log(
        obj.arg1.myFun()
    );      //Hello
*/



/*
    //single level inheritance
    class class_one{
        public fun_one():any{
            return "Hello_1";
        }
    };
    class class_two extends class_one{
        public fun_two():any{
            return "Hello_2";
        }
    }
    let obj1:class_one = new class_one();
    console.log( obj1.fun_one() );

    let obj2:class_two = new class_two();
    console.log( obj2.fun_one(), obj2.fun_two() );
*/


/*
    //multi level inheritance
    class class_one{
        public var_one:string = "Hello_1";
    }

    class class_two extends class_one{
        public var_two:string = "Hello_2";
    }

    class class_three extends class_two{
        public var_three:string = "Hello_3";
    }

    let obj1:class_one = new class_one();
    console.log( obj1.var_one );

    let obj2:class_two = new class_two();
    console.log( obj2.var_one, obj2.var_two );

    let obj3:class_three = new class_three();
    console.log( obj3.var_one, obj3.var_two, obj3.var_three );
*/


/*
    class Parent{
        arg1:any;
        constructor(param1:any){
            this.arg1 = param1;
        }
    }

    class Child extends Parent{
        arg2:any;
        constructor(param1:any,param2:any){
            super(param1);
            this.arg2 = param2;
        }
    }

    class Subchild extends Child{
        arg3:any;
        constructor(param1:any,param2:any,param3:any){
            super(param1,param2);
            this.arg3 = param3;
        }
    }
    let obj:Subchild = new Subchild("Hello_1","Hello_2","Hello_3");
    console.log( obj.arg1, obj.arg2, obj.arg3 );
*/


/*
    class Parent1{}

    class Parent2{}

    class Child extends Parent1,Parent2{}
    //multiple inheritance not supported by classes in typescript
*/


/*
class Parent{}

class Child1 extends Parent{}

class Child2 extends Parent{}

class Child3 extends Parent{}
*/


/*
    //hybrid inheritance not suooprted by typescript
    class Parent{}

    class Child1 extends Parent{}

    class Child2 extends Parent{}

    class Subchild extends Child1,Child2{}
*/



























































































