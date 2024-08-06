// src/app/swiper-example/swiper-example.component.ts

import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-swiper',
  standalone: true,

  template: `
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  `,
  styleUrls: ['./swiper.component.scss'],
})
export default class SwiperExampleComponent implements OnInit {
  ngOnInit() {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Scrollbar, A11y],
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: { el: '.swiper-scrollbar', draggable: true },
    });
  }
}
