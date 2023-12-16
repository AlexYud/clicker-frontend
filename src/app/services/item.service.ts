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

  private itemsMultipliedData: any[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  getItems() {
    return this.items;
  }

  multiplyMask(multiplier: number) {
    this.itemsMultipliedData = structuredClone(this.items);
    for (let index = 0; index < this.itemsMultipliedData.length; index++) {
      const item = this.itemsMultipliedData[index];
      item.totalPrice = item.price;
      item.totalViews = item.views;
      for (let index = 0; index < multiplier - 1; index++) {
        item.price += Math.floor(item.price * 0.5);
        item.views += (item.views * 0.2);
        item.totalPrice += item.price;
        item.totalViews += item.views;
      }
    }
    return this.itemsMultipliedData;
  }

  buyItem(item: any) {
    this.dataService.updateViewersPerSecond(item.totalViews ? item.totalViews : item.views);
    this.dataService.updateMoney(-(item.totalPrice ? item.totalPrice : item.price));
    const itemToUpdate = this.items.find(item => item.id === item.id);
    itemToUpdate.price += Math.floor(item.totalPrice ? item.totalPrice : item.price * 0.5);
    itemToUpdate.views += (item.totalViews ? item.totalViews : item.views * 0.2);
  }
}
