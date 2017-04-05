import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { NavController } from 'ionic-angular';

// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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
    teamWeb: any;

    constructor(public navCtrl: NavController, public http: Http) {
      this.team = MeetTheTeam;
    }

    openTeam() {
      this.http.get('http://3dlinkweb.com/Personals/getPersonal')
      .map((res: Response) => this.teamWeb = res.json())
      .subscribe(
        data => { this.teamWeb = data; this.navCtrl.push(this.team, {team: this.teamWeb},{duration:0}); },
        err => console.error(err)
        );
      // this.navCtrl.push(this.team, {},{duration:0});
    }
  }
