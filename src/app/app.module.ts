import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CarritoService } from './service/carrito.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  // {path: 'directivas', component: DirectivaComponent},
  // {path: 'clientes', component: ClientesComponent},
  // {path: 'clientes/form', component: FormComponent},
  // {path: 'clientes/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,     
  ],
  imports: [
    BrowserModule,
    PagesModule,
    NgbModule,
    HttpClientModule,    
    RouterModule.forRoot(routes)
  ],
  providers: [CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
