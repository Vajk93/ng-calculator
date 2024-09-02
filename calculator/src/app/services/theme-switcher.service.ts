import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IThemes } from '../interfaces/globals';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

	constructor() { 
		this.selectedTheme$ = new BehaviorSubject<string>('first');
	}

	public selectedTheme$!: BehaviorSubject<string>;

	public setTheme(theme: string): void {
		this.selectedTheme$.next(theme);
	}

	public getTheme(): Observable<string> {
		return this.selectedTheme$.asObservable();
	}
}
