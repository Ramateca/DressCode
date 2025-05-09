import { AlberoManagerDirective } from './albero-manager.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div dress-albero-manager></div>`,
  standalone: true,
  imports: [AlberoManagerDirective]
})
class TestHostComponent {}

describe('AlberoManagerDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({ imports: [TestHostComponent, AlberoManagerDirective] }).createComponent(TestHostComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(AlberoManagerDirective));
    expect(directive).toBeTruthy();
  });

  // Add more tests for directive functionality
});
