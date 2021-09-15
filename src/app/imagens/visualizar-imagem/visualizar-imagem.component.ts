import { ImagensService } from 'src/app/core/imagens.service';
import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/shared/models/imagem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-imagem',
  templateUrl: './visualizar-imagem.component.html',
  styleUrls: ['./visualizar-imagem.component.scss']
})
export class VisualizarImagemComponent implements OnInit {

  imagem!: Imagem;
  imagemId!: number;


  constructor(
    private imagemService: ImagensService,
    private router: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      this.imagemId = params['id']
    });

    this.imagemService.receberImagemPorId(this.imagemId).subscribe(response =>{
      this.imagem = response;
    })
  }
}
