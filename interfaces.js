//interfaces
//we dont know implementations
//interface keyword
// => json      => classes
// implements keyword
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    return class_one;
}());
var obj = new class_one("Hello_1", "Hello_2", "Hello_3");
console.log(obj.var_one, obj.var_two, obj.var_three);
