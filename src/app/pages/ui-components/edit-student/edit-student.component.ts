import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-edit-compte',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CdkScrollable,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule
  ],
  templateUrl: './edit-student.component.html',
})
export class EditStudentComponent implements OnInit {
  student: any = {}; // Objet pour stocker les données de l'étudiant

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'étudiant depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getStudentById(Number(id)).subscribe(
        (data) => {
          this.student = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des données :', error);
        }
      );
    }
  }

  // Méthode pour mettre à jour les informations de l'étudiant
  updateStudent(): void {
    const id = this.student.id;
    this.apiService.updateStudent(id, this.student).subscribe(
      (response) => {
        console.log('Étudiant mis à jour avec succès:', response);
        // Redirection vers la liste des étudiants après mise à jour
        this.router.navigate(['/ui-components/list-student']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'étudiant:', error);
        alert('Une erreur est survenue lors de la mise à jour. Veuillez réessayer.');
      }
    );
  }
}
