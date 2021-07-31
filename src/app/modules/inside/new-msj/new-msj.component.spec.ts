import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMsjComponent } from './new-msj.component';

describe('NewMsjComponent', () => {
  let component: NewMsjComponent;
  let fixture: ComponentFixture<NewMsjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMsjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
