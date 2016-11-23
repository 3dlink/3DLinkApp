import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DesignWork } from '../design-work/design-work';
import { DevelopmentWork } from '../development-work/development-work';
/*
  Generated class for the OurWork page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
  	selector: "our-work",
  	templateUrl: 'our-work.html'
  })
  export class OurWork {
  	design:any;
  	development: any;
  	constructor(public navCtrl: NavController) {
  		this.design = DesignWork;
  		this.development = DevelopmentWork;
  	}

  	openDesign(){
  		this.navCtrl.push(this.design, {},{duration:0});
  	}

  	openDevelopment(){
  		this.navCtrl.push(this.development, {},{duration:0});
  	}

  }
