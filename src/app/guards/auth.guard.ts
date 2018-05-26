import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../servicios/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
  	private router:Router,
  	private afAuth:AngularFireAuth,
  	private authService: AuthService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState
    .take(1)
    .map(AuthState => !! AuthState)
    .do( authenticated => {
    	if( !authenticated) {
    		this.router.navigate(['/login']);
    	}
    });
  }
}
