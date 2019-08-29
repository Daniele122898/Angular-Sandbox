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
  currentClasses = {};
  currentStyles = {};

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
        image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png',
        isActive: false,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00')
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
        image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png',
        isActive: true,
        balance: 200,
        registered: new Date('03/11/2017 01:30:00')
      }
    ];

    this.addUser({
      firstName: 'David',
      lastName: 'Smith',
      balance: 200,
      registered: new Date('03/01/2015 12:30:00')
    });
    this.loaded = true;

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
