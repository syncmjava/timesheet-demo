import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckInOutPage } from '../check-in-out/check-in-out';
import { BrowserQRCodeReader, VideoInputDevice } from '@zxing/library';

@Component({
  selector: 'page-id-input',
  templateUrl: 'id-input.html'
})
export class IdInputPage {
  currentId: string = "";

  checkInOutPage;

  codeReader;
  firstDeviceId;

  constructor(public navCtrl: NavController) {
    this.checkInOutPage = CheckInOutPage;

  }

  doInput(n) {
    this.currentId = this.currentId + n;    
  }

  delete() {
    this.currentId = "";

    this.codeReader.reset();
    console.log('Reset.');
    this.ionQrscannLoad();
  }

  ionViewDidLoad() {
    this.ionQrscannLoad();
    console.log('ionViewDidLoad ScanPage');
  }

  ionQrscannLoad() {
    this.codeReader= new BrowserQRCodeReader();
    console.log('qr code reader initialized')

    this.codeReader.getVideoInputDevices()
                .then((videoInputDevices) => {
                   
                  this.firstDeviceId = videoInputDevices[0].deviceId
                    console.log('firstDeviceId' + this.firstDeviceId);
                    if (videoInputDevices.length > 1) {
                        videoInputDevices.forEach((element) => {

                            console.log('label:' +element.label + ' firstDeviceId:' + element.deviceId);
                            
                        })

                    }

                 
                })
                .catch((err) => {
                    console.error(err)
                });
  


  this.codeReader.decodeFromInputVideoDevice(this.firstDeviceId, 'video').then((result) => {
    console.log('result: '+result);

    this.currentId = result;
   
    this.navCtrl.push(CheckInOutPage);
}).catch((err) => {
    console.error(err);
    
})
console.log('Started continous decode from camera with id ');

}

changecurrentId(){
    
}

}
