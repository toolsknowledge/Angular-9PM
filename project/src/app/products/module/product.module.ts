import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RatingModule } from "ngx-rating";
import { NgxStarRatingModule } from "ngx-star-rating";
import  ProductsComponent  from "../components/product.component";
import {ProductsEffects} from "../effects/products.effects";
import { ProductsReducer } from "../reducer/products.reducer";

@NgModule({
    declarations:[ProductsComponent],
    imports:[CommonModule,
             FormsModule,
             NgxStarRatingModule,
             ReactiveFormsModule,
             RouterModule.forChild([{path:"",component:ProductsComponent}]),
             HttpClientModule,
             EffectsModule.forFeature([ProductsEffects]),
             StoreModule.forFeature("products",ProductsReducer)],
    providers:[],
    exports:[ProductsComponent]
})
export class ProductsModule{}