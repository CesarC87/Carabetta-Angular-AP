import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCircleProgressBarComponent } from './skill-circle-progress-bar.component';

describe('SkillCircleProgressBarComponent', () => {
  let component: SkillCircleProgressBarComponent;
  let fixture: ComponentFixture<SkillCircleProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCircleProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCircleProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
