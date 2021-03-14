import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NewUserService } from '../../services/new-user.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'form-first',
  templateUrl: 'form-first.component.html',
  styleUrls: ['form-first.component.css'],
})
export class FormFirstComponent implements OnInit, OnDestroy {
  @Input() view: 'vertical' | 'horisontal' = 'vertical';

  public user: User;

  private newUser$: Subscription | undefined;

  constructor(private newUserService: NewUserService) {
    this.user = new User(-1, "", "", 0, "");
  }

  ngOnInit() {
    this.newUser$ = this.newUserService.newUser.subscribe(u => this.user = u);
  }

  ngOnDestroy() {
    this.newUser$ && this.newUser$.unsubscribe();
  }

  public addUser() {
    console.log("addUser");
    this.newUserService.addNewUser();
  }
}
