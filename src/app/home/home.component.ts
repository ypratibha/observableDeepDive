import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // username: string = '';
  // age: number = 0;
  // lastname: string = 'pra';

  // constructor(private usersrv: UserServiceService) {
  //   this.usersrv.displaySubject.subscribe((data) => {
  //     console.log('******', data);
  //     this.username = data.name;
  //     this.age = data.age;
  //     console.log('^^', this.username);
  //   });
  // }

  ngOnInit() {
    // console.log(this.lastname);
    // console.log(this.username);
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    // const customIntervalObs = Observable.create((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     if (count === 2) {
    //       observer.complete();
    //     }
    //     if (count > 3) {
    //       observer.error(new Error('Count is greater than 3!'));
    //     }
    //     count++;
    //   }, 1000);
    // });
    // this.firstObsSubscription = customIntervalObs
    //   .pipe(
    //     filter((data) => {
    //       return data > 0;
    //     }),
    //     map((data: number) => {
    //       return 'Round:' + (data + 1);
    //     })
    //   )
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //       alert(error.message);
    //     },
    //     () => {
    //       console.log('completed!!!');
    //     }
    //   );
  }
}
