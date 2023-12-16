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
export class ProfileComponent implements OnInit {
  public viewersSubscription: Subscription = this.dataService.getViewers().subscribe((viewers: number) => this.viewers = viewers);
  public viewers: number = this.dataService.getViewersValue();
  public viewersPerSecond: number = this.dataService.getViewersPerSecond();

  public money: number = 0;
  public moneySubscription: Subscription = this.dataService.getMoney().subscribe((money: number) => this.money = money);

  public multiplier: number = 1;

  public items: any[] = this.itemService.getItems();

  constructor(
    private dataService: DataService,
    private itemService: ItemService,
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.viewersSubscription.unsubscribe();
    this.moneySubscription.unsubscribe();
  }

  changeMultiplierValue(newValue: number) {
    this.multiplier = newValue;
    this.items = this.itemService.multiplyMask(newValue);
  }

  segmentChanged(event: any) {
    // console.log(event.target.value);
  }

  buyItem(item: any) {
    this.itemService.buyItem(item);
    this.items = this.itemService.multiplyMask(this.multiplier); // Update mask
    this.viewersPerSecond = this.dataService.getViewersPerSecond(); // Update VPS
  }

  isInteger(value: number) {
    if (Number.isInteger(value)) return value;
    return value.toFixed(2);
  }
}
