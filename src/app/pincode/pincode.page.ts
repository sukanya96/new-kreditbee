import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.page.html',
  styleUrls: ['./pincode.page.scss'],
})
export class PincodePage implements OnInit {

  shownGroup = null;

  constructor() { }
 
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
      } else {
        this.shownGroup = group;
      }
   };
  
  isGroupShown(group) {
    return this.shownGroup === group;
  };

 
  ngOnInit() {
    
    
  }
  

}
