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
var class_one = /** @class */ (function () {
    function class_one(arg1) {
        this.arg1 = arg1;
    }
    return class_one;
}());
;
var class_two = /** @class */ (function () {
    function class_two() {
    }
    class_two.prototype.myFun = function () {
        return "Hello";
    };
    return class_two;
}());
var obj = new class_one(new class_two());
console.log(obj.arg1.myFun());
