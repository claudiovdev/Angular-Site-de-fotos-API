import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ListarImagensComponent } from './listar-imagens/listar-imagens.component';
import { VisualizarImagemComponent } from './visualizar-imagem/visualizar-imagem.component';






@NgModule({
  declarations: [
    ListarImagensComponent,
    VisualizarImagemComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    AppRoutingModule
    
  ]
})
export class ImagensModule { }
