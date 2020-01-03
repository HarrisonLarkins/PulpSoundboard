import { Component, OnInit } from '@angular/core';
import { Soundbyte } from '@app/classes/soundbyte';
import { WEAPONS, ONES, ALARMS } from 'assets/sound-list';
import { SoundService } from '@app/services/sound.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	
	//expose imported arrays of soundbytes
	weapons: Soundbyte[];
	ones: Soundbyte[];
	alarms: Soundbyte[];
	
	getWeapons(): void {
		this.weapons = this._soundService.getWeapons();
	}
	
	getOnes(): void {
		this.ones = this._soundService.getOnes();
	}
	
	getAlarms(): void {
		this.alarms = this._soundService.getAlarms();
	}
	
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
	  
	  this.getWeapons();
	  this.getOnes();
	  this.getAlarms();
	  
  }

}
