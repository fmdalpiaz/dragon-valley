import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDragonComponent } from './dragons/view-dragon/view-dragon.component';
import { ListDragonsComponent } from './dragons/list-dragons/list-dragons.component';
import { ManipulateDragonComponent } from './dragons/manipulate-dragon/manipulate-dragon.component';

@NgModule({
    declarations: [
        AppComponent,
        ViewDragonComponent,
        ListDragonsComponent,
        ManipulateDragonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
