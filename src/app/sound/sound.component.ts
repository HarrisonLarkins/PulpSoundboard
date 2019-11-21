import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements OnInit {
	debug = "Debug"
	
  constructor() { }

  ngOnInit() {
  }
  
  soundTest(){
	let audio = new Audio();
	audio.src="../assets/phone.mp3"
	audio.load();
	audio.play();
  };

}
