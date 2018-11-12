import { Component } from '@angular/core';
import { CheckInOutPage } from '../check-in-out/check-in-out';

@Component({
  selector: 'page-id-input',
  templateUrl: 'id-input.html'
})
export class IdInputPage {
  currentId: string = "";

  checkInOutPage;
  constructor() {
    this.checkInOutPage = CheckInOutPage;
  }

  doInput(n) {
    this.currentId = this.currentId + n;
  }

  delete() {
    this.currentId = "";
  }
}
