import { NgModule } from '@angular/core';

import {TypingCarouselDirective} from './typingCarousel.directive';

@NgModule({
    declarations: [
        TypingCarouselDirective
    ],
    exports: [
        TypingCarouselDirective
    ]
})
export class SharedModule{}