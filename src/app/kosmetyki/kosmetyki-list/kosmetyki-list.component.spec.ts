import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosmetykiListComponent } from './kosmetyki-list.component';

describe('KosmetykiListComponent', () => {
  let component: KosmetykiListComponent;
  let fixture: ComponentFixture<KosmetykiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosmetykiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosmetykiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
