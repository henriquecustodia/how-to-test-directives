import { Component, DebugElement } from '@angular/core';
import { MyButtonDirective } from './my-button.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MyButtonDirective],
  template: `
    <button appMyButton>Click me</button>
    <button appMyButton fontColor="green">Click me</button>
    <button appMyButton bgColor="pink">Click me</button>
    <button appMyButton fontColor="black" bgColor="purple">Click me</button>
  `,
})
class TestComponent {}

describe('MyButtonDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElements: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);

    fixture.detectChanges();

    debugElements = fixture.debugElement.queryAll(
      By.directive(MyButtonDirective)
    );
  });

  describe('default button', () => {
    it("background's button should be blue", () => {
      const defaultButton = debugElements[0];
      expect(defaultButton.nativeElement.style.background).toBe('blue');
    });

    it("font color's button should be white", () => {
      const defaultButton = debugElements[0];
      expect(defaultButton.nativeElement.style.color).toBe('white');
    });
  });

  describe('custom font color button', () => {
    it("background's button should be blue", () => {
      const defaultButton = debugElements[1];
      expect(defaultButton.nativeElement.style.background).toBe('blue');
    });

    it("font color's button should be white", () => {
      const defaultButton = debugElements[1];
      expect(defaultButton.nativeElement.style.color).toBe('green');
    });
  });

  describe('custom background button', () => {
    it("background's button should be blue", () => {
      const defaultButton = debugElements[2];
      expect(defaultButton.nativeElement.style.background).toBe('pink');
    });

    it("font color's button should be white", () => {
      const defaultButton = debugElements[2];
      expect(defaultButton.nativeElement.style.color).toBe('white');
    });
  });

  describe('button with background and font color customized', () => {
    it("background's button should be blue", () => {
      const defaultButton = debugElements[3];
      expect(defaultButton.nativeElement.style.background).toBe('purple');
    });

    it("font color's button should be white", () => {
      const defaultButton = debugElements[3];
      expect(defaultButton.nativeElement.style.color).toBe('black');
    });
  });
});
