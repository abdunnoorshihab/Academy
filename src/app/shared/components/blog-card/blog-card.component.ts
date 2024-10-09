import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() link!: string;
}
