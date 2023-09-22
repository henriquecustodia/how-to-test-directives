import { Directive, ElementRef, Input, inject } from '@angular/core';

@Directive({
  selector: '[appMyButton]',
  standalone: true
})
export class MyButtonDirective {

  hostEl = inject(ElementRef).nativeElement as HTMLElement;

  @Input() bgColor: string = 'blue';
  @Input() fontColor: string = 'white';

  ngOnInit(): void {
    this.hostEl.style.background = this.bgColor;
    this.hostEl.style.color = this.fontColor;
  }

}
