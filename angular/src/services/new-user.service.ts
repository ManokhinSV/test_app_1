import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { TableUIService } from './table-ui.service';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  private newUser$ = new BehaviorSubject<User>(new User(-1, "", "", 0, ""));
  public newUser: Observable<User> = this.newUser$.asObservable();

  constructor(private tableUIService: TableUIService) {
  }

  public addNewUser() {
    this.tableUIService.addUserIntoTable(this.newUser$.value.copy());
    this.newUser$.next(new User(-1, "", "", 0, ""));
  }
}
