import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [MatListModule, MatCardModule, DatePipe,MatIconModule, MaterialModule ],
  templateUrl: './listsclient.component.html',
})
export class AppListsComponent {

  constructor(private dialog: MatDialog,private router: Router) {}
  // Liste des clients (statique pour cet exemple)
  clients = [
    { nom: 'Dupont Jean', email: 'jean.dupont@mail.com', telephone: '0123456789' },
    { nom: 'Martin Sophie', email: 'sophie.martin@mail.com', telephone: '0987654321' },
    { nom: 'Lefevre Paul', email: 'paul.lefevre@mail.com', telephone: '0147258369' },
    { nom: 'Dubois Claire', email: 'claire.dubois@mail.com', telephone: '0212345678' }
  ];
  // Colonnes à afficher dans le tableau
  displayedColumns: string[] = ['nom', 'email', 'telephone', 'actions'];

  // Ajouter un client
  ajouterClient() {
  // Naviguer vers la liste des clients
  this.router.navigate(['/ui-components/ajoute-client']);
  }

  // Modifier un client
  modifierClient(client: any) {
    this.router.navigate(['/ui-components/modife-compte']);
  }

  // Supprimer un client
  supprimerClient(client: any) {
       const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: '300px',
          data: { message: 'Êtes-vous sûr de vouloir supprimer ce compte ?' },
        });
    
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            console.log('Compte supprimé :', client);
            this.clients = this.clients.filter((c) => c !== client);
          } else {
            console.log('Suppression annulée');
          }
        });
  }
  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/24'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/24'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/24'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    },
  ];
}
