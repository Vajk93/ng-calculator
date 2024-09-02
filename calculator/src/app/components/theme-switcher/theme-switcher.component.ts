import { Component } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {

	constructor(private themeService: ThemeSwitcherService){}

	protected selectedTheme:string = 'first';

	protected selectTheme(theme: string){
		this.selectedTheme = theme;
		this.themeService.setTheme(theme);
	}
}
