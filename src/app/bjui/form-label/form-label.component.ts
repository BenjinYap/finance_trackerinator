import {Component, Input} from '@angular/core';

@Component({
  selector: 'bj-form-label',
  standalone: true,
  imports: [],
  templateUrl: './form-label.component.html',
  styleUrl: './form-label.component.scss'
})
export class FormLabelComponent {
  @Input() public for: string = '';
}
