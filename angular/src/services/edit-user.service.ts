import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { TableUIService } from './table-ui.service';
import { MatDialog } from '@angular/material/dialog';
import { EditUserFormDialog } from '../popups/edit-user-form.dialog';
import { UserEditDialogData } from '../models/user-edit-dialog-data';

@Injectable({
  providedIn: 'root',
})
export class EditUserService {
  private editableUser$ = new BehaviorSubject<User>(new User(-1, "", "", 0, ""));
  public editableUser: Observable<User> = this.editableUser$.asObservable();

  constructor(private tableUIService: TableUIService,
  ) {
  }

  public editUser(dialog: MatDialog, user: User): Observable<any> {
    const dialogRef = dialog.open(EditUserFormDialog, {
      width: '536px',
      height: '180px',
      data: new UserEditDialogData(user.name, user.surname, user.city)
    });

    return dialogRef.afterClosed();
  }
}
