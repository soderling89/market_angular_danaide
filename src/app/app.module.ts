import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CarritoService } from './service/carrito.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,     
  ],
  imports: [
    BrowserModule,
    PagesModule,
    NgbModule    
  ],
  providers: [CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
