import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
styleUrls: ['./confirm-dialog.component.css'] })
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false); // Renvoie `false` si l'utilisateur annule
  }

  onConfirm(): void {
    this.dialogRef.close(true); // Renvoie `true` si l'utilisateur confirme
  }
}
