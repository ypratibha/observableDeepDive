import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userActivated = false;
  username: string = '';
  age: number = 0;

  constructor(private usersrv: UserServiceService) {
    this.usersrv.displaySubject.subscribe((data) => {
      console.log('******', data);
      this.username = data.name;
      this.age = data.age;
      console.log('^^', this.username);
    });
  }

  ngOnInit() {
    this.usersrv.activatedEmitted.subscribe((didActivate) => {
      this.userActivated = didActivate;
    });
  }
}
