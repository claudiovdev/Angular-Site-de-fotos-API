
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarImagensComponent } from './imagens/listar-imagens/listar-imagens.component';
import { VisualizarImagemComponent } from './imagens/visualizar-imagem/visualizar-imagem.component';

const routes: Routes = [
  {path: '', component: ListarImagensComponent},
  {path: 'imagem/:id', component: VisualizarImagemComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  
})
export class AppRoutingModule { }
