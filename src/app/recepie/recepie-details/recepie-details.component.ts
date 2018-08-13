import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {

	private _item : any;

  constructor() { }

  ngOnInit() {}

  get item(){
		return this._item;
	}

	@Input()
	set item(n){		
		this._item = n;
	}


}
