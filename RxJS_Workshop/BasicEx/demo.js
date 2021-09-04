import { Observable } from "rxjs";
import { map,filter } from "rxjs/operators";

function MyTimer(observer){
    setInterval(()=>{
        return observer.next(Math.random());
    },1000);
};


const obs1 = Observable.create(MyTimer);
const obs2 = obs1.pipe( map(res=>{ return Math.round(res*100) }),
                        filter((res)=> {return res>50}) );


obs2.subscribe(res=>myFun(res));

function myFun(res){
    console.log(res);
    
}