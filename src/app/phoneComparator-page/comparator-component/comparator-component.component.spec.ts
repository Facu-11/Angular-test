import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorComponentComponent } from './comparator-component.component';

describe('ComparatorComponentComponent', () => {
  let component: ComparatorComponentComponent;
  let fixture: ComponentFixture<ComparatorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparatorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
