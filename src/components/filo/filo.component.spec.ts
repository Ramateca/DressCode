import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiloComponent } from './filo.component';

describe('FiloComponent', () => {
  let component: FiloComponent;
  let fixture: ComponentFixture<FiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
