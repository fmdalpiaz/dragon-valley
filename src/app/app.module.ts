import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { ViewDragonComponent } from './dragons/view-dragon/view-dragon.component';
import { ListDragonsComponent } from './dragons/list-dragons/list-dragons.component';
import { ManipulateDragonComponent } from './dragons/manipulate-dragon/manipulate-dragon.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

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
        HttpClientModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
