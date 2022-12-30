import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllTicksComponent } from './admin-all-ticks.component';

describe('AdminAllTicksComponent', () => {
  let component: AdminAllTicksComponent;
  let fixture: ComponentFixture<AdminAllTicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllTicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllTicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
