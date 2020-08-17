import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListempresaComponent } from './components/listempresa/listempresa.component';
import { EmpresaFormComponent } from './components/empresa-form/empresa-form.component';
import { EmpresaService } from '.shared-service/empresa.service';

const appRoutes:Routes=[
    {path:'', component:ListempresaComponent},
    {path:'op', component:EmpresaFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListempresaComponent,
    EmpresaFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
