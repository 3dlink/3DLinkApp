import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'meet-the-team.html',
})
export class MeetTheTeam {
	@ViewChild('teamSlider') slider: Slides;
	personal: Array<{name:string, job:string, bio:string, img:string}>;
	name: string;
	job: string;
	bio: string;
	teamSliderOptions = {
		pager: true,
    autoplay: 20000,
    onTransitionEnd: (swiper, event) => {
      this.changePersonal(swiper.activeIndex);
    }
	};

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let personalWeb = navParams.get('team');
    // console.log(personalWeb);
    this.personal = personalWeb;
  	// this.personal = [
   //  {name:'Diego Torrealba', job:'Founder - CEO (Chief Executive Officer)', bio: 'He studied electrical engineering and has been working with big teams, designing electrical installations, automation systems and solutions with embedded systems between Venezuela and the United Kingdom. As a specialist in marketing, entrepreneurship, consulting and advisory he has the vision of leaving the 3D Link name as legacy in the world of technology.', img: 'diogo.png'},

   //  {name:'Diego Brito', job:'Founder – COO (Chief Operative Officer)', bio: 'He studied computer science and has worked with databases, information systems and applications with internet technology in Latin America, USA and Spain. Diego has been carrying out projects of great importance with the highest market standards and has many long term customers. As the operations chief, he leads the team of developers in 3D Link.', img: 'diego.png'},

   //  {name:'Diego San Miguel', job:'CMO (Chief Marketing Officer)', bio: 'Diego studied Telecommunications Engineering and has worked as a designer and developer for telecommunications networks, shaping his developing capabilities in the field of sales and marketing strategies for companies in Latin America and Europe, expanding his vision for business. His role in 3D Link is to provide our clients with the most effective business strategies.', img: 'sanmiguel.png'},

   //  {name:'Alirio Aranguren', job:'Web Developer', bio: 'He studied computer science and has been developing web and mobile applications (Android and iOS) with high customer demands and quality in Latin America. With plenty of expertise and endless efforts his goal is to use 3D Link as a platform for his ambitions to develop more and better products.', img: 'alirio.png'},

   //  {name:'César Hergueta', job:'Web & Mobile Developer – Team leader', bio: 'César studied computer engineering and has been developing web and mobile applications for different operating systems, improving his skills working with big groups. His expectations in the company are to create, innovate, and deliver products with the best quality, and capable of pushing the digital and technologic world to another level.', img: 'cesar.png'},

   //  {name:'Ricardo Chacoa ', job:'Art Director', bio: 'He studied graphic design, with experience working in advertising agencies, and as a freelance designer. Specialised in lettering, branding and web design, Ricardo has been working with multiple clients and brands around Latin America. With love for the details and excellence, he leads the design and creative department of 3D Link.', img: 'ricardo.png'},

   //  {name:'Pedro Diaz', job:'Web & Mobile Developer', bio: 'Pedro studied computer science and has been a web and mobile developer for clients in Colombia and Venezuela with the highest quality standards in the field. With years of experience in the banking industry in Venezuela, he has worked in projects for one of the most influential world financial organisations. His vision in 3D Link is to generate solutions using the best methods and tools to deliver quality products.', img: 'pedro.png'},

   //  {name:'Daniel Córcega ', job:'Web Developer', bio: 'With a degree in computer science, he focused his career in database management and big data, with years of experience in web development he saw the opportunity to grow and learn new skills as a developer when he joined the team. Expecting for 3D Link, to become one of the most successful companies in the field.', img: 'daniel.png'},

   //  {name:'Maryuri Rojas ', job:'Community Manager', bio: 'She has a degree in social communication. With experience in social media, she has been managing important personalities in the show business world in Venezuela. Maryuri has worked in public relations and in the production of massive events, which make her the right person for the digital marketing area in 3D Link.', img: 'maryuri.png'}
   //  ];

    this.changePersonal(0);
  }

  changePersonal(index = 0){
    var personal;
    personal = this.personal[index];
    this.name = personal.Personal.name;
    this.job = personal.Personal.job;
    this.bio = personal.Personal.bio;
  }
}
