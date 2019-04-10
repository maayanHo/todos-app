import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css']
})
export class TodoDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<TodoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.form = this.fb.group(this.data);
  }

  save() {
    // save the change call the service
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
