import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  displaySubject = new Subject<{ name: string; age: number }>();

  activatedEmitted = new Subject<boolean>();

  constructor() {}

  // addData(name, age) {
  //   this.displaySubject.next({ name: name, age: age });
  // }
}
