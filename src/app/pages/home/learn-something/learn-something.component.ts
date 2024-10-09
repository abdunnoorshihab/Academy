import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-something',
  templateUrl: './learn-something.component.html',
  styleUrl: './learn-something.component.scss',
})
export class LearnSomethingComponent {
 customDb: any[] = [
  {id: 1, title: "hello1", bg: '#1B9AAA'},
  {id: 2, title: "hello2", bg: '#7765E3'},
  {id: 3, title: "hello3", bg: '#EFB9CB'},
 ]
}
