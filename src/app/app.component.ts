import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-First-Angular-Project';

  loadedfeature : String='recipe';

  PFeature(feature: String){
    console.log("Hi  "+feature);
    
    this.loadedfeature=feature;
  }


}
 