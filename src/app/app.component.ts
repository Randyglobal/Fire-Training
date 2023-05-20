import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, Firestore, collection, getDocs, doc, updateDoc } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire/compat'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public auth: Auth, public firestore: Firestore, private store: AngularFireModule) {
    this.getData()
   }
   public data: any = []
  title = 'Tasky-Fire';

  // signup(value: any){
  //   createUserWithEmailAndPassword(this.auth, value.email, value.password )
  //   .then((respond: any) =>{
  //      console.log(respond.user);
  //      alert('Successfully Registered')
  //     })
  //      .catch((err) => {
  //       alert(err.message)  
  //       alert('ooopppss')    
  //   })
  // } 
  signin(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((respond: any) => {
        console.log(respond.user);
        alert('welcome' + respond.user)
      })
      .catch((err) => {
        alert(err.message)
        alert('ooopppss')
      })
  }

  addData(value: any) {
   const addTaks = collection(this.firestore, 'Task');
   addDoc(addTaks, value)
   .then((respond) => {
    alert("Data saved");
    // console.log(respond);    
   })
   .catch((err) =>{
    alert("Opps Something Happened, Couldn't save")
    alert(err.message)
    console.log(err);
    
   })
  }

  getData(){
    const addData = collection(this.firestore, 'Task');
    getDocs(addData)
    .then((respond) => {
      alert('Data Gotten')
      this.data = [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
    })
  }
  updateData(id: string){
   console.log(id);
   
  }
}
