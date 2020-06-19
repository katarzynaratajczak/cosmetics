import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKosmetykComponent } from './add-kosmetyk.component';

describe('AddKosmetykComponent', () => {
  let component: AddKosmetykComponent;
  let fixture: ComponentFixture<AddKosmetykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKosmetykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKosmetykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
