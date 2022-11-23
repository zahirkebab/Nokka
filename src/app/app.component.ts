import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}





