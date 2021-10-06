import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import  ProductsComponent  from "../components/product.component";
import {ProductsEffects} from "../effects/products.effects";
import { ProductsReducer } from "../reducer/products.reducer";

@NgModule({
    declarations:[ProductsComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:ProductsComponent}]),
             HttpClientModule,
             EffectsModule.forFeature([ProductsEffects]),
             StoreModule.forFeature("products",ProductsReducer)],
    providers:[],
    exports:[ProductsComponent]
})
export class ProductsModule{}