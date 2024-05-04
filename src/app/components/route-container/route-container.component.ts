import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-route-container',
  standalone: true,
  imports: [],
  templateUrl: './route-container.component.html',
  styleUrl: './route-container.component.scss'
})
export class RouteContainerComponent {
  @Input() public class: string = '';
}
