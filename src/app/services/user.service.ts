import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/User';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
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
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(()=> {
        observer.next(1);
      }, 1000);
      setTimeout(()=> {
        observer.next(2);
      }, 2000);
      setTimeout(()=> {
        observer.next(3);
      }, 3000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
