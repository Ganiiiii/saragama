import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.getUsers();
  }

  addUser() {
    this.db.collection("users").add({ firstName: "amar", lastName: "harihar" });
  }
  getUsers() {
    this.db
      .collection("users")
      .snapshotChanges()
      .subscribe((users: any) => {
        console.log("users:", users);
      });
  }
}
