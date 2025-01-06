import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="branding"   style=" margin-left: 60px;" >
      <a [routerLink]="['/']">
       
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
