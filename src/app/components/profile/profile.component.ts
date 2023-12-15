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

  public multiplier: number = 1;

  constructor(
    private dataService: DataService,
    private itemService: ItemService,
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.viewersSubscription.unsubscribe();
    this.moneySubscription.unsubscribe();
  }

  handleMultiplier(multiplier: number) {
    let tab = document.getElementById('multiplierTab');
    let currentButton = <HTMLElement> tab?.querySelector("ion-button.activated");
    

    if (currentButton && !currentButton.innerText.includes(multiplier.toString())) {
      this.multiplier = multiplier
      currentButton.classList.remove('activated')
      let buttons = tab?.getElementsByTagName('ion-button')
  
      if (buttons) {
        for (let i = 0; i < buttons?.length; i++) {
          if (buttons[i].innerText.includes(multiplier.toString() + 'X')) {
            buttons[i].classList.add('activated')
          } 
        }
      }
    } 
  }

  segmentChanged(event: any) {
    // console.log(event.target.value);
  }

  buyItem(item: any) {
    this.itemService.buyItem(item);
    // Update VPS
    this.viewersPerSecond = this.dataService.getViewersPerSecond();
  }

  isInteger(value: number) {
    if (Number.isInteger(value)) return value;
    return value.toFixed(2);
  }
}
