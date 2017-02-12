import './vendor.ts';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { Jh4DemoSharedModule, UserRouteAccessService } from './shared';
import { Jh4DemoAdminModule } from './admin/admin.module';
import { Jh4DemoAccountModule } from './account/account.module';
import { Jh4DemoEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { HomeComponent } from './home';
import { AnythingComponent } from './anything';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';


@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        Jh4DemoSharedModule,
        Jh4DemoAdminModule,
        Jh4DemoAccountModule,
        Jh4DemoEntityModule
    ],
    declarations: [
        JhiMainComponent,
        HomeComponent,
        AnythingComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class Jh4DemoAppModule {}
