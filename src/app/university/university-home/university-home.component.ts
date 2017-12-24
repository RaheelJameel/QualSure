import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-uni-home',
  templateUrl: './university-home.component.html',
  styleUrls: ['./university-home.component.css']
})
export class UniversityHomeComponent {

  constructor(private router: Router) {
    // This is to make Angular Router reload the components when visiting the current link again
     // override the route reuse strategy
     this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     };

     this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
           window.scrollTo(0, 0);
        }
    });

  }
}
