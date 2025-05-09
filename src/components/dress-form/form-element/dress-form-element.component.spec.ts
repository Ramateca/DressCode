import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressFormElement } from './dress-form-element.component';

describe('FormElementComponent', () => {
  let component: DressFormElement;
  let fixture: ComponentFixture<DressFormElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DressFormElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressFormElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
