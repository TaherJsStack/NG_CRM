import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCountHighlight]'
})
export class CountHighlightDirective {

  @Input() countHighlight: string = '0'; // Input property to receive the count value
  private readonly addClassToCount = {
    primary:  "count-primary-highlight",
    accent:   "count-accent-highlight",
    warn:     "count-warn-highlight"
  };  // CSS class for highlighting

  constructor(
    private elementRef: ElementRef,
    ) {}

  ngOnChanges(changes: SimpleChanges): void {

    let currentValue = +changes['countHighlight'].currentValue;

    if (!changes['countHighlight'].firstChange && changes['countHighlight'].previousValue == 0) {
      this.elementRef.nativeElement.classList.remove(this.addClassToCount.warn);
      currentValue = +changes['countHighlight'].currentValue;
    }
    
    if ( currentValue == 0) {
      // If the count is == 0, apply the warn class
      this.elementRef.nativeElement.classList.add(this.addClassToCount.warn);
    }
    else if (currentValue <= 5 && currentValue !== 0) {
      // If the count is <= 5 && count !== 0, apply the accent class
      this.elementRef.nativeElement.classList.add(this.addClassToCount.accent);
    } 
    //else {
    //   // If the count is not 0 or <= 5, apply the warn class
    //   this.elementRef.nativeElement.classList.add(this.addClassToCount.primary);
    // }
  }

}
