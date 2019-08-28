import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 25,
        address: {
          street: '23 School st',
          city: 'Lynn',
          state: 'MA'
        },
        image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'
      }
    ];

    this.addUser({
      firstName: 'David',
      lastName: 'Smith'
    });
    this.loaded = true;


  }

  addUser(user: User) {
    this.users.push(user);
  }

}
