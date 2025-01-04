import { Routes } from '@angular/router';

// ui


import { AppListsCompteComponent } from './liste-student/listscompte.component';

import { Compte } from './ajouter_student/compte';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'list-student',
        component: AppListsCompteComponent,
      }, 
      
     

      {
        path: 'add-student',
        component: Compte,
      },
     
    ],
  },
];
