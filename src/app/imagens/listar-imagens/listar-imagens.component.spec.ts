import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarImagensComponent } from './listar-imagens.component';

describe('ListarImagensComponent', () => {
  let component: ListarImagensComponent;
  let fixture: ComponentFixture<ListarImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarImagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
