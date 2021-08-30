import { Injectable } from "@angular/core";
@Injectable({
    providedIn : "root"
})
export default class SecondService{
    public myFun():any{
        return [
            {"name":"p_one","cost":10000,"brand":"niki","rating":1.5,"image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p1.jpg"},
            {"name":"p_one","cost":10000,"brand":"niki","rating":1.5,"image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p2.jpg"},
            {"name":"p_one","cost":10000,"brand":"niki","rating":1.5,"image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p3.jpg"},
            {"name":"p_one","cost":10000,"brand":"niki","rating":1.5,"image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p4.jpg"},
            {"name":"p_one","cost":10000,"brand":"niki","rating":1.5,"image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p5.jpg"},
            {"name":"p_one","cost":10000,"brand":"niki","rating":1.5,"image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p6.jpg"}
        ];
    }
}