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

const SONGS: Soundbyte[] = [
	{
		name: 'All Of The Lights - Kanye West',
		path: 'assets/Songs/All of the Lights - Kanye West.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
	{
		name: 'Daylight - Matt And Kim',
		path: 'assets/Songs/Daylight - Matt and Kim.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
	{
		name: 'Green Light - John Legend',
		path: 'assets/Songs/Green Light - John Legend.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
	{
		name: 'In The Heights',
		path: 'assets/Songs/In The Heights.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
	{
		name: 'Lighters - Bruno',
		path: 'assets/Songs/Lighters - Bruno.mp3',
		loopSetting: false,
		loopText: "Play Oonce",
		audio: null
	},
	{
		name: 'Lighters Up - Lil Kim',
		path: 'assets/Songs/Lighters Up - Lil Kim.mp3',
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
		name: 'Songs',
		array: SONGS
	},
	{
		name: 'Weapons',
		array: WEAPONS
	},
];
