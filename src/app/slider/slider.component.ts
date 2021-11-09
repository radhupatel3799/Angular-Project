import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slides = [
    { img: 'assets/images/abc.png' },
    { img: 'assets/images/d.png' },
    { img: 'assets/images/s.png' },
    { img: 'assets/images/n.png' },
    { img: 'assets/images/h.png' },
    { img: 'assets/images/abc.png' },
    { img: 'assets/images/d.png' },
    { img: 'assets/images/s.png' },
    { img: 'assets/images/n.png' },
    { img: 'assets/images/h.png' },
  ]
  slideConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 4,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
