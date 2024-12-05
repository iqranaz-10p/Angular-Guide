import { Component, ElementRef, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None, //worked same for None
  host: {
    class: 'control', //it is used to add class to the host element
    '(click)': 'onClick($event)' //recommended to use this instead of @HostListener
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; //it is discouraged to use @HostBinding 
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // } //it is discouraged to use @HostListener
  @Input({required: true}) label!: string;

  private el = inject(ElementRef);

  onClick() {
    console.log('clicked');
    console.log(this.el)
  }
}
