import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";

import {environment} from "../environments/environment";
import { initializeApp } from "firebase/app"

@Injectable({
  providedIn: 'root'
})

export class FirebaseserviceService {


  constructor() {


  }



  obtener_base_de_datos_realtime(): Promise<Array<any>>{
    const dbRef = ref(getDatabase());
    return get(child(dbRef, 'esperanza_vida')).then((snapshot) => {
      let result = []
      snapshot.forEach((doc) => {
        result.push(doc)
      });
      return result
    }).catch((error) => {
      return []
    });
  }



  async obtener_colleccion() {
    const firebaseApp = initializeApp(environment.firebase);
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, "proyecto"));
    let array = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      alert
      array.push( doc.data())

    });
    return array

  }


  doLogin(): Promise<Boolean> {
    const firebaseApp = initializeApp(environment.firebase);


    const auth = getAuth(firebaseApp);



    return signInWithEmailAndPassword(auth, 'usuario', 'contraseña')
        .then((userCredential) => {
          // Signed in
          return true
        })
        .catch((error) => {
          return false

          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
  }
}
