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

  getViewersValue() {
    return this.viewers.value;
  }

  updateViewers(viewers: number) {
    this.viewers.next(viewers);
  }

  updateViewersPerSecond(viewersPerSecond: number) {
    this.viewersPerSecond += viewersPerSecond;
  }

  getViewers() {
    return this.viewers.asObservable();
  }

  getMoney() {
    return this.money.asObservable();
  }

  autoClicker() {
    setInterval(() => {
      this.updateViewers(this.viewers.value + this.viewersPerSecond);
      if (this.viewers.value >= 50) {
        const probability = 0.2 + (this.viewers.value / 2000)
        if (Math.random() < probability) {
          const moneyEarned = Math.floor(1 * Math.sqrt(1 + this.viewers.value / 200));
          this.updateMoney(moneyEarned);
        }
      }
    }, 400);
  }

  updateMoney(money: number) {
    this.money.next(money + this.money.value);
  }
}
