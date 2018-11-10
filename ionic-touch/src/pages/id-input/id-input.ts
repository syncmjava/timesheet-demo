import { Component } from '@angular/core';
import { CheckInOutPage } from '../check-in-out/check-in-out';

@Component({
  selector: 'page-id-input',
  templateUrl: 'id-input.html'
})
export class IdInputPage {
  checkInOutPage;
  constructor() {
    this.checkInOutPage = CheckInOutPage;
  }
}
