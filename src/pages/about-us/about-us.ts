import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MeetTheTeam } from '../meet-the-team/meet-the-team';

/*
  Generated class for the AboutUs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'about-us.html',
})
export class AboutUs {
	team: any;

  constructor(public navCtrl: NavController) {
    this.team = MeetTheTeam;
  }

  openTeam() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(this.team, {},{duration:0});
  }
}
