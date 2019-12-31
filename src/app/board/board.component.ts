import { Component, OnInit } from '@angular/core';
import { Soundbyte } from '../soundbyte';
import { SOUNDS } from '../sound-list';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	
	
	sounds = SOUNDS;
	
	
	/**
	audio = new Audio();
	
	playAudio(soundbyte: Soundbyte){
		//let audio = new Audio();
		this.audio.src = soundbyte.path;
		this.audio.load();
		this.audio.loop = soundbyte.loopSetting;
		this.audio.play();
	}
	
	toggleLoop(soundbyte: Soundbyte){
		if(soundbyte.loopSetting == true) {
			this.audio.pause();
			soundbyte.loopSetting = false;
			soundbyte.loopText = "Play Once";
		}
		else {
			soundbyte.loopSetting = true;
			soundbyte.loopText = "Loop";
		}
	}
	
	soundbyte: Soundbyte = {
		name: 'phone',
		path: '../../assets/phone.mp3'
	};
	
	
	
	loopSetting = false;
	loopText = "Play Once";
	audio = new Audio();
	
	

	**/

  constructor(private _soundService: SoundService) { }

  ngOnInit() {
	  
  }

}
