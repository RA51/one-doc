import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
	templateUrl: `./dashboard.layout.component.html`,
	styleUrls:  ['./dashboard.layout.component.scss']
})
export class DashboardLayoutComponent { 
	constructor(
		changeDetectorRef: ChangeDetectorRef) {
	 
	}
	ngOnDestroy() {
	 
	}	
}
    