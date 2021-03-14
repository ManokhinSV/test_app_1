import { User } from './user';

export class UsersTable {
  public rows: User[];

  constructor(rows: User[]) {
    this.rows = rows;
  }

  public copy(): UsersTable {
    const res = new UsersTable(this.rows.map(r => r.copy()));
    return res;
  }
}
