import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputToFilterComponent } from './input-to-filter.component';

describe('InputToFilterComponent', () => {
  let component: InputToFilterComponent;
  let fixture: ComponentFixture<InputToFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputToFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputToFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
