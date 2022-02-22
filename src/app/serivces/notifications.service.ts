import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(
    message: string,
    action: string,
    vPosition: any,
    hPosition: any,
    duration: number
  ) {
    this._snackBar.open(message, action, {
      horizontalPosition: hPosition || 'right',
      verticalPosition: vPosition || 'top',
      duration: duration,
    });
  }
}
