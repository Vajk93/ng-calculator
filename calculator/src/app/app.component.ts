import { Component, OnInit } from '@angular/core';
import { ITheme, IThemes } from './interfaces/globals';
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
		mainBg: '#3A4764',
		calcText: '#FFFFFF',
		themeText: '#FFFFFF',
		switcherNumbers: '#FFFFFF',
		switcherBg: '#252D44',
		switcherToggleBtn: '#D03F2F',
		screenBg: '#181F33',
		screenText: '#FFFFFF',
		bgOfButtons: '#EAE3DC',
		buttonsBg: '#252D44',
		basicButtonsText: '#444B5A',
		basicButtonsShadow: '#B4A597',
		delResetText: '#FFFFFF',
		delResetKeyBg: '#637097',
		delResetKeyShadow: '#404E72',
		equalText: '#FFFFFF',
		equalKeyBg: '#D03F2F',
		equalKeyShadow: '#93261A',      
	}

	protected themes: IThemes = {
		first: {
		  mainBg: '#3A4764',               // A fő háttér színe (blue)
		  calcText: '#FFFFFF',             // A számológép szövegeinek színe
		  themeText: '#FFFFFF',            // A téma választó szövegének színe
		  switcherNumbers: '#FFFFFF',      // A téma választó gombok színe
		  switcherBg: '#252D44',           // A téma váltó háttérszíne
		  switcherToggleBtn: '#D03F2F',    // A téma váltó gomb színe
		  screenBg: '#181F33',             // A kijelző háttérszíne
		  screenText: '#FFFFFF', 		   // A kijelzőn megjelenő számok színe
		  bgOfButtons: '#242E43',          
		  buttonsBg: '#B4A597',            // A gombok mögötti háttérszín
		  basicButtonsText: '#444B5A',     // A számok és alapműveleti jelek színe a gombokon
		  basicButtonsShadow: '#EAE3DC',   // A számok és alapműveleti jelek árnyéka
		  delResetText: '#FFFFFF',         // A DEL és RESET gombok szövegének színe
		  delResetKeyBg: '#637097',        // A DEL és RESET gombok háttérszíne
		  delResetKeyShadow: '#404E72',    // A DEL és RESET gombok árnyéka
		  equalText: '#FFFFFF',            // Az egyenlőségjel gomb szövegének színe
		  equalKeyBg: '#D03F2F',           // Az egyenlőségjel gomb háttérszíne
		  equalKeyShadow: '#93261A',       // Az egyenlőségjel gomb árnyéka
		},
		second: {
		  mainBg: '#E6E6E6',
		  calcText: '#36362C',
		  themeText: '#36362C',
		  switcherNumbers: '#36362C',
		  switcherBg: '#D2CDCD',
		  switcherToggleBtn: '#CA5502', 
		  screenBg: '#EEEEEE', 
		  screenText: '#36362C', 
		  bgOfButtons: '#D3CDCF',
		  buttonsBg: '#AFACA4',
		  basicButtonsText: '#36362C',
		  basicButtonsShadow: '#E5E4E0',
		  delResetText: '#FFFFFF',
		  delResetKeyBg: '#377F86',
		  delResetKeyShadow: '#1B5F65',
		  equalText: '#FFFFFF',
		  equalKeyBg: '#CA5502',
		  equalKeyShadow: '#893901',
		},
		third: {
		  mainBg: '#17062A',
		  calcText: '#FFE53D',
		  themeText: '#FFE53D',
		  switcherNumbers: '#FFE53D',
		  switcherBg: '#1E0836',
		  switcherToggleBtn: '#00DED0',
		  screenBg: '#1E0836',
		  screenText: '#FFE53D',
		  bgOfButtons: '#1C0634',
		  buttonsBg: '#881C9E',
		  basicButtonsText: '#FFE53D',
		  basicButtonsShadow: '#33194D',
		  delResetText: '#FFFFFF',
		  delResetKeyBg: '#56077C',
		  delResetKeyShadow: '#BC15F4',
		  equalText: '#1E0836',
		  equalKeyBg: '#00DED0',
		  equalKeyShadow: '#6CF9F2',
		}
	  };
	  
	  
}









// mainBg: A fő háttér színe (blue, light, purple).
// calcText: A számológép szövegeinek színe.
// themeText: A téma választó szövegének színe.
// switcherNumbers: A téma választó gombok színe.
// switcherBg: A téma váltó háttérszíne.
// switcherToggleBtn: A téma váltó gomb színe.
// screenBg: A kijelző háttérszíne.
// screenText: A kijelzőn megjelenő számok színe.
// buttonsBg: A gombok mögötti háttérszín.
// basicButtonsText: A számok és alapműveleti jelek színe a gombokon.
// basicButtonsShadow: A számok és alapműveleti jelek árnyéka.
// delResetText: A DEL és RESET gombok szövegének színe.
// delResetKeyBg: A DEL és RESET gombok háttérszíne.
// delResetKeyShadow: A DEL és RESET gombok árnyéka.
// equalText: Az egyenlőségjel gomb szövegének színe.
// equalKeyBg: Az egyenlőségjel gomb háttérszíne.
// equalKeyShadow: Az egyenlőségjel gomb árnyéka.
// Ez a themes objektum teljesen megfelel az









