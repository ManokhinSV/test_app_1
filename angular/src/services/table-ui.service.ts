import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UsersTable } from '../models/users-table';
import { User } from '../models/user';
import { TableStoreService } from './table-store.service';

@Injectable({
  providedIn: 'root',
})
export class TableUIService {
  private editableTable$ = new BehaviorSubject<UsersTable>(new UsersTable([new User(-1, "Sergey", "Manokhin", 36, "Ufa")]));
  public editableTable: Observable<UsersTable> = this.editableTable$.asObservable();

  constructor(private tableStoreService: TableStoreService) {
  }

  public copyTable() {
    const newTable = this.editableTable$.value.copy();
    this.tableStoreService.addTable(newTable);
  }

  public addUserIntoTable(user: User) {
    const newTable = this.editableTable$.value.copy();
    newTable.rows.push(user);
    this.editableTable$.next(newTable);
  }
}
