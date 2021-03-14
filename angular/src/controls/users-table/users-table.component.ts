import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user';
import { UsersTable } from '../../models/users-table';
import { EditUserService } from '../../services/edit-user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserEditDialogData } from '../../models/user-edit-dialog-data';

/**
 * @title Общий случай отображения табличных данных по пользователям
 */
@Component({
  selector: 'users-table',
  styleUrls: ['users-table.component.css'],
  templateUrl: 'users-table.component.html',
})
export class UsersTableComponent {
  @Input() allowCopy: boolean = false;
  @Input() allowDelete: boolean = false;
  @Input() allowEdit: boolean = false;
  @Input() set tableData(data: UsersTable | null) {
    this.table = data;
    this.dataSource.data = data?.rows || [];
  }
  @Output() tableDataChange: EventEmitter<UsersTable> = new EventEmitter<UsersTable>();

  @Output() onCopy: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  public displayedColumns: string[] = ['name', 'surname', 'age', 'city', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<User>([]);

  private table: UsersTable | null = null;

  constructor(
    private editUserService: EditUserService,
    private dialog: MatDialog) {
  }

  public copy() {
    this.onCopy.emit();
  }

  public delete() {
    if (!confirm('Удалить таблицу?'))
      return;
    this.onDelete.emit();
  }

  public editUser(user: User) {
    this.editUserService.editUser(this.dialog, user).subscribe((result: UserEditDialogData) => {
      console.log('The dialog was closed', result);
      if (result === undefined)
        return;
      user.name = result.name;
      user.surname = result.surname;
      user.city = result.city;
    });
  }

  public deleteUser(user: User) {
    if (!this.table)
      return;
    if (!confirm('Удалить запись пользователя?'))
      return;
    this.table.rows = this.table.rows.filter(r => r !== user);
    this.dataSource.data = this.table.rows || [];
  }
}
