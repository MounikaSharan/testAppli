import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';

  public name="ABC company";
  public details="Internship";
  public image="/assets/download.png";

  onClick() {
    console.log("Registered successfully")
  }

}
