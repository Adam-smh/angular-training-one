import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-component',
  standalone: true,
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent {

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imagePath(){
    return 'assets/users/' + this.avatar
  }

  onSelectUsr() {}
}
