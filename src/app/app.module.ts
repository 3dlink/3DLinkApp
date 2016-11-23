import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutUs } from '../pages/about-us/about-us';
import { WhatWeOffer } from '../pages/what-we-offer/what-we-offer';
import { ContactUs } from '../pages/contact-us/contact-us';
import { OurWork } from '../pages/our-work/our-work';
import { MeetTheTeam } from '../pages/meet-the-team/meet-the-team';
import { DesignWork } from '../pages/design-work/design-work';
import { DevelopmentWork } from '../pages/development-work/development-work';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutUs,
    ContactUs,
    OurWork,
    WhatWeOffer,
    MeetTheTeam,
    DesignWork,
    DevelopmentWork
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutUs,
    ContactUs,
    OurWork,
    WhatWeOffer,
    MeetTheTeam,
    DevelopmentWork,
    DesignWork
  ],
  providers: []
})
export class AppModule {}
