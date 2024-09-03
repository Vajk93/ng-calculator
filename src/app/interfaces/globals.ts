export interface ICaultBtn {
	value:number | string,
	function: any,
	width: 1 | 2,
}

export interface ITheme {
	mainBg: string;               // A fő háttér színe
	calcText: string;             // A számológép szövegeinek színe
	themeText: string;            // A téma választó szövegének színe
	switcherNumbers: string;      // A téma választó gombok színe
	switcherBg: string;           // A téma váltó háttérszíne
	switcherToggleBtn: string;    // A téma váltó gomb színe
	screenBg: string;             // A kijelző háttérszíne
	screenText: string;           // A kijelzőn megjelenő számok színe
	bgOfButtons: string;
	buttonsBg: string;            // A gombok mögötti háttérszín
	basicButtonsText: string;     // A számok és alapműveleti jelek színe a gombokon
	basicButtonsShadow: string;   // A számok és alapműveleti jelek árnyéka
	delResetText: string;         // A DEL és RESET gombok szövegének színe
	delResetKeyBg: string;        // A DEL és RESET gombok háttérszíne
	delResetKeyShadow: string;    // A DEL és RESET gombok árnyéka
	equalText: string;            // Az egyenlőségjel gomb szövegének színe
	equalKeyBg: string;           // Az egyenlőségjel gomb háttérszíne
	equalKeyShadow: string;       // Az egyenlőségjel gomb árnyéka
  }
  
  export interface IThemes {
	first: ITheme;
	second: ITheme;
	third: ITheme;
  }
  