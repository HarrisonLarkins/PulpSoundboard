import { Injectable } from '@angular/core';
import { Soundbyte} from './soundbyte';


@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor() { }
  
  play(soundbyte: Soundbyte){
		if(!soundbyte.audio){
			soundbyte.audio = new Audio();
		}		
		soundbyte.audio.src = soundbyte.path;
		soundbyte.audio.load();
		soundbyte.audio.loop = soundbyte.loopSetting;
		soundbyte.audio.play();
	}
	
	toggleLoop(soundbyte: Soundbyte){
		if(soundbyte.loopSetting == true) {
			/**if(soundbyte.audio){
				soundbyte.audio.pause();	
			}**/
			soundbyte.loopSetting = false;
			soundbyte.loopText = "Play Once";

		}
		else {
			soundbyte.loopSetting = true;
			soundbyte.loopText = "Loop";
		}
	}
	
	stop(soundbyte: Soundbyte){
		if(soundbyte.audio) {
			soundbyte.audio.pause();
		}
	}
	
	stopAfterPlay(soundbyte: Soundbyte){
		if(soundbyte.audio) {
			soundbyte.audio.loop = false;
		}
	}
 
}
