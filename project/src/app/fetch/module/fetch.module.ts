import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import FetchComponent from "../components/fetch.component";
import FetchEffects from "../effects/fetch.effects";
import { FetchReducer } from "../reducer/fetch.reducer";

@NgModule({
    declarations:[FetchComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:FetchComponent}]),
             HttpClientModule,
             StoreModule.forRoot({"fetch":FetchReducer}),
             EffectsModule.forRoot([FetchEffects])
            ],
    providers:[],
    exports:[FetchComponent]
})
export class FetchModule{}