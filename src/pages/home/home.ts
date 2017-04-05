import { Component, ViewChild, Injectable } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()

export class HomePage {
	@ViewChild('quoteSlider') slider: Slides; // Usage: with this we can use any of the Slides methods
	quotes: any = [];
	quoteSliderOptions = {
		loop: true,
		autoplay: 3000
	};

  constructor(public navCtrl: NavController, public http: Http) {
  	this.quotes = [
  		{text: '<strong>"We are here to put a dent in the universe.</strong> Otherwise why else even be here?"', author: 'Steve Jobs'},
  		{text: '"My job is not be easy on people. <strong>My job is to make them better"</strong>', author: 'Steve Jobs'},
  		{text: '"We are changing the world <strong>with technology"</strong>', author: 'Bill Gates'}
  	];

    // this.getQuotes();
  }

  // getQuotes () {
  //   this.http.get('http://3dlinkweb.com/3dlinkweb/quotes/getQuotes')
  //   .map((res: Response) => this.quotes = res.json())
  //   .subscribe(
  //       data => { this.quotes = data },
  //       err => console.error(err)
  //     );
  // }
}
