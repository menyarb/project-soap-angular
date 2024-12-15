import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-modife-compte',
  standalone: true,
  imports: [ MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule,
      CdkScrollable,
      MatButtonModule,
      MatTooltipModule, MatCardModule, MatInputModule, MatCheckboxModule],
  templateUrl: './modife-compte.component.html',
  styleUrl: './modife-compte.component.scss'
})
export class ModifeCompteComponent {

}
