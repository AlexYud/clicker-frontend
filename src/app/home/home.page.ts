import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public viewers: number = 0;
  public viewersPerSecond: number = 6;
  public money: number = 0;
  public moneyPerSecond: number = 2;

  constructor() { }

  ngOnInit() {
    this.autoClicker();
  }

  addClick() {
    this.viewers += 1;
  }

  addMoney() {
    this.money += 1;
  }

  autoClicker() {
    setInterval(() => {
      this.viewers += this.viewersPerSecond;
      if (this.viewers > 50) {
        if (Math.floor(Math.random() * 10) > 7) this.addMoney();
      }
      
    }, 400);
  }

}
