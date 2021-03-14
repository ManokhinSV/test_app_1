import { Component } from '@angular/core';
import { TableUIService } from '../services/table-ui.service';
import { TableStoreService } from '../services/table-store.service';
import { UsersTable } from '../models/users-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  constructor(
    public tableUIService: TableUIService,
    public tableStoreService: TableStoreService,
  ) {

  }

  public copyTable() {
    console.log("copyTable");
    this.tableUIService.copyTable();
  }

  public deleteTable(t: UsersTable) {
    console.log("deleteTable");
    this.tableStoreService.deleteTable(t);
  }
}
