import { trigger, state, animate, transition, style } from '@angular/animations';
import { AnimationEntryMetadata } from "@angular/core";

export const fadeAnimation =
    trigger('fadeAnimation', [
        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('1s', style({ opacity: 1 }))
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
          animate('1s', style({ opacity: 0 }))
        ])
    ]);




    // animations: [
    //   trigger(
    //     'myAnimation',
    //     [
    //       transition(
    //       ':enter', [
    //         style({transform: 'translateX(100%)', opacity: 0}),
    //         animate('500ms', style({transform: 'translateX(0)', 'opacity': 1}))
    //       ]
    //     ),
    //     transition(
    //       ':leave', [
    //         style({transform: 'translateX(0)', 'opacity': 1}),
    //         animate('500ms', style({transform: 'translateX(100%)', 'opacity': 0}),
    //
    //       ]
    //     )]
    //   )
