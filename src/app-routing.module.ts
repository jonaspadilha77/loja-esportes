import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './app/produto/produto.component';
import { HomeComponent } from './app/home/home.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { NovoProdutoComponent } from './app/novo-produto/novo-produto.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'lista-produtos',
        component: ProdutoComponent
    },
    {
        path: 'editar-produto/:id',
        component: NovoProdutoComponent
    },
    {
        path: 'novo-produto',
        component: NovoProdutoComponent
    },

    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
