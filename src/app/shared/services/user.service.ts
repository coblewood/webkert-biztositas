import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(
    private afs: AngularFirestore,
  ) { }

  create(user: User){
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  getUserByPackage(_package: string){
    return this.afs.collection<User>(this.collectionName, ref => ref.where('package', '==', _package).orderBy('name', 'asc')).valueChanges();
  }

  update(){}

  delete(){}

  getData(userID: string){
    
  }

  addPackage(user: User, packageName: string){
    user.package = packageName;
  }

  deletePackage(user: User){
    user.package = '';
  }
}
