import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { UsersTableComponent } from '../controls/users-table/users-table.component';
import { FormFirstComponent } from '../controls/form-first/form-frst.component';

import { EditUserFormDialog } from '../popups/edit-user-form.dialog';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    FormFirstComponent,
    EditUserFormDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  providers: [
    //{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  entryComponents: [
    EditUserFormDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
