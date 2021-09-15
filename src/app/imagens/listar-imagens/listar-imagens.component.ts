import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagensService } from 'src/app/core/imagens.service';
import { Imagem } from 'src/app/shared/models/imagem';

@Component({
  selector: 'app-listar-imagens',
  templateUrl: './listar-imagens.component.html',
  styleUrls: ['./listar-imagens.component.scss']
})
export class ListarImagensComponent implements OnInit {
  
  
  imagens: Imagem[] = [];
  id!: number;
  qtdPagina = 9;
  pagina = 0;

  constructor(private imagensService: ImagensService, router: Router) { }

  ngOnInit(): void {
    this.listarImagens();
  }

  onScroll(): void {
    this.listarImagens();
  }

  private listarImagens(): void{
    this.pagina++;
    this.imagensService.receberImagem(this.pagina, this.qtdPagina).subscribe((imagens: Imagem[]) =>{
      this.imagens.push(...imagens)
    })
  }
}
