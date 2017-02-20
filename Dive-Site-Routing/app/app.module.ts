import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importing components to be used in the application
import { AppComponent } from './app.component';
import { SiteListComponent } from './site-list.component';
import { AddSiteComponent } from './add-site.component';
import { EditSiteComponent } from './edit-site.component';
import { DeleteSiteComponent } from './delete-site.component';
import { SiteManagementService } from './site-management.service';
import { ActionableDirective } from './actionable.directive';

// Importing the declared routes.
import {RoutingModule} from './app.routes';



@NgModule({
    imports: [
        BrowserModule,
        RoutingModule
    ],
    // declare ALL the componts that will be used in the module
    declarations: [
        AppComponent,
        SiteListComponent,
        AddSiteComponent,
        EditSiteComponent,
        DeleteSiteComponent,
        ActionableDirective
    ],    
    providers: [SiteManagementService],
    bootstrap: [AppComponent]
})
export class AppModule { }
