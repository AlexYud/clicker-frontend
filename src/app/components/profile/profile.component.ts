import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  public viewersSubscription: Subscription = this.dataService.getViewers().subscribe((viewers: number) => this.viewers = viewers);
  public viewers: number = this.dataService.getViewersValue();
  
  public money: number = 0;
  public moneySubscription: Subscription = this.dataService.getMoney().subscribe((money: number) => this.money = money);

  public items: any[] = [
    {
      id: 0,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Glasses',
      views: 100,
      price: 10,
      unlockable: 100,
    },
    {
      id: 1,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Ring Light',
      views: 200,
      price: 50,
      unlockable: 500,
    },
    {
      id: 2,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Tripod',
      views: 500,
      price: 100,
      unlockable: 2000,
    },
    {
      id: 3,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Mic',
      views: 1500,
      price: 250,
      unlockable: 5000,
    },
    {
      id: 4,
      img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      name: 'Phone',
      views: 3000,
      price: 500,
      unlockable: 20000,
    },
  ]

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {}

  ngOnDestroy() {
    this.viewersSubscription.unsubscribe();
    this.moneySubscription.unsubscribe();
  }
  

  buyItem(item: any) {
    this.dataService.updateViewersPerSecond(item.views);
    this.dataService.updateMoney(-item.price)
  }

}
