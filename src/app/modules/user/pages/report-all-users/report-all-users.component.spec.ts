import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAllUsersComponent } from './report-all-users.component';

describe('ReportAllUsersComponent', () => {
  let component: ReportAllUsersComponent;
  let fixture: ComponentFixture<ReportAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportAllUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
