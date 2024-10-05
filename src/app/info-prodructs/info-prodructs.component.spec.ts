import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProdructsComponent } from './info-prodructs.component';

describe('InfoProdructsComponent', () => {
  let component: InfoProdructsComponent;
  let fixture: ComponentFixture<InfoProdructsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProdructsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProdructsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
