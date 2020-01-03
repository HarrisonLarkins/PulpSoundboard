/**
Soundbyte class used for holding individual clips
name - name of clip for board
path - path to the file
loopSetting - true: clip will loop, false: clip will play once 
loopText - for board loop button, describes current setting
audio - will hold audio object
**/
export class Soundbyte{
	name: string; 
	path: string;
	loopSetting: boolean;
	loopText: string;
	audio;



}
