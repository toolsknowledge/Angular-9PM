//interfaces
//we dont know implementations
//interface keyword
// => json      => classes
// implements keyword
var obj1 = {
    fun_one: function () { console.log("Hello_1"); },
    fun_two: function () { console.log("Hello_2"); },
    fun_three: function () { console.log("Hello_3"); }
};
obj1.fun_one();
obj1.fun_two();
obj1.fun_three();
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        console.log("Hello_1");
    };
    class_one.prototype.fun_two = function () {
        console.log("Hello_2");
    };
    class_one.prototype.fun_three = function () {
        console.log("Hello_3");
    };
    return class_one;
}());
var obj2 = new class_one();
obj2.fun_one();
obj2.fun_two();
obj2.fun_three();
