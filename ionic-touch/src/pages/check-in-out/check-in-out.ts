import { Component } from '@angular/core';
import { CheckResultPage } from '../check-result/check-result';

@Component({
  selector: 'page-check-in-out',
  templateUrl: 'check-in-out.html'
})
export class CheckInOutPage {
  checkResultPage;
  constructor() {
    this.checkResultPage = CheckResultPage;
  }
}
