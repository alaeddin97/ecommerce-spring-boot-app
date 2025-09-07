import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
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