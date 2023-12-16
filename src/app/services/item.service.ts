import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: any[] = [
    {
      id: 0,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Glasses',
      views: 1,
      price: 10,
      unlock: 100,
    },
    {
      id: 1,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Ring Light',
      views: 2,
      price: 25,
      unlock: 500,
    },
    {
      id: 2,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Tripod',
      views: 4,
      price: 60,
      unlock: 2000,
    },
    {
      id: 3,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Mic',
      views: 8,
      price: 160,
      unlock: 5000,
    },
    {
      id: 4,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Phone',
      views: 16,
      price: 400,
      unlock: 20000,
    },
  ]

  constructor(
    private dataService: DataService,
  ) { }

  getItems() {
    return this.items;
  }

  buyItem(item: any, multiplier: number) {
    this.dataService.updateViewersPerSecond(item.views * ((Math.pow(1.2, multiplier) - 1) / (1.2 - 1)));
    this.dataService.updateMoney(-(Math.floor(item.price * ((Math.pow(1.5, multiplier) - 1) / (1.5 - 1)))));
    item.price = Math.floor(item.price * Math.pow((1 + 0.5), multiplier));
    item.views = item.views * Math.pow((1 + 0.2), multiplier);
  }
}
