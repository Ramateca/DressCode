import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueComponent } from './boutique.component';

describe('DashboardComponent', () => {
  let component: BoutiqueComponent;
  let fixture: ComponentFixture<BoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutiqueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
