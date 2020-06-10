import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto.model';
import { NgForm } from '@angular/forms';
import { ProdutoService } from '../produto/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css'],
})
export class NovoProdutoComponent implements OnInit {

  private novoProduto: Produto = {
    id: 0,
    titulo: '',
    descricao: '',
    preco: 0,
    imageUrl: ''
  };

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  private editMode = false;

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.editMode = !!id;

    if (this.editMode) {
      this.produtoService.getDataById(id).subscribe(produto => this.novoProduto = produto);
    }
  }

  onSubmit(form: NgForm, index?: number) {
    const dataForm: Produto = form.value;
    if (this.editMode) {
      return this.produtoService.editProduto(this.novoProduto).subscribe(() => this.redirecionarLista());
    }
    this.produtoService.addProduto(dataForm).subscribe(() => this.redirecionarLista());

  }

  redirecionarLista() {
    this.router.navigate(['lista-produtos']);
  }


}
