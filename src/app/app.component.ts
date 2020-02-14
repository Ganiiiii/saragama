import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "saragama";
  constructor(private db: AngularFirestore) {}
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
