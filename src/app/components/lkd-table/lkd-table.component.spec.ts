import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkdTableComponent } from './lkd-table.component';

describe('LkdTableComponent', () => {
  let component: LkdTableComponent;
  let fixture: ComponentFixture<LkdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
