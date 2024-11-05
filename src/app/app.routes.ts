import { Routes } from '@angular/router';
import { ComparatorComponentComponent } from './phoneComparator-page/comparator-component/comparator-component.component';
import { HomeComponent } from './falsoHome/home.component';
import { ProductContainerComponent } from './sec-products/product-container/product-container.component';
import { ProductGalleryComponent } from './product/product-gallery/product-gallery.component';
import { ProductPageComponent } from './product/product-main-gae/product-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: "comparador", component: ComparatorComponentComponent },
    { path: "testZone", component: ProductContainerComponent },
    { path: "product", component: ProductGalleryComponent},
<<<<<<< Updated upstream
    { path: "product2", component:ProductPageComponent },

]
