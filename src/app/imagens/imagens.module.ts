import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarImagensComponent } from './listar-imagens/listar-imagens.component';
import { VisualizarImagemComponent } from './visualizar-imagem/visualizar-imagem.component';





@NgModule({
  declarations: [
    ListarImagensComponent,
    VisualizarImagemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImagensModule { }
