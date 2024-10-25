import { Routes } from '@angular/router';
import { ComparatorComponentComponent } from './phoneComparator-page/comparator-component/comparator-component.component';
import { HomeComponent } from './falsoHome/home.component';
import { ProductContainerComponent } from './sec-products/product-container/product-container.component';
import { ProductPageComponent } from './product/product-page/product-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: "comparador", component: ComparatorComponentComponent },
    { path: "testZone", component: ProductContainerComponent },

    { path: "product", component: ProductPageComponent},
]
