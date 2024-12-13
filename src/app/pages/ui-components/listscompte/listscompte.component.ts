import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../confirm-dialog/confirm-dialog.component';
import { MatTableModule } from '@angular/material/table';

export interface Compte {
  nom: string;
  rib: string;
  solde: number;
}

@Component({
  selector: 'app-lists-compte',
  standalone: true,
  imports: [MatListModule, MatCardModule, DatePipe, MatIconModule,MatTableModule,MaterialModule],
  templateUrl: './listscompte.component.html',
})
export class AppListsCompteComponent {
  comptes: Compte[] = [
    { nom: 'Compte A', rib: 'FR7630006000011234567890189', solde: 2000 },
    { nom: 'Compte B', rib: 'FR7630006000012234567890190', solde: 3500 },
    { nom: 'Compte C', rib: 'FR7630006000013234567890201', solde: 1500 },
    { nom: 'Compte D', rib: 'FR7630006000014234567890202', solde: 4200 },
  ];

  displayedColumns: string[] = ['nom', 'rib', 'solde', 'actions'];

  constructor(private dialog: MatDialog) {}

  // Ajouter un compte
  ajouterCompte(): void {
    console.log('Ajouter un Compte');
    // Logique d'ajout de compte à implémenter
  }

  // Modifier un compte
  modifierCompte(compte: Compte): void {
    console.log('Modifier le Compte:', compte);
    // Logique de modification à implémenter
  }

  // Supprimer un compte avec confirmation
  supprimerCompte(compte: Compte): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Êtes-vous sûr de vouloir supprimer ce compte ?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Compte supprimé :', compte);
        this.comptes = this.comptes.filter((c) => c !== compte);
      } else {
        console.log('Suppression annulée');
      }
    });
  }
}
