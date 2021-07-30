import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardViewTextComponent } from './components/card-view-text/card-view-text.component';
import { CardCupponFooterComponent } from './components/card-cuppon-footer/card-cuppon-footer.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    CardViewTextComponent,
    CardCupponFooterComponent,
    FooterHomeComponent,
    CatalogComponent,
    ComicsComponent,
    ModalInfoComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CarouselModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:5000,
      progressBar:true,
      progressAnimation:"increasing",
      preventDuplicates:true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
