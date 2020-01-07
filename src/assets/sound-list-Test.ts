import { Soundbyte} from '@app/classes/soundbyte';
import { SoundbyteArray } from '@app/classes/soundbytearray';


const WEAPONS: Soundbyte[] = [	
	{
		name: '380',
		path: 'assets/380.mp3',
		loopSetting: false,
		loopText: "Play Once",
		audio: null
	},
	{
		name: 'Classic Shot',
		path: 'assets/classicshot.mp3',
		loopSetting: false,
		loopText: "Play Once",
		audio: null
	},
	{
		name: 'sniper',
		path: 'assets/sniper.mp3',
		loopSetting: false,
		loopText: "Play Once",
		audio: null
	}
];

const ONES: Soundbyte[] = [	
	{
		name: 'bell',
		path: 'assets/bell.mp3',
		loopSetting: false,
		loopText: "Play Once",
		audio: null
	},
	{
		name: 'phone',
		path: 'assets/phone.mp3',
		loopSetting: false,
		loopText: "Play Once",
		audio: null
	}
	
];

const ALARMS: Soundbyte[] = [	
	{
		name: 'Small Alarm',
		path: 'assets/alarm - small.mp3',
		loopSetting: true,
		loopText: "Loop",
		audio: null
	},
	{
		name: 'City Alarms',
		path: 'assets/alarm - city.mp3',
		loopSetting: true,
		loopText: "Loop",
		audio: null
	}
	
];

export const SOUNDS: SoundbyteArray[] = [
	{	
		name: 'Weapons',
		array: WEAPONS
	},
	{	
		name: 'Ones',
		array: ONES
	},
	{	
		name: 'Alarms',
		array: ALARMS
	}
	];