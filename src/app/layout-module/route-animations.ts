import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';


//Basic fader animations
export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      // Animate the new page in
      query(':enter', [
        animate('1000ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ])
    ]),
]);

//complex animations
export const stepper =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
        }),
      ]),
      group([
        query(':enter', [
          animate('10000ms ease', keyframes([
            style({ transform: 'scale(0) translateY(100%)', offset: 0 }),
            style({ transform: 'scale(0.5) translateY(100%)', offset: 0.1 }),
            style({ transform: 'scale(0.7) translateY(70%)', offset: 0.2 }),
            style({ transform: 'scale(1) translateY(0%)', offset: 0.3 }),
            style({ transform: 'scale(0) translateY(100%)', offset: 0.7 }),
            style({ transform: 'scale(0.5) translateY(100%)', offset:0.8 }),
            style({ transform: 'scale(0.7) translateY(70%)', offset: 0.9 }),
            style({ transform: 'scale(1) translateY(0%)', offset: 1 }),
            // style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
          ])),
        ]),
        // query(':leave', [
        //   animate('2000ms ease', keyframes([
        //     style({ transform: 'scale(1)', offset: 0 }),
        //     style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
        //     style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
        //   ])),
        // ])
      ]),
    ])

]);

