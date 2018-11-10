import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IdInputPage } from '../id-input/id-input';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  idInputPage;
  constructor(public navCtrl: NavController) {
    this.idInputPage = IdInputPage;
  }

  pushIdInputPage(){  
    this.navCtrl.push(IdInputPage);
  }

}
