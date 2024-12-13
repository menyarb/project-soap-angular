import { Routes } from '@angular/router';

// ui

import { AppListsComponent } from './listsclient/listsclient.component';
import { AppListsCompteComponent } from './listscompte/listscompte.component';

import { AppMenuComponent } from './menu/menu.component';
import { AppClientComponent } from './client/client.component';
import { Compte } from './compteBank/compte';

import { AppTablesComponent } from './tables/tables.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
     
    
      {
        path: 'listsclient',
        component: AppListsComponent,
      },
      {
        path: 'listsCompte',
        component: AppListsCompteComponent,
      }, 
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'client',
        component: AppClientComponent,
      },
      {
        path: 'Compte',
        component: Compte,
      },
     
      {
        path: 'tables',
        component: AppTablesComponent,
      },
    ],
  },
];
