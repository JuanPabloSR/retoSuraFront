import {
  Directive,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[errorSpan]',
})
export class ErrorSpanDirective implements OnInit, OnChanges {
  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.setAlert();
  }

  setAlert(): void {
    const classes = 'form-text text-danger bi bi-exclamation-triangle';
    this.htmlElement.nativeElement.classList.add(...classes.split(' '));
  }
}
