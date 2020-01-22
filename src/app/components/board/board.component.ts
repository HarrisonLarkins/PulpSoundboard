import { Component, OnInit } from '@angular/core';
import { Soundbyte } from '@app/classes/soundbyte';
//import { WEAPONS, ONES, ALARMS } from 'assets/sound-list';
import { SoundService } from '@app/services/sound.service';
import { SoundbyteArray } from '@app/classes/soundbytearray';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	
	allSounds: SoundbyteArray[];
	
	getAllSounds(): void {
		this.allSounds = this._soundService.getAll();
	}
		
	
	

  constructor(private _soundService: SoundService) { }

  ngOnInit() {
	  
	  this.getAllSounds();
	  
  }

}
