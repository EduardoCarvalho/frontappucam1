import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListempresaComponent } from './listempresa.component';

describe('ListempresaComponent', () => {
  let component: ListempresaComponent;
  let fixture: ComponentFixture<ListempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
