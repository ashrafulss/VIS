import { trigger, transition, style, query, animate, group, animateChild } from '@angular/animations';

export const appRouteAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),

    query(':enter', [
      style({ left: '-100%' })
    ], { optional: true }),

    query(':leave', animateChild(), { optional: true }),

    group([
      query(':leave', [
        animate('500ms ease-out', style({ left: '100%' }))
      ], { optional: true }),

      query(':enter', [
        animate('500ms ease-out', style({ left: '0%' }))
      ], { optional: true }),
    ]),
  ]),
]);
