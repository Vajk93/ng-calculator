export interface ICaultBtn {
	value:number | string,
	function: any,
	width: 1 | 2,
}
export interface ITheme {
	backgroundMain: string;         // A fő háttér színe
	backgroundToggle: string;       // A téma váltó háttérszíne
	backgroundScreen: string;       // A kijelző háttérszíne
	keyBackground: string;          // A világos gombok háttérszíne
	keyShadow: string;              // A világos gombok árnyékszíne
	keyBackgroundToggle: string;    // A speciális gombok (pl. DEL) háttérszíne
	keyShadowDark: string;          // A speciális gombok (pl. DEL) árnyékszíne
	keyBackgroundLight: string;     // A különleges gombok (pl. egyenlőségjel) háttérszíne
	keyShadowLight: string;         // A különleges gombok (pl. egyenlőségjel) árnyékszíne
	keyTextColor: string;           // A gombokon lévő szöveg színe (számok és operátorok)
	textWhite: string;              // A kijelző szövegszíne és a gombok fehér szövege
  }
  
  export interface IThemes {
	first: ITheme;
	second: ITheme;
	third: ITheme;
  }
  