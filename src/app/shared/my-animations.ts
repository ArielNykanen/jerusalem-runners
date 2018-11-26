import { trigger, state, style, transition, animate } from '@angular/animations';
export let translateFromL = trigger('translateFromL', [
    state('void', style({
        opacity: '0',
        transform: 'translateX(1500px)',
    })),
    transition(':enter, :leave', [
        animate(300)
    ]),
]);
