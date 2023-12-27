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
    public utilsService: UtilsService,
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.viewersSubscription.unsubscribe();
    this.moneySubscription.unsubscribe();
  }

  changeMultiplierValue(newValue: number) {
    if (newValue == this.multiplier) {
      return
    }
    this.multiplier = newValue;
  }

  calculateMask(value: any, multiplier: number, proportion: number, isViewers: boolean) {
    return isViewers ? value * ((Math.pow(proportion, multiplier) - 1) / (proportion - 1)) : Math.floor(value * ((Math.pow(proportion, multiplier) - 1) / (proportion - 1)));
  }

  segmentChanged(event: any) {
    // console.log(event.target.value);
  } 

  buyItem(item: any) {
    this.itemService.buyItem(item, this.multiplier);
    this.viewersPerSecond = this.dataService.getViewersPerSecond(); // Update VPS
  }
}
