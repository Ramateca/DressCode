import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDressFormElementComponent } from './text-dress-form-element.component';

describe('TextDressFormElementComponent', () => {
  let component: TextDressFormElementComponent;
  let fixture: ComponentFixture<TextDressFormElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextDressFormElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDressFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
