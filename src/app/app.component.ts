import { Component } from '@angular/core';
import firebase from "firebase/compat";
import {FirebaseserviceService} from "./firebaseservice.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebaseupdate';
  proyectoList : Array<Object>;


  constructor(private proyectoListData: FirebaseserviceService){

    this.proyectoListData.doLogin().then((result) => {
      // Signed in
      if (result){
        proyectoListData.obtener_base_de_datos_realtime().then((result) => {
          // Signed in
          this.proyectoList =  result;
          alert(result.length)
        })
          .catch((error) => {


            alert(error)
          });

        alert('in')
      }
    })


  }
    /*
    this.proyectoListData.doLogin().then((result) => {
      // Signed in
      if (result){


        proyectoListData.obtener_colleccion().then((result) => {
          // Signed in
          this.proyectoList =  result;
          alert(result.length)
        })
          .catch((error) => {


            alert(error)
          });

        alert('in')
      }
     })
      .catch((error) => {


        alert(error)
      });

    }
*/
}
