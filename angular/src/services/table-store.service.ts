import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UsersTable } from '../models/users-table';

@Injectable({
  providedIn: 'root',
})
export class TableStoreService {
  private tablesStore$ = new BehaviorSubject<UsersTable[]>([]);
  public tablesStore: Observable<UsersTable[]> = this.tablesStore$.asObservable();

  constructor() {
  }

  public addTable(table: UsersTable) {
    const newStore = this.tablesStore$.value.map(t => t);
    newStore.push(table);
    this.tablesStore$.next(newStore);
  }

  public deleteTable(table: UsersTable) {
    const newStore = this.tablesStore$.value.filter(t => t != table);
    this.tablesStore$.next(newStore);
  }
}
