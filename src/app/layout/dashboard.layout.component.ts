import { Component ,OnInit} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
	templateUrl: `./dashboard.layout.component.html`,
	styleUrls:  ['./dashboard.layout.component.scss'],
	 
})
export class DashboardLayoutComponent implements OnInit { 
 
	opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  // overlap = false;

  watcher: Subscription;

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }

  ngOnInit() {

  }
 
}
    