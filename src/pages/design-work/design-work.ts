import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

/*
  Generated class for the DesignWork page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
  	selector: 'page-design-work',
  	templateUrl: 'design-work.html'
  })
  export class DesignWork {
  	@ViewChild('workSlider') slider: Slides;
  	works: Array<{name:string, title:string, img1:string, img2:string, img3:string, img4:string}>;
  	workSliderOptions = {
  		autoplay: 10000,
      loop: true
  	};
  	constructor(public navCtrl: NavController) {
  		this.works = [
  		{
  			name: "CienciApp - ",
        title: "Q&A mobile app for the Central University of Venezuela (UCV)",
  			img1: "img1474420232D4P.png",
  			img2: "img1474419575KGV.png",
  			img3: "img1474419483EXN.png",
  			img4: "img1474419447INM.png"
  		},
  		{
  			name: "Chocomatic - ",
        title: "Colombian chocolate brand",
  			img1: "img1469199814SP1.png",
  			img2: "img14691998813Y0.png",
  			img3: "img1469199010ALN.png",
  			img4: "img1469199896NJE.png"
  		},
  		{
  			name: "Chacao - ",
        title: "Productos Artesanales",
  			img1: "img1466197802BXG.png",
  			img2: "img1466197804P19.png",
  			img3: "img14661978100JS.png",
  			img4: "img146619782386G.png"
  		}
  		];
  	}

  }