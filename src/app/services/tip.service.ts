import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class TipService {
  private tips = [
    { name: 'ice-cream', value: 100 }, 
    { name: 'pizza', value: 250 }, 
    { name: 'rocket', value: 500 },
    { name: 'planet', value: 1000 },
    { name: 'diamond', value: 10000 },
  ];

  constructor(
    private chatService: ChatService,
  ) { }

  getRandomTip() {
    var chance: number = Math.floor(Math.random() * 100) + 1;
    var tip = this.tips[0];
    
    switch (true) {
      case chance < 2: tip = this.tips[4]; break;
      case chance < 6: tip = this.tips[3]; break;
      case chance < 11: tip = this.tips[2]; break;
      case chance < 51: tip = this.tips[1]; break;
      case chance < 101: tip = this.tips[0]; break;
      default: break;
    }

    chance = Math.floor(Math.random() * 100) + 1;
    var multiplier = 1;
    switch (true) {
      case chance < 2: multiplier = 100; break;
      case chance < 6: multiplier = 10; break;
      case chance < 11: multiplier = 5; break;
      case chance < 51: multiplier = 2; break;
      case chance < 101: multiplier = 1; break;
      default: break;
    }

    const spectator = this.chatService.getRandomSpectator();

    return {
      id: spectator.id,
      img: spectator.img,
      icon: tip.name,
      timestamp: new Date(),
      name: spectator.name,
      multiplier: multiplier,
      amount: tip.value * multiplier,
    }
  }
}
