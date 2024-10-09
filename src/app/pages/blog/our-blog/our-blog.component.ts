import { Component } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrl: './our-blog.component.scss'
})
export class OurBlogComponent {
  blogPosts = [
    { 
      image: '../asset/3412.png',
      title: 'Blog Post One',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur corporis inventore',
      link: '#',
    },
    { 
      image: '../asset/3412.png',
      title: 'Blog Post Two',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur corporis inventore',
      link: '#',
    },
    { 
      image: '../asset/3412.png',
      title: 'Blog Post Three',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur corporis inventore',
      link: '#',
    },
    { 
      image: '../asset/3412.png',
      title: 'Blog Post One',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur corporis inventore',
      link: '#',
    },
    { 
      image: '../asset/3412.png',
      title: 'Blog Post Two',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur corporis inventore',
      link: '#',
    },
    { 
      image: '../asset/3412.png',
      title: 'Blog Post Three',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur corporis inventore',
      link: '#',
    },
    { 
      image: '../asset/3412.png',
      title: 'Blog Post Two',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur corporis inventore',
      link: '#',
    },
    { 
      image: '../asset/3412.png',
      title: 'Blog Post Three',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur corporis inventore',
      link: '#',
    },
  ];
}
