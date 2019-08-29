import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        isActive: false,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
        email: 'kevin@gmail.com'
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        isActive: true,
        registered: new Date('03/11/2017 01:30:00'),
        hide: true,
        email: 'john@yahoo.com'
      }
    ];

    this.loaded = true;
  }

  //   addUser() {
  //     this.user.isActive = true;
  //     this.user.registered = new Date();
  //     this.users.unshift(this.user);

  //     this.user = {
  //       firstName: '',
  //       lastName: '',
  //       email: ''
  //     }
  // }

  onSubmit(e) {
    e.preventDefault();
    console.log("123");
  }

}
