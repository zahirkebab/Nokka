import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent implements OnInit {
  title = 'Nokka';
  imgCollection: Array<object> = [{
    image: 'https://loremflickr.com/g/600/400/paris',
    thumbImage: 'https://loremflickr.com/g/1200/800/paris',
    alt: 'Image 1',
    title: 'Image 1'
  }, {
    image: 'https://loremflickr.com/600/400/brazil,rio',
    thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
    title: 'Image 2',
    alt: 'Image 2'
  }]

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    }
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    }
  }
}





