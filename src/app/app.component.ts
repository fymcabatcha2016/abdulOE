import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
recOrNot : boolean = true;
onSel(e){	
	this.recOrNot = (e == "recipe" ? true : false);
}
}
