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

  let defaultButton: DebugElement;
  let customBackgroundButton: DebugElement;
  let customFontColorButton: DebugElement;
  let completelyCustomizedButton: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);

    fixture.detectChanges();

    [
      defaultButton,
      customFontColorButton,
      customBackgroundButton,
      completelyCustomizedButton,
    ] = fixture.debugElement.queryAll(By.directive(MyButtonDirective));
  });

  describe('default button', () => {
    it("background's button should be blue", () => {
      expect(defaultButton.nativeElement.style.background).toBe('blue');
    });

    it("font color's button should be white", () => {
      expect(defaultButton.nativeElement.style.color).toBe('white');
    });
  });

  describe('custom font color button', () => {
    it("background's button should be blue", () => {
      expect(customFontColorButton.nativeElement.style.background).toBe('blue');
    });

    it("font color's button should be white", () => {
      expect(customFontColorButton.nativeElement.style.color).toBe('green');
    });
  });

  describe('custom background button', () => {
    it("background's button should be blue", () => {
      expect(customBackgroundButton.nativeElement.style.background).toBe('pink');
    });

    it("font color's button should be white", () => {
      expect(customBackgroundButton.nativeElement.style.color).toBe('white');
    });
  });

  describe('button with background and font color customized', () => {
    it("background's button should be blue", () => {
      expect(completelyCustomizedButton.nativeElement.style.background).toBe('purple');
    });

    it("font color's button should be white", () => {
      expect(completelyCustomizedButton.nativeElement.style.color).toBe('black');
    });
  });
});
