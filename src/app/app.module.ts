import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { PriceNumberPrice } from './shared/price.pipe';
import { GreenTextDirective } from './shared/greenText.directive';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    //Pipes
    PriceNumberPrice,

    //Directives
    GreenTextDirective,

    NovoProdutoComponent,

    HomeComponent,

    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
