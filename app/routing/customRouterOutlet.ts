import {Directive} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Directive({
  selector: 'router-outlet'
})

export class CustomRouterOutlet extends RouterOutlet {
  activate() {
    console.log('Hello from the new router outlet!');
  }
}