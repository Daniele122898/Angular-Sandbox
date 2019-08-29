import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService } from '../../services/data.service';
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
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this._dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    this._dataService.getData().subscribe(data => {
      console.log(data);
    });
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

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid');
      return;
    }
    value.isActive = true;
    value.registered = new Date();
    value.hide = true;
    this._dataService.addUser(value);
    this.form.reset();
  }

}
