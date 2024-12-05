import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', //attribute selector
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {}