import { Produto } from './produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class ProdutoService {

    private produtoUrl = '/produtos';

    constructor(private http: HttpClient) { }

    public data: Produto[] = [];


    getData = (): Observable<Produto[]> => {
        return this.http.get<Produto[]>(this.produtoUrl)
            .pipe(
                map((produtos: Produto[]) => produtos),
                tap({
                    next: (produtos) => {
                        this.data = produtos;
                    }
                })
            );
    }

    getDataById = (id: number): Observable<Produto> => {
        return this.http.get<Produto>(`${this.produtoUrl}/${id}`);
    }

    addProduto = (produto: Produto): Observable<any> => {
        return this.http.post(this.produtoUrl, produto);
    }

    editProduto = (produto: Produto): Observable<any> => {
        return this.http.put(`${this.produtoUrl}/${produto.id}`, produto);
    }

    removerProduto = (produto: Produto): Observable<any> => {
        return this.http.delete(`${this.produtoUrl}/${produto.id}`);
    }
}

