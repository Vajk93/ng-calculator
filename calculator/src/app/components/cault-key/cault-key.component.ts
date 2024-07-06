import { Component, Input} from '@angular/core';
import { ICaultBtn } from 'src/app/interfaces/globals';

@Component({
  selector: 'app-cault-key',
  templateUrl: './cault-key.component.html',
  styleUrls: ['./cault-key.component.css']
})
export class CaultKeyComponent {

	@Input() item:ICaultBtn = {
		value: "",
		function: null,
		width: 1
	}
}
