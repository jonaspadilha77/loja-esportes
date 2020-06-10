import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[];
  constructor(
    private produtosService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

  load() {
    this.produtosService.getData().subscribe(res => {
      this.produtos = res;
    });
  }

  ngOnInit() {
    this.load();
  }

  onRemove(produto: Produto) {
    this.produtosService.removerProduto(produto).subscribe(() => this.load());
  }

  openEdit(id: number) {
    this.router.navigate(['editar-produto/' + id]);
  }

}
