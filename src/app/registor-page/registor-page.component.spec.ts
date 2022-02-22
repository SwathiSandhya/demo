import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorPageComponent } from './registor-page.component';

describe('RegistorPageComponent', () => {
  let component: RegistorPageComponent;
  let fixture: ComponentFixture<RegistorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
