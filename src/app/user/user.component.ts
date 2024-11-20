import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) avatar!: string; // This is a required input
  @Input() name!: string;

  get userAvatar() {
    return 'assets/users/' + this.avatar;
  }
}
