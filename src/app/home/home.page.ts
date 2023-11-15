import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileComponent } from '../components/profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public viewers: number = 50;
  public viewersPerSecond: number = 0;
  public money: number = 0;
  public moneyPerSecond: number = 2;
  public playerName: string = 'Galowillian';
  public tipMultiplier: number = 0;
  public chat: any[] = [
  ];
  public tips: any[] = [
  ]

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.autoClicker();
    this.updateChat();
    this.updateTip();
  }

  async openProfileModal() {
    const modal = await this.modalCtrl.create({
      component: ProfileComponent,
      initialBreakpoint: 0.75,
      breakpoints: [0, 0.25, 0.5, 0.75],
    });
    modal.present();
    await modal.onWillDismiss();
  }

  addClick() {
    this.viewers += 1;
  }

  addMoney() {
    this.money += 1;
  }

  addChat() {
    var nameList = [
      'Time', 'Past', 'Future', 'Dev',
      'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
      'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
      'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
      'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
      'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
      'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
      'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
      'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
      'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
      'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
      'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
      'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
      'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
      'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
      'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
      'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
      'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
      'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
      'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
      'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
    ];
    const characters = 'abcdefghijklmnopqrstuvwxyz';

    const comentariosTikTok = [
      "Conteúdo incrível! 👏",
      "Adorando essa live! 😄",
      "Melhor TikTok!",
      "Oi pra geral! 👋",
      "Dica sensacional!",
      "Engraçade hahaha!",
      "Viciade aqui!",
      "Criatividade!",
      "Carismátice?",
      "Live bombando!",
      "Like antes de começar!",
      "Mais lives, por favor!",
      "Mais dicas, arrasou!",
      "Rindo muito aqui!",
      "Merece destaque!",
      "Posso roubar? 😜",
      "Inspirador(a)!",
      "Amando cada segundo!",
      "Truque maravilhoso!",
      
      // Comentários de "hate"
      "Conteúdo chato!",
      "Perda de tempo.",
      "Sem graça.",
      "Sem criatividade.",
      "Pior TikTok.",
      "Ninguém liga.",
      "Patético.",
      "Desisto.",
      "Ridículo!",
      "Algo melhor.",
    ];
    const comentarioAleatorio = comentariosTikTok[Math.floor(Math.random() * comentariosTikTok.length)];


    if (this.chat.length === 4) this.chat.shift();
    this.chat.push({
      id: 0,
      img: 'https://i.pravatar.cc/300?u=' + characters.charAt(Math.floor(Math.random() * characters.length)),
      name: nameList[Math.floor(Math.random() * nameList.length)],
      comment: comentarioAleatorio
    });
  }

  addTip() {
    var nameList = [
      'Time', 'Past', 'Future', 'Dev',
      'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
      'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
      'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
      'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
      'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
      'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
      'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
      'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
      'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
      'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
      'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
      'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
      'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
      'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
      'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
      'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
      'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
      'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
      'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
      'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
    ];
    const characters = 'abcdefghijklmnopqrstuvwxyz';

    const donationIcons = [{ name: 'planet', value: 50 }, { name: 'pizza', value: 10 }, { name: 'rocket', value: 100 }]

    const donation = donationIcons[Math.floor(Math.random() * donationIcons.length)]
    const multiplier = Math.floor(Math.random() * 4) + 1;

    this.money += multiplier * donation.value


    this.tips.shift();
    this.tips.push({
      id: 0,
      img: 'https://i.pravatar.cc/300?u=' + characters.charAt(Math.floor(Math.random() * characters.length)),
      icon: donation.name,
      timestamp: new Date(),
      name: nameList[Math.floor(Math.random() * nameList.length)],
      multiplier: multiplier,
    });
  }

  updateChat() {
    var chance: number = 99;
    setInterval(() => {
      switch (true) {
        case this.viewers < 50:
          chance = 99
          break;
        case this.viewers < 200:
          chance = 97
          break;
        case this.viewers < 500:
          chance = 95
          break;
        case this.viewers < 1000:
          chance = 85
          break;
        case this.viewers < 5000:
          chance = 80
          break;
        case this.viewers < 10000:
          chance = 75
          break;
        case this.viewers < 15000:
          chance = 70
          break;
        default:
          break;
      }

      if (Math.floor(Math.random() * 100) > chance) this.addChat();
    }, 100);
  }

  updateTip() {
    var chance: number = 99;
    setInterval(() => {
      switch (true) {
        case this.viewers < 50:
          chance = 99
          break;
        case this.viewers < 200:
          chance = 97
          break;
        case this.viewers < 500:
          chance = 95
          break;
        case this.viewers < 1000:
          chance = 85
          break;
        case this.viewers < 5000:
          chance = 80
          break;
        case this.viewers < 10000:
          chance = 75
          break;
        case this.viewers < 15000:
          chance = 70
          break;
        default:
          break;
      }

      if (this.tips.length >= 1) {
        const tipTimestamp = this.tips[0].timestamp;
        const currentTimestamp = new Date();
        const diff = (currentTimestamp.getTime() - tipTimestamp.getTime()) / 1000;

        if (diff >= 5) {
          this.tips.shift()
        }
      }

      if (Math.floor(Math.random() * 100) > chance) this.addTip();
    }, 1000);
  }

  autoClicker() {
    setInterval(() => {
      if (this.viewers >= 50) {
        this.viewersPerSecond = Math.floor(this.viewers / 100) == 0 ? 1 : Math.floor(this.viewers / 100);
        this.viewers += this.viewersPerSecond;
      }
      if (this.viewers >= 100) {
        if (Math.floor(Math.random() * 10) > 7) this.addMoney();
      }
    }, 400);
  }

}
