"use strict";
exports.__esModule = true;
var demo1_1 = require("./demo1");
console.log(demo1_1.var_one);
//import { sub_one,sub_two,sub_three } from "./demo1";
var subjects = require("./demo1");
console.log(subjects.sub_one, subjects.sub_two, subjects.sub_three, subjects.var_one);
var demo1_2 = require("./demo1");
console.log(demo1_2["default"]());
var demo1_3 = require("./demo1");
console.log(new demo1_3.class_one().var_one);
var obj = {
    var_one: "Hello"
};
console.log(obj.var_one);
var demo1_4 = require("./demo1");
console.log(demo1_4.obj.key1);
