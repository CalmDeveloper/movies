import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  showLoader = false;
  constructor(private router: Router ) {
    this.router = router;
  }
  ngOnInit() {
    this.router.events.subscribe((routerEvent: any) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoader = true;
      } else if (routerEvent instanceof NavigationEnd) {
        this.showLoader = false;
      } else if (routerEvent instanceof NavigationCancel) {
        this.showLoader = false;
      } else if (routerEvent instanceof NavigationError) {
        this.showLoader = false;
      }
    });
  }
}
