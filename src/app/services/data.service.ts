import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private viewers: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private viewersPerSecond: number = 0;
  private money: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private moneyPerSecond: number = 0;

 

  constructor() { }

  updateViewers(viewers: number) {
    this.viewers.next(viewers);
  }

  getViewers() {
    return this.viewers.asObservable();
  }

  getMoney() {
    return this.money.asObservable();
  }

  addViewer() {
    this.updateViewers(this.viewers.value + 1);
  }

  autoClicker() {
    setInterval(() => {
      this.updateViewers(this.viewers.value + this.viewersPerSecond);
      if (this.viewers.value >= 100) {
        if (Math.floor(Math.random() * 10) > 7) this.updateMoney(this.money.value + this.moneyPerSecond);
      }
    }, 400);
  }

  updateMoney(money: number) {
    this.money.next(money);
  }
}
