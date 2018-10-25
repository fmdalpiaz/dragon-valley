import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { ScaffoldingComponent } from './core/scaffolding/scaffolding.component';
import { HeaderComponent } from './core/header/header.component';

import { ViewDragonComponent } from './dragons/view-dragon/view-dragon.component';
import { ListDragonsComponent } from './dragons/list-dragons/list-dragons.component';
import { ManipulateDragonComponent } from './dragons/manipulate-dragon/manipulate-dragon.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

import { OrderPipe } from 'ngx-order-pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

@NgModule({
    declarations: [
        AppComponent,
        ScaffoldingComponent,
        HeaderComponent,
        ViewDragonComponent,
        ListDragonsComponent,
        ManipulateDragonComponent,
        PageNotFoundComponent,
        OrderPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
