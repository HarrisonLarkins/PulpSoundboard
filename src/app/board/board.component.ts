import { Component, OnInit } from '@angular/core';
import { Soundbyte } from '../soundbyte';
import { SOUNDS } from '../../assets/sound-list';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	
	
	sounds = SOUNDS;
	
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
