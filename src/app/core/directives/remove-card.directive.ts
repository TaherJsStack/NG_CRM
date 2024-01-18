import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRemoveCard]',
  standalone: true
})
export class RemoveCardDirective {
  
  @Input() card!: HTMLElement;
  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  onClick() {
    // Remove the card element from the DOM
    // this.elementRef.nativeElement.remove();
    this.card.remove()

  }

}
