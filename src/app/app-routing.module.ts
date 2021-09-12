import { HeaderComponent } from './shared/components/template/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarImagensComponent } from './imagens/listar-imagens/listar-imagens.component';

const routes: Routes = [
  {path: '', component: ListarImagensComponent},

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
