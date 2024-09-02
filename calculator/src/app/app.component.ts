import { Component, OnInit } from '@angular/core';
import { ICaultBtn, ITheme, IThemes } from './interfaces/globals';
import { ThemeSwitcherService } from './services/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private themeService: ThemeSwitcherService){}

	ngOnInit(): void {
		this.themeService.getTheme().subscribe(theme =>{
			this.setTheme(theme);
		})
	}

  	protected title = 'calculator';

	protected screenValue:string = '0';

	private arrayOfClickedBtns:any[] = [];
	private clickedNumbers:string = '';
	private operator:string = '';
	private formulaChain:string[] = [];
	private result:number = 0;
	private isEqualClicked:boolean = false;
	private isDecimal: boolean = false;

	protected clickNumber(number: string):void {//click number or dot: '.'
		let _nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		let _clickedBtn:any;
		let _index = +number

		number === '.' ? 
			_clickedBtn = '.' : 
			_clickedBtn = _nums[_index];
	
		if (this.isEqualClicked === true) {
			this.screenValue = ''; 
			this.arrayOfClickedBtns = [];
			this.isEqualClicked = false;
			this.isDecimal = false;
			this.clickedNumbers = '';
		}
	
		this.arrayOfClickedBtns.push(_clickedBtn);
		let _stringNums = this.convertArrayToString(this.arrayOfClickedBtns)
		this.clickedNumbers = _stringNums;
		this.screenValue = _stringNums;
	
		this.logEverything();
	}
	
	protected clickOperator(operator:string):void {
		this.operator = operator
		this.isDecimal = false; // Reseteljük a pont jelzőt, hogy újra lehessen pontot használni a következő számnál

		if(this.isEqualClicked === true){
			this.formulaChain.push(operator);
		} else {
			this.arrayOfClickedBtns = []
			this.formulaChain.push(this.clickedNumbers);
			this.formulaChain.push(operator);
		}
		this.logEverything()
	}

	protected reset():void {
		this.screenValue = '0'
		this.arrayOfClickedBtns = []
		this.formulaChain = []
		this.isEqualClicked = false;
		this.isDecimal = false;
		this.clickedNumbers = '';
	}

	protected delete():void {
		if(this.arrayOfClickedBtns.length > 1){
			this.arrayOfClickedBtns.pop();
			let _strings = this.convertArrayToString(this.arrayOfClickedBtns)
			this.screenValue = _strings
		} 
		else {
			this.screenValue = '0'
			this.arrayOfClickedBtns = []
			this.clickedNumbers = ''
		}
	}

	protected equal():void {
		this.isEqualClicked = true;
		this.formulaChain.push(this.screenValue)
		let _res:any
		if(this.operator === '+'){
			_res = +this.formulaChain[0] + +this.formulaChain[2]
		}
		if(this.operator === '-'){
			_res = +this.formulaChain[0] - +this.formulaChain[2]
		}
		if(this.operator === '*'){
			_res = +this.formulaChain[0] * +this.formulaChain[2]
		}
		if(this.operator === '/'){
			_res = +this.formulaChain[0] / +this.formulaChain[2]
		}

		this.result = _res.toFixed(0);
		this.screenValue = this.result.toString()
		let _lastVal = this.result.toString();
		this.formulaChain = []
		this.formulaChain.push(_lastVal.toString())
		this.arrayOfClickedBtns = [];
		this.arrayOfClickedBtns.push(Number(_lastVal))

		this.logEverything()
	}

	protected isNaN(value: any): boolean {
		return isNaN(value);
	}

	private convertArrayToString(arr: number[]):string {
		return arr.join('')
	}

	private logEverything():void {
		console.log('screenValue:');
		console.log(this.screenValue);
		console.log('arrayOfClickedBtns:');
		console.log(this.arrayOfClickedBtns);
		console.log('formulaChain:');
		console.log(this.formulaChain);
		console.log('result:');
		console.log(this.result);
		console.log('clickedNumbers:');
		console.log(this.clickedNumbers);
		console.log('operator:');
		console.log(this.operator);
		console.log('isEqualClicked:');
		console.log(this.isEqualClicked);
	}

	private setTheme(theme:string){
		if(theme === 'first' || theme === 'second' || theme === 'third'){
			this.selectedTheme = this.themes[theme];
			console.log(this.selectedTheme);
		}
	}

	protected selectedTheme:ITheme = {
		  backgroundMain: '#3A4764',       // A fő háttér színe
		  backgroundToggle: '#252D44',     // A téma váltó háttérszíne
		  backgroundScreen: '#181F33',     // A kijelző háttérszíne
		  keyBackground: '#EAE3DC',        // A világos gombok háttérszíne
		  keyShadow: '#B4A597',            // A világos gombok árnyékszíne
		  keyBackgroundToggle: '#637097',  // A speciális gombok (pl. DEL) háttérszíne
		  keyShadowDark: '#404E72',        // A speciális gombok (pl. DEL) árnyékszíne
		  keyBackgroundLight: '#D03F2F',   // A különleges gombok (pl. egyenlőségjel) háttérszíne
		  keyShadowLight: '#93261A',       // A különleges gombok (pl. egyenlőségjel) árnyékszíne
		  keyTextColor: '#444B5A',         // A gombokon lévő szöveg színe (számok és operátorok)
		  textWhite: '#FFFFFF',            // A kijelző szövegszíne és a gombok fehér szövege
	}

	protected themes:IThemes = {
		first: {
		  backgroundMain: '#3A4764',       // A fő háttér színe
		  backgroundToggle: '#252D44',     // A téma váltó háttérszíne
		  backgroundScreen: '#181F33',     // A kijelző háttérszíne
		  keyBackground: '#EAE3DC',        // A világos gombok háttérszíne
		  keyShadow: '#B4A597',            // A világos gombok árnyékszíne
		  keyBackgroundToggle: '#637097',  // A speciális gombok (pl. DEL) háttérszíne
		  keyShadowDark: '#404E72',        // A speciális gombok (pl. DEL) árnyékszíne
		  keyBackgroundLight: '#D03F2F',   // A különleges gombok (pl. egyenlőségjel) háttérszíne
		  keyShadowLight: '#93261A',       // A különleges gombok (pl. egyenlőségjel) árnyékszíne
		  keyTextColor: '#444B5A',         // A gombokon lévő szöveg színe (számok és operátorok)
		  textWhite: '#FFFFFF',            // A kijelző szövegszíne és a gombok fehér szövege
		},
		second: {
		  backgroundMain: '#E6E6E6',       // A fő háttér színe
		  backgroundToggle: '#D2CDCD',     // A téma váltó háttérszíne
		  backgroundScreen: '#EEEEEE',     // A kijelző háttérszíne
		  keyBackground: '#E5E4E1',        // A világos gombok háttérszíne
		  keyShadow: '#A69D91',            // A világos gombok árnyékszíne
		  keyBackgroundToggle: '#377F86',  // A speciális gombok (pl. DEL) háttérszíne
		  keyShadowDark: '#1B5F65',        // A speciális gombok (pl. DEL) árnyékszíne
		  keyBackgroundLight: '#CA5502',   // A különleges gombok (pl. egyenlőségjel) háttérszíne
		  keyShadowLight: '#893901',       // A különleges gombok (pl. egyenlőségjel) árnyékszíne
		  keyTextColor: '#36362C',         // A gombokon lévő szöveg színe (számok és operátorok)
		  textWhite: '#FFFFFF',            // A kijelző szövegszíne és a gombok fehér szövege
		},
		third: {
		  backgroundMain: '#17062A',       // A fő háttér színe
		  backgroundToggle: '#1E0836',     // A téma váltó háttérszíne
		  backgroundScreen: '#1E0836',     // A kijelző háttérszíne
		  keyBackground: '#331C4D',        // A világos gombok háttérszíne
		  keyShadow: '#881C9E',            // A világos gombok árnyékszíne
		  keyBackgroundToggle: '#56077C',  // A speciális gombok (pl. DEL) háttérszíne
		  keyShadowDark: '#BC15F4',        // A speciális gombok (pl. DEL) árnyékszíne
		  keyBackgroundLight: '#00DED0',   // A különleges gombok (pl. egyenlőségjel) háttérszíne
		  keyShadowLight: '#6CF9F2',       // A különleges gombok (pl. egyenlőségjel) árnyékszíne
		  keyTextColor: '#FFE53D',         // A gombokon lévő szöveg színe (számok és operátorok, sárga)
		  textWhite: '#FFFFFF',            // A kijelző szövegszíne és a gombok fehér szövege
		}
	  };
	  
}