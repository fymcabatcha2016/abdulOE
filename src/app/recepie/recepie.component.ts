import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {

	isListClickedVar = false;
	itemdata : any;
  constructor() { }

  ngOnInit() {
  }

  add(){}

  onItemCLicked(item){
  	this.isListClickedVar = true;
  	this.itemdata = item;
  	
  }


}
