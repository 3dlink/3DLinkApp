import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AboutUs } from '../pages/about-us/about-us';
import { WhatWeOffer } from '../pages/what-we-offer/what-we-offer';
import { ContactUs } from '../pages/contact-us/contact-us';
import { OurWork } from '../pages/our-work/our-work';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About Us', component: AboutUs },
      { title: 'What We Offer', component: WhatWeOffer },
      { title: 'Our Work', component: OurWork },
      { title: 'Contact Us', component: ContactUs }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
