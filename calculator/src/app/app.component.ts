import { Component } from '@angular/core';
import { ICaultBtn } from './interfaces/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'calculator';

	protected clickNumber(number: number) {
		let nums = [0,1,2,3,4,5,6,7,8,9];
		
		let _clickedBtn = nums[number]; 
		//add to array like this: [1,2,3,4]:
		this.arrayOfClickedBtns.push(_clickedBtn)
		console.log(this.arrayOfClickedBtns);
		// then join them into a string:
		let _stringNums = this.arrayOfClickedBtns.join('');
		console.log(_stringNums);
		// set the value to screen value:
		this.screenValue = _stringNums
	}

	protected delete(){
		if(this.arrayOfClickedBtns.length > 1){
			this.arrayOfClickedBtns.pop();
			let _strings = this.convertArrayToString(this.arrayOfClickedBtns)
			console.log(_strings);
			console.log(this.arrayOfClickedBtns);
			this.screenValue = _strings
		} 
		else {
			// i am not sure, this will need here:
			this.screenValue = '0'
			this.arrayOfClickedBtns = []
		}
	}

	protected reset(){
		this.screenValue = '0'
		this.arrayOfClickedBtns = []
	}

	private convertArrayToString(arr: number[]):string {
		return arr.join('')
	}

	protected screenValue:string = '0';
	protected result:number = 0;
	protected arrayOfClickedBtns:number[] = [];
	
	// public buttons: ICaultBtn[] = [
	// 	{ value: 7, function: this.clickBtn(), width: 1},
	// 	{ value: 8, function: this.clickBtn(), width: 1},
	// 	{ value: 9, function: this.clickBtn(), width: 1},
	// 	{ value: "DEL", function: this.clickBtn(), width: 1},
	// 	{ value: 4, function: this.clickBtn(), width: 1},
	// 	{ value: 5, function: this.clickBtn(), width: 1},
	// 	{ value: 6, function: this.clickBtn(), width: 1},
	// 	{ value: "+", function: this.clickBtn(), width: 1},
	// 	{ value: 1, function: this.clickBtn(), width: 1},
	// 	{ value: 2, function: this.clickBtn(), width: 1},
	// 	{ value: 3, function: this.clickBtn(), width: 1},
	// 	{ value: "-", function: this.clickBtn(), width: 1},
	// 	{ value: ".", function: this.clickBtn(), width: 1},
	// 	{ value: 0, function: this.clickBtn(), width: 1},
	// 	{ value: "/", function: this.clickBtn(), width: 1},
	// 	{ value: "x", function: this.clickBtn(), width: 1},
	// 	{ value: "RESET", function: this.clickBtn(), width: 2},
	// 	{ value: "=", function: this.clickBtn(), width: 2},
	// ]

	// protected clickBtn(){

	// }


}
