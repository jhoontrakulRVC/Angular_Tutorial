import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importing components to be used in the application
import { AppComponent } from './app.component';
import { SiteListComponent } from './site-list.component';
import { AddSiteComponent } from './add-site.component';
import { EditSiteComponent } from './edit-site.component';
import { DeleteSiteComponent } from './delete-site.component';



@NgModule({
    imports: [BrowserModule],
    // declare ALL the componts that will be used in the module
    declarations: [AppComponent, SiteListComponent, AddSiteComponent, EditSiteComponent, DeleteSiteComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
