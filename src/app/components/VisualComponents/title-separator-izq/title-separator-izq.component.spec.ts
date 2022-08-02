import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSeparatorIzqComponent } from './title-separator-izq.component';

describe('TitleSeparatorIzqComponent', () => {
  let component: TitleSeparatorIzqComponent;
  let fixture: ComponentFixture<TitleSeparatorIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleSeparatorIzqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleSeparatorIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
