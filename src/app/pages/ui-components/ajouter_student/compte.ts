import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {CdkScrollable} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CdkScrollable,
    MatButtonModule,
    MatTooltipModule, MatCardModule, MatInputModule, MatCheckboxModule
  ],
  templateUrl: './compte.html',
})
export class Compte {
  newStudent = {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: ''
  };
constructor(private dialog: MatDialog, private router: Router, private apiService: ApiService) {}

  // Méthode pour ajouter un étudiant
  addStudent(): void {
    this.apiService.createStudent(this.newStudent).subscribe(
      (response) => {
        console.log('Étudiant créé:', response);
        // Handle success (e.g., show success message or redirect)
        this.router.navigate(['/ui-components/list-student']);
      },
      (error) => {
        console.error('Erreur lors de la création de l\'étudiant:', error);
        if (error.status === 0) {
          alert('Problème de connexion au serveur. Veuillez vérifier si le serveur est en ligne.');
        } else {
          alert('Une erreur est survenue lors de la création de l\'étudiant. Veuillez réessayer.');
        }
      }
    );
  }
  
}

