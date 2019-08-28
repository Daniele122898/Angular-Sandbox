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
        }
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        }
      }
    ];

    this.addUser({
      firstName: 'David',
      lastName: 'Smith',
    });
    this.loaded = true;


  }

  addUser(user: User) {
    this.users.push(user);
  }

}
