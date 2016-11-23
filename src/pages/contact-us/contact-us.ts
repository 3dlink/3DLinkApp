import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the ContactUs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html'
})

export class ContactUs {
  data: any = {
    'name': '',
    'phone': '',
    'email': '',
    'question': ''
  };
  response: any = 0;

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {}

  sendMail(form){
    var alert;

    if(this.data['name'] == '' || this.data['email'] == '' || this.data['question'] == '') {
      alert = this.alertCtrl.create({
        subTitle: 'Please write your name, email and your question.',
        buttons: ['OK']
      });
      alert.present();
    } else {
      var headers = new Headers({ 'Content-Type': 'application/json' });
      var options = new RequestOptions({ headers: headers });
      this.http.post('http://www.3dlinkweb.com/start/sendAppMail', JSON.stringify(this.data), options)
      .subscribe(res => this.clearForm(),
       error => {
        alert = this.alertCtrl.create({
          title: 'Opps!',
          subTitle: "There was an error sending the mail, please try again!",
          buttons: ['OK']
        });
        alert.present();
      });
    }
  }

  clearForm(){
    this.data['name'] = '';
    this.data['phone'] = '';
    this.data['email'] = '';
    this.data['question'] = '';

    var alert = this.alertCtrl.create({
          title: 'Email sent!',
          subTitle: "Thanks for your message, we will contact you soon.",
          buttons: ['OK']
        });
        alert.present();
  }
}
