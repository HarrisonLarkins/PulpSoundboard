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
		soundbyte.audio.volume = 1;
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
	
	//Runs every .5 seconds
	//TO-DO: Better typechecking
	fadeOut(soundbyte: any) {			
		
		if(Array.isArray(soundbyte)){
			soundbyte.forEach(elem => this.fadeOut(elem));
		}
		else if(soundbyte.audio == null){			
			return;
		}
		else{
			var startAmount = soundbyte.audio.volume;
			
			var freq = 100; //time between each cycle in ms		
			var fadeTime = 2; //how long to fade in seconds
			var numOfSteps = fadeTime / (freq/1000)
			
			var fadeAmount = startAmount / numOfSteps;
			var fade = setInterval(
				function(){
					//console.log(soundbyte.audio.volume - fadeAmount);
					if(soundbyte.audio.volume - fadeAmount >= 0){
						soundbyte.audio.volume = soundbyte.audio.volume - fadeAmount;
					}
					else {
						soundbyte.audio.volume = 0;
						clearInterval(fade);
					}
				},
			freq);
			
		}
	}
 
}
