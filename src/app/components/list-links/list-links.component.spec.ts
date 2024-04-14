import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLinksComponent } from './list-links.component';

describe('ListLinksComponent', () => {
  let component: ListLinksComponent;
  let fixture: ComponentFixture<ListLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
