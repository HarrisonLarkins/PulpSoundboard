import { Injectable } from '@angular/core';
import { Soundbyte} from '@app/classes/soundbyte';
import { WEAPONS, ONES, ALARMS } from 'assets/sound-list';
import { SOUNDS } from 'assets/sound-list-Test';
import { SoundbyteArray} from '@app/classes/soundbytearray';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
	

  constructor() { }
  
  

	
	getAll(): SoundbyteArray[] {
		return SOUNDS;
	}
  
    /**
	creates audio object for audio property of soundbyte
	**/
	play(soundbyte: Soundbyte){
        
		//create audio object for audio prop if it doesn't already exist
		if(!soundbyte.audio){
			soundbyte.audio = new Audio();
		}
		
		//initialize audio settings
		soundbyte.audio.src = soundbyte.path;
		soundbyte.audio.load();
		soundbyte.audio.loop = soundbyte.loopSetting;
		soundbyte.audio.volume = 1;
		
		//play audio
		soundbyte.audio.play();
	}
	
	/**
	If soundbyte is set to loop, changes it to play once; If soundbyte is set to play once, changes it to loop
	**/
	toggleLoop(soundbyte: Soundbyte){
		if(soundbyte.loopSetting == true) {
			soundbyte.loopSetting = false;
			soundbyte.loopText = "Play Once";

		}
		else {
			soundbyte.loopSetting = true;
			soundbyte.loopText = "Loop";
		}
	}
	
	/*
	If the audio has been intialized, pauses (stops) audio immediately
	*/
	stop(soundbyte: Soundbyte){
		if(soundbyte.audio) {
			soundbyte.audio.pause();
		}
	}
	
	/*
	If the audio has been intialized, pauses (stops) audio immediately
	*/
	stopAll(soundbyteArray: SoundbyteArray){
		
		//make other function accessible
		var stop = this.stop;
		
		//Iterate through all sounds and fade out those that have been initialized
		for (var soundArray in SOUNDS) {
			SOUNDS[soundArray].array.forEach(
				function (sound) {
					if(sound.audio) {
						stop(sound);		
					}
							
				}
			);
		}
	}
	
	
	/*
	If the audio has been intialized, pauses (stops) audio after the clip finishes
	*/
	stopAfterPlay(soundbyte: Soundbyte){
		if(soundbyte.audio) {
			soundbyte.audio.loop = false;
		}
	}	
	
	/**
	* Fade out passed in sound
	**
	fadeOutOne(soundbyte: Soundbyte) {
		if(soundbyte.audio == null){			
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
  }**/

  /**
* Fade out passed in sound
**/
  fadeAttr(soundbyte: Soundbyte, prop: string, finalValue: number, fadeTime: number) {
    if (soundbyte.audio == null) {
      return;
    }
    else {
      var startAmount = soundbyte.audio[prop];

      var freq = 100; //time between each cycle in ms		
     // var fadeTime = 3; //how long to fade in seconds
      var numOfSteps = fadeTime / (freq / 1000)

      var fadeAmount = startAmount / numOfSteps;
      var fade = setInterval(
        function () {
          if (soundbyte.audio[prop] - fadeAmount >= finalValue) {
            soundbyte.audio[prop] = soundbyte.audio[prop] - fadeAmount;
          }
          else {
            soundbyte.audio[prop] = finalValue;
            clearInterval(fade);
          }
        },
        freq);

    }
  }
	
	/**
	* Fade out all sounds using fadeOutOne on each sound
	**/
  fadeOutAll(prop: string, finalValue: number, fadeTime: number) {
		
		//make other function accessible
		var fadeAttr = this.fadeAttr;
		
		//Iterate through all sounds and fade out those that have been initialized
		for (var soundArray in SOUNDS) {
			SOUNDS[soundArray].array.forEach(
				function (sound) {
					if(sound.audio) {
						fadeAttr(sound, prop, finalValue, fadeTime);		
					}
							
				}
			);
		}
	}
 
}
