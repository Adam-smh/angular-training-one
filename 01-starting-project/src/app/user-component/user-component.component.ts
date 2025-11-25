import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randoUsr = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user-component',
  standalone: true,
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent {

  selectedUsr = signal(DUMMY_USERS[randoUsr]);
  imagePath = computed(() => 'assets/users/' + this.selectedUsr().avatar)

  onSelectUsr() {
    const randoUsr = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUsr.set(DUMMY_USERS[randoUsr]);  
  }
}
