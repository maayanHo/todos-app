import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { DatePipe } from '@angular/common';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatCheckboxModule, MatIconModule, MatDatepickerModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { MatDialogModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoInputComponent,
    TodoItemComponent,
    FilterPipe,
    TodoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    HttpClientModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [TodoDialogComponent]
})
export class AppModule { }
