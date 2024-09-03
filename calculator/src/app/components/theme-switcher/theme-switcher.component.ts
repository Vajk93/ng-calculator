import { Component } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {

	constructor(private themeService: ThemeSwitcherService){}

	protected themeWithOneWord:string = 'first';

	protected changeTheme(theme: string){
		this.themeWithOneWord = theme;
		this.themeService.setTheme(theme);
		this.themeService.selectedTheme$.subscribe(theme=>{
			this.setTheme(theme)
		})
	}

	private setTheme(theme:string){
		if(theme === 'first' || theme === 'second' || theme === 'third'){
			this.selectedTheme = this.themes[theme];
			console.log(this.selectedTheme);
		}
	}

	protected selectedTheme:any = {
		mainBg: '#3A4764',
		calcText: '#FFFFFF',
		themeText: '#FFFFFF',
		switcherNumbers: '#FFFFFF',
		switcherBg: '#252D44',
		switcherToggleBtn: '#D03F2F',   
	}

	protected themes: any = {
		first: {
		  calcText: '#FFFFFF', 
		  themeText: '#FFFFFF', 
		  switcherNumbers: '#FFFFFF',
		  switcherBg: '#252D44',
		  switcherToggleBtn: '#D03F2F',  
		},
		second: {
		  mainBg: '#E6E6E6',
		  calcText: '#36362C',
		  themeText: '#36362C',
		  switcherNumbers: '#36362C',
		  switcherBg: '#D2CDCD',
		  switcherToggleBtn: '#CA5502',
		},
		third: {
		  mainBg: '#17062A',
		  calcText: '#FFE53D',
		  themeText: '#FFE53D',       
		  switcherNumbers: '#FFE53D',
		  switcherBg: '#1E0836',  
		  switcherToggleBtn: '#00DED0', 
		}
	  };
}
