import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { UserEditDialogData } from '../models/user-edit-dialog-data';

@Component({
  selector: 'edit-user-form',
  templateUrl: 'edit-user-form.dialog.html',
  styleUrls: ['edit-user-form.dialog.css'],
})
export class EditUserFormDialog {
  public userName: string;

  public editName: string;
  public editSurname: string;
  public editCity: string;

  public totallyAgree = false;

  constructor(public dialogRef: MatDialogRef<EditUserFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserEditDialogData) {
    this.userName = data.name;
    this.editName = data.name;
    this.editSurname = data.surname;
    this.editCity = data.city;
  }

  public save() {
    console.log("save");
    this.dialogRef.close(true);
  }
}
