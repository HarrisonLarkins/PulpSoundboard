import { Component, OnInit } from '@angular/core';
import { Soundbyte } from '../soundbyte';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	
	soundbyte: Soundbyte = {
		name: 'phone',
		path: '../../assets/phone.mp3'
	};

  constructor() { }

  ngOnInit() {
  }

}
