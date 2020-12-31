import { Output } from "@angular/core";
import { Component, EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {

    @Output() selectedFeature = new EventEmitter<String>();

    OnSelect(feature : String){
        console.log(feature);
        
        this.selectedFeature.emit(feature);
    }

} 