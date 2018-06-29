import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition( '* => *', [
             query(':enter',
                 [
                     style({ opacity: 0 })
                 ],
                 { optional: true }
             ),

             query(':leave',
                 [
                     style({ opacity: 1 }),
                     animate('2s', style({ opacity: 0 }))
                 ],
                 { optional: true }
             ),

             query(':enter',
                 [
                     style({ opacity: 0 }),
                     animate('2s', style({ opacity: 1 }))
                 ],
                 { optional: true }
             )
         ])
])

export const fadeAnimation =
trigger('fadeAnimation', [
    // route 'enter' transition
    transition(':enter', [

        // styles at start of transition
        style({ opacity: 0 }),

        // animation and styles at end of transition
        animate('2s', style({ opacity: 1 }))
    ]),
    transition(':leave', [

        // styles at start of transition
        style({ opacity: 1 }),

        // animation and styles at end of transition
        animate('2s', style({ opacity: 0 }))
    ])
    // trigger('fadeAnimation', [
    //     // route 'enter' transition
    //     transition(':enter', [
    //
    //         // styles at start of transition
    //         style({ opacity: 0 }),
    //
    //         // animation and styles at end of transition
    //         animate('0.5s', style({ opacity: 1 }))
    //     ]),
    //     transition(':leave', [   // :leave is alias to '* => void'
    //       animate('0.5s', style({ opacity: 0 }))
    //     ])
    ]);
