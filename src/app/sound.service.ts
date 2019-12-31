import { Injectable } from '@angular/core';
import { Soundbyte} from './soundbyte';


@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor() { }
  
  play(soundbyte: Soundbyte){
		soundbyte.audio = new Audio();
		soundbyte.audio.src = soundbyte.path;
		soundbyte.audio.load();
		soundbyte.audio.loop = soundbyte.loopSetting;
		soundbyte.audio.play();
	}
	
	toggleLoop(soundbyte: Soundbyte){
		if(soundbyte.loopSetting == true) {
			soundbyte.audio.pause();
			soundbyte.loopSetting = false;
			soundbyte.loopText = "Play Once";
		}
		else {
			soundbyte.loopSetting = true;
			soundbyte.loopText = "Loop";
		}
	}
 
}
