import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {SampleService} from './sample.service';
import {CalcService} from './calc.service';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from'@angular/forms';

import { from } from 'rxjs';

const routes:Routes=[{path:"new",component:NewComponent},
{path:"edit",component:EditComponent},
{path:"delete",component:DeleteComponent},
{path:"view",component:ViewComponent},
{path:"server",component:TestComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [SampleService,CalcService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
