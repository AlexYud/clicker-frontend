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
      views: 10,
      price: 10,
      unlockable: 100,
    },
    {
      id: 1,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Ring Light',
      views: 20,
      price: 25,
      unlockable: 500,
    },
    {
      id: 2,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Tripod',
      views: 40,
      price: 60,
      unlockable: 2000,
    },
    {
      id: 3,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Mic',
      views: 80,
      price: 160,
      unlockable: 5000,
    },
    {
      id: 4,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Phone',
      views: 160,
      price: 400,
      unlockable: 20000,
    },
  ]

  constructor(
    private dataService: DataService,
  ) { }

  
  getItems() {
    return this.items;
  }

  buyItem(item: any) {
    this.dataService.updateViewersPerSecond(item.views);
    this.dataService.updateMoney(-item.price);
    item.price += Math.floor(item.price * 0.5);
    item.views += Math.floor(item.views * 0.2);
  }
}
