import { Component, OnInit } from '@angular/core';
import { Soundbyte } from '../soundbyte';
import { WEAPONS, ONES, ALARMS } from '../../assets/sound-list';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	
	//expose imported arrays of soundbytes
	weapons = WEAPONS;
	ones = ONES;
	alarms = ALARMS;
	
	//create array of soundbyte arrays
	sounds = [this.weapons, this.ones, this.alarms];
	
	/**
	iterate through array of soundbyte arrays and pause the audio in each
	**/
	stopAll(){
		this.sounds.forEach(
			function (soundArr) {
				soundArr.forEach(
					function (sound) {
						if(sound.audio){
							sound.audio.pause();
						}						
					}
				);
			}
		);
	}
	
	/**
	pass array of soundbyte arrays into fadeOut func from soundService
	works recursively to reach base level of each array
	*/
	fadeAll(){
		this._soundService.fadeOut(this.sounds);
	}

  constructor(private _soundService: SoundService) { }

  ngOnInit() {
	  
  }

}
