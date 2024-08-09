// import { Swiper } from 'swiper';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

@Component({
  selector: 'app-swiper',
  standalone: true,
  template: `
    <div class="swiper-container overflow-hidden">
      <div class="swiper-wrapper">
        @for (slide of slides; track slide) {
          <div class="swiper-slide slide" (click)="flipSlide($index)">
            <div class="slide-inner" [class.flipped]="flippedSlides[$index]">
              <div class="slide-front">
                {{ slide }}
              </div>
              <div class="slide-back">Back content for slide {{ $index + 1 }}</div>
            </div>
          </div>
        }
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
  slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'];
  flippedSlides: boolean[] = new Array(this.slides.length).fill(false);

  ngOnInit() {
    const swiper = new Swiper('.swiper-container', {
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

  flipSlide(index: number) {
    this.flippedSlides[index] = !this.flippedSlides[index];
  }
}

// import { Component, inject, OnDestroy, OnInit } from '@angular/core';
// import DynamicScriptLoaderService from '../../services/dynamic-script-loader.service';
// import { EScriptStoreName } from '../../types/script.types';

// @Component({
//   selector: 'app-swiper',
//   standalone: true,
//   template: ` <div class="swiper-container overflow-hidden">
//     <div class="swiper-wrapper">
//       @for (slide of slides; track slide) {
//         <div class="swiper-slide slide" (click)="flipSlide($index)">
//           <div class="slide-inner" [class.flipped]="flippedSlides[$index]">
//             <div class="slide-front">
//               {{ slide }}
//             </div>
//             <div class="slide-back">slide {{ $index + 1 }} is flipped</div>
//           </div>
//         </div>
//       }
//     </div>
//     <div class="swiper-pagination"></div>
//     <div class="swiper-button-next"></div>
//     <div class="swiper-button-prev"></div>
//   </div>`,
//   styleUrls: ['./swiper.component.scss'],
//   providers: [DynamicScriptLoaderService],
// })
// export default class SwiperComponent implements OnInit, OnDestroy {
//   private readonly dynamicScriptLoader = inject(DynamicScriptLoaderService);

//   slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'];
//   flippedSlides: boolean[] = new Array(this.slides.length).fill(false);

//   private swiper: Swiper | null = null;

//   ngOnInit() {
//     this.dynamicScriptLoader.load(EScriptStoreName.SWIPER).then(() => {
//       this.initializeSwiper();
//     });
//   }

//   ngOnDestroy() {
//     this.swiper?.destroy();
//   }
//   // ! no classes
//   // elementRef +(viewchild)
//   private initializeSwiper() {
//     this.swiper = new Swiper('.swiper-container', {
//       slidesPerView: 1,
//       spaceBetween: 10,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   }

//   protected flipSlide(index: number) {
//     this.flippedSlides[index] = !this.flippedSlides[index];
//   }
// }

// computed
// effect
