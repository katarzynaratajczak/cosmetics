import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosmetykShowComponent } from './kosmetyk-show.component';

describe('KosmetykShowComponent', () => {
  let component: KosmetykShowComponent;
  let fixture: ComponentFixture<KosmetykShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosmetykShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosmetykShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
