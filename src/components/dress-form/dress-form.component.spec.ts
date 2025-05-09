import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressForm } from './dress-form.component';

describe('FormBuilderComponent', () => {
  let component: DressForm<any, any>;
  let fixture: ComponentFixture<DressForm<any, any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DressForm],
    }).compileComponents();

    fixture = TestBed.createComponent(DressForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
