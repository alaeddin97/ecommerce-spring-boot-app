import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./product-details/product-details/product-details.component";

const appRoutes: Routes = [
    {path:':id/details', component: ProductDetailsComponent},
    {path:'category/:id', component: ProductListComponent},
    {path:'products', component: ProductListComponent},
    { path: '', redirectTo: 'products', pathMatch: 'full'}

];

@NgModule(
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports : [RouterModule]
    }
)

export class AppRoutingModule {}