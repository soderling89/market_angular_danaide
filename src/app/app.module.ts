import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CarritoService } from './service/carrito.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,     
  ],
  imports: [
    BrowserModule,
    PagesModule,
    NgbModule,
    HttpClientModule    
  ],
  providers: [CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
