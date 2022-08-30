import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: number;

  username: string;
  age: number;

  constructor(
    private route: ActivatedRoute,
    private userser: UserServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onSubmit(name: string, age: number) {
    console.log(name + '&' + age);
    console.log('the details are submitted');
    this.userser.displaySubject.next({ name: name, age: age });
  }

  onActivate() {
    this.userser.activatedEmitted.next(true);
  }
}
