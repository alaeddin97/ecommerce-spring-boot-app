import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    {path:'products', component: ProductListComponent}
];

@NgModule(
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports : [RouterModule]
    }
)

export class AppRoutingModule {}