import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
  	public afAuth: AngularFireAuth
  ) {   }

//viene de la documentacion de firebase
  registerUser(email: string, password: string){
  	return new Promise((resolve, reject) => {
  		this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  		.then( userData => resolve(userData),
  			   err => reject (err));
  	});
  }

  loginEmail(email: string, password: string){
  	return new Promise((resolve, reject) => {
  		this.afAuth.auth.signInWithEmailAndPassword(email, password)
  		.then( userData => resolve(userData),
  			   err => reject (err));
  	});
  }

  //Obtenemos los datos del usuario en caso de estar logeado
  getAuth(){
  	return this.afAuth.authState.map( auth => auth );
  }

  logout(){
  	return this.afAuth.auth.signOut();
  }

}