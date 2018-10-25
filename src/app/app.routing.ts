import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDragonsComponent } from './dragons/list-dragons/list-dragons.component';
import { ViewDragonComponent } from './dragons/view-dragon/view-dragon.component';
import { ManipulateDragonComponent } from './dragons/manipulate-dragon/manipulate-dragon.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dragons' },
    { path: 'dragons', component: ListDragonsComponent },
    { path: 'dragons/new', component: ManipulateDragonComponent },
    { path: 'dragons/edit/:slug', component: ManipulateDragonComponent },
    { path: 'dragons/:slug', component: ViewDragonComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
