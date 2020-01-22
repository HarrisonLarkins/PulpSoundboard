import { Soundbyte} from '@app/classes/soundbyte';
import { SoundbyteArray } from '@app/classes/soundbytearray';

const ALARMS: Soundbyte[] = [
	{
		name: 'Alarm - City',
		path: 'assets/Alarms/alarm - city.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
	{
		name: 'Alarm - Small',
		path: 'assets/Alarms/alarm - small.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
];

const ONES: Soundbyte[] = [
	{
		name: 'Bell',
		path: 'assets/Ones/bell.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
	{
		name: 'Phone',
		path: 'assets/Ones/phone.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
];

const TESTS: Soundbyte[] = [
	{
		name: 'Woah',
		path: 'assets/Tests/Woah.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
];

const WEAPONS: Soundbyte[] = [
	{
		name: '380',
		path: 'assets/Weapons/380.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
	{
		name: 'Classicshot',
		path: 'assets/Weapons/classicshot.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
	{
		name: 'Sniper',
		path: 'assets/Weapons/sniper.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
];

export const SOUNDS: SoundbyteArray[] = [
	{
		name: 'Alarms',
		array: ALARMS
	},
	{
		name: 'Ones',
		array: ONES
	},
	{
		name: 'Tests',
		array: TESTS
	},
	{
		name: 'Weapons',
		array: WEAPONS
	},
];
