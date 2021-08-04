//when ever we know partial implementation, then we will choose abstract classes
//we will declare abstract classes by using "abstract" keyword

/*
    abstract class class_one{
        public fun_one():any{
            return {"key1":"Hello_1"}
        }

        abstract fun_two():any;
    }

    class class_two extends class_one{
        public fun_two():any{
            return {"key1":"Hello_2"}
        }
    }

    let obj:class_two = new class_two();
    console.log( obj.fun_one().key1, obj.fun_two().key1 );              //Hello_1 Hello_2
*/


/*
abstract class class_one{
    abstract fun_one():string;
};

abstract class class_two extends class_one{
    abstract fun_two():string;
}

abstract class class_three extends class_two{
    abstract fun_three():string;
}

class my_class extends class_three{
    public fun_one():string{
        return "Angular12";
    }
    public fun_two():string{
        return "NodeJS";
    }
    public fun_three():string{
        return "MongoDB";
    }
}
let obj:my_class = new my_class();
console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
//Angular12 NodeJS MongoDB
*/


interface interface1{
    fun_one : ()=>any;
}

abstract class class_one implements interface1{
    public fun_one():any{
        return "Hello_1";
    }
    abstract fun_two():any;
}

class class_two extends class_one{
    public fun_two():any{
        return "Hello_2";
    }
}

let obj:class_two = new class_two();
console.log(
    obj.fun_one(), obj.fun_two()
);      //Hello_1 Hello_2










































