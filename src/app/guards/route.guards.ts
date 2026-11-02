import { inject } from '@angular/core/primitives/di';
import {
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  Router,
} from '@angular/router';


export const authService = { loggedIn: false };

export interface CanLeavePage {
  canDeactivate?: () => boolean;
}

export const canActivateGuard: CanActivateFn = () =>
  authService.loggedIn || inject(Router).createUrlTree(['/about']);

export const canDeactivateGuard: CanDeactivateFn<CanLeavePage> = (component) =>
    confirm('Leave this page?');

export const canMatchGuard: CanMatchFn = () => authService.loggedIn;

export const canActivateChildGuard: CanActivateChildFn = () => authService.loggedIn;
