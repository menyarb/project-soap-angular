import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../confirm-dialog/confirm-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-lists-compte',
  standalone: true,
  imports: [MatListModule, MatCardModule, DatePipe, MatIconModule,MatTableModule,MaterialModule],
  templateUrl: './liste-student.component.html',
  styleUrls: ['./liste-student.component.css']
})
export class AppListsCompteComponent {
  students: any[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'street', 'city', 'actions']; // Add your columns here
  errorMessage: string = ''; 
  constructor(private dialog: MatDialog, private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.apiService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des étudiants:', error);
      }
    );
  }
    ajouterEtudiant(): void {
      this.router.navigate(['/ui-components/add-student']);
    }
    
  

    modifierEtudiant(student: any): void {
      // Logic to modify the student
      this.router.navigate(['/ui-components/edit-student', student.id]);
    }

  supprimerEtudiant(student: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Êtes-vous sûr de vouloir supprimer cet étudiant ?' },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.deleteStudent(student.id).subscribe(
          () => {
            // Filtrer la liste pour retirer l'étudiant supprimé
            this.students = this.students.filter((s) => s.id !== student.id);
          },
          (error) => {
            // Gérer l'erreur en affichant un message
            console.error('Erreur lors de la suppression de l\'étudiant:', error);
            this.errorMessage = 'Erreur lors de la suppression de l\'étudiant.';
          }
        );
      }
    });
  }
  
}