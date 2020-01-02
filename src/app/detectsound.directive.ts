import { Directive } from '@angular/core';
import { HostListener } from '@angular/core'
import { Soundbyte } from './soundbyte';

@Directive({
  selector: '[appDetectsound]'
})
export class DetectsoundDirective {

  constructor(private sound: Soundbyte) { }
  
  @HostListener('ended') onEnded() {
	  this.sound.audio.pause();
  }

}
