import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  public items: any[] = [
    {
      id: 0,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Glasses',
      views: 100,
      price: 10,
    },
    {
      id: 1,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Ring Light',
      views: 200,
      price: 50,
    },
    {
      id: 2,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Tripod',
      views: 500,
      price: 100,
    },
    {
      id: 3,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Mic',
      views: 1500,
      price: 250,
    },
    {
      id: 4,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Phone',
      views: 3000,
      price: 500,
    },
  ]

  constructor() { }

  ngOnInit() {}

}
