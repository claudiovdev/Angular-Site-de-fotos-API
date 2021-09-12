import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarImagemComponent } from './visualizar-imagem.component';

describe('VisualizarImagemComponent', () => {
  let component: VisualizarImagemComponent;
  let fixture: ComponentFixture<VisualizarImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarImagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
