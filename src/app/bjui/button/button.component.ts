import {Attribute, Component, Directive, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'bj-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  public className: string = '';
  @Input() public submit: boolean = false;

  constructor(@Attribute('class') className: string) {
    this.className = className;
  }
}
