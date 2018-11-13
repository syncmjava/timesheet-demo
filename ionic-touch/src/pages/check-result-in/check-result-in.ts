import { Component } from '@angular/core';
import { CheckInOutPage } from '../check-in-out/check-in-out';
import { IdInputPage } from '../id-input/id-input';

@Component({
  selector: 'page-check-result-in',
  templateUrl: 'check-result-in.html'
})
export class CheckResultInPage {
  checkInOutPage;
  idInputPage;
  constructor() {
    this.checkInOutPage = CheckInOutPage;
    this.idInputPage = IdInputPage;
  }
}
