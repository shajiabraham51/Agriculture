import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserreqComponent } from './viewuserreq.component';

describe('ViewuserreqComponent', () => {
  let component: ViewuserreqComponent;
  let fixture: ComponentFixture<ViewuserreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
