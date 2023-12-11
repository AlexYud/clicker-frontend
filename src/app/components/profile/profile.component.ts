import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { UtilsService } from 'src/app/services/utils.service';

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

  public items: any[] = this.itemService.getItems();

  constructor(
    private dataService: DataService,
    private itemService: ItemService,
  ) { }

  ngOnInit() {}

  ngOnDestroy() {
    this.viewersSubscription.unsubscribe();
    this.moneySubscription.unsubscribe();
  }

  segmentChanged(event: any) {
    // console.log(event.target.value);
  }

  buyItem(item: any) {
    this.itemService.buyItem(item);
  }

  isInteger(value: number) {
    if (Number.isInteger(value)) return value;
    return value.toFixed(2);
  }
}
