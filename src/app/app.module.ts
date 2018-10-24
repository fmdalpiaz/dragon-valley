import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
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
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
