import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slides = [
    {
     
      title: "Crews",
      description: "<p> A dedicated plateform for organizing your parties and events between friends. <p >Offer, vote and find what events best fit your crew.</p></p>",
      image: "assets/imgs/image (12).png",
    },
    {
     
      title: "Explore",
      description: "<p> Based on your preference, inspire yourself froa a like-minded community or build your favorite path step by step.</p>",
      image: "assets/imgs/slide2.png",
    },
    {
     
      title: "Create",
      description: "<p> Show the world what an advanture sounds like to you and become an influencer!</p>",
      image: "assets/imgs/slide3.png",
    },
    {
     
      title: "Activity",
      description: "<p> Be aware of all the latest trends that might actually interest you while keeping in touch with your friends and influencers of the mement</p>",
      image: "assets/imgs/slide4.png",
    }
  ];

}
