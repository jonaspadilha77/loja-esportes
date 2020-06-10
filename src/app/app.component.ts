import { Component } from '@angular/core';
import { ProdutoService } from './produto/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProdutoService]
})
export class AppComponent {
  title = 'treinamento-angular';
}
