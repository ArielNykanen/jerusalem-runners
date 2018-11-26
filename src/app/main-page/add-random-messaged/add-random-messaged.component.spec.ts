import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRandomMessagedComponent } from './add-random-messaged.component';

describe('AddRandomMessagedComponent', () => {
  let component: AddRandomMessagedComponent;
  let fixture: ComponentFixture<AddRandomMessagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRandomMessagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRandomMessagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
