import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckInOutPage, } from '../check-in-out/check-in-out';
import { IdInputPage } from '../id-input/id-input';

@Component({
  selector: 'page-check-result',
  templateUrl: 'check-result.html'
})
export class CheckResultPage {
  checkInOutPage;
  idInputPage;
  constructor(public navCtrl: NavController) {
    this.checkInOutPage = CheckInOutPage;
    this.idInputPage = IdInputPage;
  }

  goPopToRoot() {
     this.navCtrl.popToRoot(); 
  }
}
