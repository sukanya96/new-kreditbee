import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message:`
      <i style='font-size:24px' class='far'>&#xf2c1;</i> Allow Proacsent to agree this details?`,
      
      buttons: [
        {
          text:'DENY',
          role:'cancel',
          handler:() => {
          console.log('Deny clicked');
          }
        },
        {
          text: 'ALLOW',
          handler:() => {
          console.log('Allow clicked');
         }
        }
      ],
      
    });
    
    await alert.present();
    const result=await alert.onDidDismiss();
    console.log(result);
  }


  ngOnInit() {
  }

}
