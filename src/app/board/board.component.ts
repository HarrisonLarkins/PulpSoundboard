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
	
	
	weapons = WEAPONS;
	ones = ONES;
	alarms = ALARMS;
	
	
	stopAll(){
		this.sounds.forEach(
			function (sound){
				sound.audio.pause();
			}
		);
	}

  constructor(private _soundService: SoundService) { }

  ngOnInit() {
	  
  }

}
