import { Component } from '@angular/core';
import { CheckResultPage } from '../check-result/check-result';
import { CheckResultInPage } from '../check-result-in/check-result-in';
@Component({
  selector: 'page-check-in-out',
  templateUrl: 'check-in-out.html'
})
export class CheckInOutPage {
  checkResultPage;
  checkResultInPage;

  constructor() {
    this.checkResultPage = CheckResultPage;
    this.checkResultInPage = CheckResultInPage;
  }
}
