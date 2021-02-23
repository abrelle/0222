import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostGuardGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot){
    return next.url[1].path !== '5';
  }
  
}
