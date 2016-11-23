import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

/*
  Generated class for the DevelopmentWork page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
  	selector: 'page-development-work',
  	templateUrl: 'development-work.html'
  })
  export class DevelopmentWork {
  	@ViewChild('workSlider') slider: Slides;
  	works: Array<{name:string, url:string, img1:string, img2:string, img3:string, img4:string}>;
  	workSliderOptions = {
  		autoplay: 10000,
  		loop: true
  	};
  	constructor(public navCtrl: NavController) {
  		this.works = [
  		{
  			name: "Criollos Full Agency",
  			url: "http://www.3dlinkweb.com/criollos/",
  			img1: "img1473214923EVN.PNG",
  			img2: "img1473215216D6M.PNG",
  			img3: "img14732155038NW.PNG",
  			img4: "img1473215783GGW.PNG"
  		},
  		{
  			name: "Bricks - Real estate",
  			url: "http://bricksusa.com/",
  			img1: "img1468640566R4Z.PNG",
  			img2: "img1468640220VQC.PNG",
  			img3: "img146864103423R.PNG",
  			img4: "img1468641475GZI.PNG"
  		},
  		{
  			name: "Pikos - Lencería combinable",
  			url: "http://pikos.com.ve/",
  			img1: "img1468643176GTF.PNG",
  			img2: "img146864396529P.PNG",
  			img3: "img1468643590NZZ.PNG",
  			img4: "img1468644156F4G.PNG"
  		},
  		{
  			name: "Mentor - Career decision program",
  			url: "https://joinmentor.co/",
  			img1: "img14686363741DG.PNG",
  			img2: "img1468637149OK7.PNG",
  			img3: "img1468637819ZIY.PNG",
  			img4: "img1468638712PHT.PNG"
  		},
  		{
  			name: "Clubs - Fan Pass",
  			url: "http://www.3dlinkweb.com/clubs/",
  			img1: "img1474421842L37.PNG",
  			img2: "img1474420372I0L.PNG",
  			img3: "img1474420920H6D.PNG",
  			img4: "img1474421599HOW.PNG"
  		},
  		{
  			name: "Schools - Fan Pass",
  			url: "http://www.3dlinkweb.com/schools/",
  			img1: "img14744180810B9.PNG",
  			img2: "img1474418419HFH.PNG",
  			img3: "img1474418746JG2.PNG",
  			img4: "img147441907023U.PNG"
  		},
  		{
  			name: "Gail & Judy - Mobile App",
  			url: "_blank",
  			img1: "img1476411806QR6.PNG",
  			img2: "img1476410110GGC.PNG",
  			img3: "img1476412253R1Q.PNG",
  			img4: "img14764108278MI.PNG"
  		},
  		{
  			name: "PurpleDash - Design Studio",
  			url: "http://www.3dlinkweb.com/purpledash_new/",
  			img1: "img14764144456Q0.PNG",
  			img2: "img1476413820XGE.PNG",
  			img3: "img1476412628S1A.PNG",
  			img4: "img1476413173F3L.PNG"
  		}
  		];
  	}

  }
