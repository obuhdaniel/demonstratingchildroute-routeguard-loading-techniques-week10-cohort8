import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-opportunities',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <h1>Hello Opportunities Component</h1>
    <nav>
      <a routerLink="resource-opportunities" routerLinkActive="active">Resource</a> |
      <a routerLink="programs-opportunities" routerLinkActive="active">Programs</a> |
      <a routerLink="community-opportunities" routerLinkActive="active">Community</a>
    </nav>
    <router-outlet />
  `,
  styleUrl: './opportunities.css',
})
export class Opportunities {

}
