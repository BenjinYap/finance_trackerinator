import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

type Link = {
  url: string,
  text: string,
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public links: Link[] = [
    {url: '/', text: 'Home'},
    {url: '/about', text: 'About'},
  ];
}


