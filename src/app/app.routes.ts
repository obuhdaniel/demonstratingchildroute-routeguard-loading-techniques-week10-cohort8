import { Routes } from '@angular/router';
import { About } from './about/about';
import {
  canActivateChildGuard,
  canActivateGuard,
  canDeactivateGuard,
  canMatchGuard,
} from './guards/route.guards';
import { Programmes } from './programmes/programmes';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },

  // 1. EAGER: bundled in the main file
  { path: 'about', component: About },
  { path: 'programmes', component: Programmes },

  // 2. LAZY: loaded only when visited
  {
    path: 'events',
    loadComponent: () => import('./events/events').then((m) => m.Events),
  },

  {
    path: 'resource',
    canActivate: [canActivateGuard],
    canDeactivate: [canDeactivateGuard],
    loadComponent: () => import('./resource/resource').then((m) => m.Resource),
  },

  // 3. PRELOADED: lazy, but fetched in the background after startup
  {
    path: 'community',
    data: { preload: true },
    loadComponent: () => import('./community/community').then((m) => m.Community),
  },

  // Opportunities: parent with 3 child routes
  {
    path: 'opportunities',
    canMatch: [canMatchGuard],
    canActivateChild: [canActivateChildGuard],
    loadComponent: () =>
      import('./opportunities/opportunities').then((m) => m.Opportunities),
    children: [
      { path: '', redirectTo: 'resource-opportunities', pathMatch: 'full' },
      {
        path: 'resource-opportunities',
        loadComponent: () =>
          import(
            './opportunities-children/resource-opportunities/resource-opportunities'
          ).then((m) => m.ResourceOpportunities),
      },
      {
        path: 'programs-opportunities',
        loadComponent: () =>
          import(
            './opportunities-children/programs-opportunities/programs-opportunities'
          ).then((m) => m.ProgramsOpportunities),
      },
      {
        path: 'community-opportunities',
        loadComponent: () =>
          import(
            './opportunities-children/community-opportunities/community-opportunities'
          ).then((m) => m.CommunityOpportunities),
      },
    ],
  },

  { path: '**', redirectTo: 'about' },
];
