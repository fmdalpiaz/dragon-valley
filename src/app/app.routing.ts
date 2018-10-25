import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScaffoldingComponent } from './core/scaffolding/scaffolding.component';
import { ListDragonsComponent } from './dragons/list-dragons/list-dragons.component';
import { ViewDragonComponent } from './dragons/view-dragon/view-dragon.component';
import { ManipulateDragonComponent } from './dragons/manipulate-dragon/manipulate-dragon.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dragons' },
    { path: '', component: ScaffoldingComponent, children: [
        { path: 'dragons', component: ListDragonsComponent },
        { path: 'dragons/new', component: ManipulateDragonComponent },
        { path: 'dragons/edit/:slug', component: ManipulateDragonComponent },
        { path: 'dragons/:slug', component: ViewDragonComponent }
    ]},
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
