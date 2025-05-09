import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlberoFileComponent } from './albero-file.component';

describe('AlberoFileComponent', () => {
  let component: AlberoFileComponent;
  let fixture: ComponentFixture<AlberoFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlberoFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlberoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
